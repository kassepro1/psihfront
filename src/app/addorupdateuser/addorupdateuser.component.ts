import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PNotifyService} from '../service/pnotify.service';
import {User} from '../model/user';
import Swal from 'sweetalert2';

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
              @Inject(MAT_DIALOG_DATA) public data: any , pNotifyService: PNotifyService) {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      username: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.email])
    });
    this.pnotify = pNotifyService.getPNotify();
    // loading the form if user want to update
    if (this.data.user !== undefined && this.data.user != null && this.data !== '') {
      this.update = true;
      this.userForm.patchValue(
        {firstName : this.data.user.lastname,
        lastName : this.data.user.firstname,
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
              Swal.fire('INFO', 'Utilisateur ajouté avec succes ', 'success');

            } else if (this.update === true) {
              alert('updating');
            }
       }

  }

  public deletUser(userToDelete: User) {
    Swal.fire({
      title: 'Etes vous sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui!'
    }).then((result) => {
            Swal.fire(
              'Deleted!',
              'Supprimer .',
              'success'
            );

    });

  }

  ngOnInit() {
  }

}
