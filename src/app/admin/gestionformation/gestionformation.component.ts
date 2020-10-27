import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gestionformation',
  templateUrl: './gestionformation.component.html',
  styleUrls: ['./gestionformation.component.css']
})
export class GestionformationComponent implements OnInit {

  constructor(public _auth: AuthService) { }

  formations: any;


  ngOnInit(): void {

    this._auth.getAllFormation().subscribe(
      res=>{
        this.formations = res;
        console.log(res);
        
      },
      err=>{
        console.log(err);
        
      }
    );



  }


  delete(id: any){

    this._auth.deleteFormation(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
        this.ngOnInit();
      }
    );

  }
}
