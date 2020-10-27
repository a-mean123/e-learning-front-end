import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-heade',
  templateUrl: './heade.component.html',
  styleUrls: ['./heade.component.css']
})
export class HeadeComponent implements OnInit {


  constructor(public _auth: AuthService) { }
  user: any;
  ngOnInit(): void {

   this.user = this._auth.getUserData();
  console.log(this.user);

  }
}
