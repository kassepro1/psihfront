import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AddorupdateuserComponent} from '../addorupdateuser/addorupdateuser.component';
import {User} from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public displayedColumns: string[] = ['firstname', 'lastname', 'username', 'email', 'action'];
  // @ts-ignore
  public users: User[] = [{
    firstname: 'Doudou',
    lastname: 'NDIAYE',
    username: 'coumbarose',
    email: 'doudoundiaye@gmail.com'
  }];
  public dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
      console.log('The dialog was closed');
    });
  }

  openEditUser(userToUpdate: User) {
    const dialogRef = this.dialog.open(AddorupdateuserComponent, {
      width: '600px',
      data: {title: 'Modifier un utilisateur', user: userToUpdate, update: true}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteUser(row: any) {

  }
}
