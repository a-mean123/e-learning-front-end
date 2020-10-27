import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  formations: any;

  ngOnInit(): void {


    this._auth.getThreeFormation().subscribe(
      res=>{
        this.formations = res;
        console.log(res);
        
      },
      err=>{
        console.log(err);
        
      }
    );
  }

}
