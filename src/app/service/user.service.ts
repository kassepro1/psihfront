import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(userToadd: User) {
   return this.http.post(environment.host, userToadd);
  }

  updateUser(userToadd: User) {
   return  this.http.put(environment.host, userToadd);
  }

  deleteUser(userToadd: User) {
    this.http.delete(environment.host);
  }

  findAllUser() {
    this.http.get(environment.host);
  }
}
