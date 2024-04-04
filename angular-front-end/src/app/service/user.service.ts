import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private userUrl = environment.apiUrl + '/users';

httpOptions = {
 headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

 // private userUrl = process.env.
  constructor(private http: HttpClient) {
      
   }

   addUser(user: User): Observable<User> {
    console.log("-----------------USERURL" + this.userUrl);
    console.log(user.firstName + " " + user.lastName)
    return this.http
    .post<User>(this.userUrl, user, this.httpOptions);
  }
}
