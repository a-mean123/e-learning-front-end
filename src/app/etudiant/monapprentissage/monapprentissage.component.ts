import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-monapprentissage',
  templateUrl: './monapprentissage.component.html',
  styleUrls: ['./monapprentissage.component.css']
})
export class MonapprentissageComponent implements OnInit {

  constructor( private _auth: AuthService  ) { }


  formations: any;

  user: any;


  ngOnInit(): void {
    this.user = this._auth.getUserData();


    this._auth.getUserFormation(this.user.id).subscribe(
      res=>{
        this.formations = res;
        console.log(this.formations);
        
      },
      err=>{
        console.log(err);
        
      }
    );

  }

}
