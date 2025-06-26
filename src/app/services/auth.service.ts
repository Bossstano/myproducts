import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [{ "username": "admin", "password": "123", "roles": ['ADMIN'] },
  { "username": "nadhem", "password": "123", "roles": ['USER'] }];

  //Pour stocker les informations de l'utilisateur connecté
  public loggedUser!: string;
  //Pour savoir si l'utilisateur est connecté ou pas
  public isloggedIn: Boolean = false;
  public roles!: string[];

  constructor(private router: Router) { }



  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.username == curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });

    return validUser;
  }

  isAdmin(): Boolean {
    if (!this.roles) //this.roles== undefiened 
      return false;
    return (this.roles.indexOf('ADMIN') > -1);
  }

  setLoggedUserFromLocalStorage(loggedUser: string) {
    this.loggedUser = loggedUser;
    this.isloggedIn = true;
    this.getUserRoles(loggedUser);
  }

  getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });
  }

}
