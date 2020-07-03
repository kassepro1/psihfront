import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PNotifyService} from '../service/pnotify.service';
import {User} from '../model/user';
import Swal from 'sweetalert2';
import {UserService} from '../service/user.service';
import {AppResponse} from '../model/app-response';

@Component({
  selector: 'app-addorupdateuser',
  templateUrl: './addorupdateuser.component.html',
  styleUrls: ['./addorupdateuser.component.css']
})
export class AddorupdateuserComponent implements OnInit {
  public userForm: FormGroup;
  public add = false;
  public update = false;
  pnotify: any;

  constructor(public dialogRef: MatDialogRef<AddorupdateuserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any , private userService: UserService) {
    this.userForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      username: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.email])
    });
    // loading the form if user want to update
    if (this.data.user !== undefined && this.data.user != null && this.data !== '') {
      this.update = this.data.update;
      this.userForm.patchValue(
        {firstname : this.data.user.lastname,
        lastname : this.data.user.firstname,
        username : this.data.user.username,
        email : this.data.user.email}
      );
    } else {
      this.add = true;
    }
  }

  public hasError(field: string, errorName: string) {
    return this.userForm.controls[field].hasError(errorName);
  }

  public addOrUpdateUser(user) {
       if (this.userForm.valid) {
            console.log(user);

            if (this.add === true) {
              this.userService.createUser(user).subscribe(
                (rep: AppResponse) => {
                  Swal.fire('INFO', rep.message, 'success');
                  this.dialogRef.close();
                }, error1 => {
                  if (error1.status === 400 && error1.error.etat === false) {
                    Swal.fire('INFO', error1.error.message, 'error');

                  }
                }
              );

            } else if (this.update === true) {
              this.userService.updateUser(this.data.user.id, user).subscribe(
                (rep: AppResponse) => {
                  Swal.fire('INFO', rep.message, 'success');
                  this.dialogRef.close();
                }, error1 => {
                  if (error1.status === 400 && error1.error.etat === false) {
                    Swal.fire('INFO', error1.error.message, 'error');

                  }
                }
              );
            }
       }

  }


  ngOnInit() {
  }

  closeDialog() {
    this.userForm.reset();
    this.dialogRef.close();
  }

  searchEmail(email: string) {
    if (email !== '' && email !== undefined) {
      this.userService.findUserByEmail(email).subscribe(
        (rep: boolean) => {
         if (rep === true) {
           Swal.fire('INFO', 'Email existe deja', 'error');
         }
        }
      );
    }

  }

  searchUsername(username: string) {
    this.userService.findUserByUsername(username).subscribe(
      (rep: boolean) => {
        if (rep === true) {
          Swal.fire('INFO', 'Nom d\' utilisateur est deja pris', 'error');
        }
      }
    );
  }
}
