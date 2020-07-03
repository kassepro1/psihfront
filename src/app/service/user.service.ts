import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {AppResponse} from '../model/app-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(userToadd: User): Observable<AppResponse> {
   // @ts-ignore
    return this.http.post<AppResponse>(environment.host, userToadd);
  }

  updateUser(id: number, userToadd: User): Observable<AppResponse> {
   // @ts-ignore
    return  this.http.put<AppResponse>(environment.host + '/' + id, userToadd);
  }

  // @ts-ignore
  deleteUser(id: number): Observable<AppResponse> {
   return this.http.delete<AppResponse>(environment.host + '/' + id);
  }

  // @ts-ignore
  public findAllUser(): Observable<User[]> {
   return this.http.get<User[]>(environment.host);
  }

  public findUserByEmail(email: string) {
    return this.http.get(environment.host + '/email/' + email);
  }

  public findUserByUsername(username: string) {
    return this.http.get(environment.host + '/username/' + username);
  }
}
