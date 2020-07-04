import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AddorupdateuserComponent} from '../addorupdateuser/addorupdateuser.component';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import Swal from 'sweetalert2';
import {AppResponse} from '../model/app-response';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public displayedColumns: string[] = ['firstname', 'lastname', 'username', 'email', 'action'];
  // @ts-ignore
  public users: User[] = [];
  public dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public dialog: MatDialog, private userService: UserService) {

  }

  ngOnInit() {
    this.loadUser();

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddorupdateuserComponent, {
      width: '600px',
      data: {title: 'Ajouter un utilisateur'}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadUser();
      console.log('The dialog was closed');
    });
  }

  openEditUser(userToUpdate: User) {
    const dialogRef = this.dialog.open(AddorupdateuserComponent, {
      width: '600px',
      data: {title: 'Modifier un utilisateur', user: userToUpdate, update: true}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadUser();
      console.log('The dialog was closed');
    });
  }

  deleteUser(row: User) {
    Swal.fire({
      title: 'Etes vous sure?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui!'
    }).then((result) => {
      this.userService.deleteUser(row.id).subscribe(
        (rep: AppResponse) => {
          Swal.fire(
            rep.message,
            '',
            'success'
          );
          this.loadUser();
        }
      );


    });


  }

  loadUser() {
    this.userService.findAllUser().subscribe(
      (userdata: User[]) => {
        console.log(userdata);
        this.users = userdata;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
}
