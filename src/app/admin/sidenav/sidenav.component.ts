import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

 
  constructor(public _auth: AuthService) { }
user: any;
  ngOnInit(): void {

   this.user = this._auth.getUserData();
console.log(this.user);

  }

}
