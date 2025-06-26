import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'MyProducts';

  constructor(public authService : AuthService, private router: Router) {
    // Initialization logic can go here if needed
  }

  ngOnInit(): void {
    //vérifier si l'utilisateur est connecté sinon rediriger vers la page de connexion
    let isloggedIn : string;
    let loggedUser : string;
    isloggedIn = localStorage.getItem('isloggedIn')!;
    loggedUser = localStorage.getItem('loggedUser')!;
    if (isloggedIn != "true" || !loggedUser) {
      this.router.navigate(['/login']);
    } else {  
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }
}
  onLogout() {
    this.authService.logout();
  }
}
