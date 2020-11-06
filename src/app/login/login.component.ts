import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _router: Router) { }
    loginUserData = {

      login: '',
      password:''
    };

  ngOnInit(): void {
  }
  alert1 = false;

  loginUser() {
    console.log(this.loginUserData);
    
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
        
        localStorage.setItem('token', res);

        let user = this._auth.getUserData();
        if(user.Role == 'admin'){

          this._router.navigate(['/board']);
        }else if (user.Role == 'prof'){
          this._router.navigate(['/formatteur']);
        }else if (user.Role == 'etudiant'){
          this._router.navigate(['/etudiant']);
        }


     
      },
      err => {
        this.alert1 = true;
        setTimeout(() => {
          this.alert1 = false;
        }, 3000);
      }
    )
  }

}
