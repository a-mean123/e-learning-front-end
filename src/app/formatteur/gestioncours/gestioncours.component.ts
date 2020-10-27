import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gestioncours',
  templateUrl: './gestioncours.component.html',
  styleUrls: ['./gestioncours.component.css']
})
export class GestioncoursComponent implements OnInit {

  constructor(public _auth: AuthService) { }

  cours: any;
  user: any;

  ngOnInit(): void {

    this.user = this._auth.getUserData();

    this._auth.getAllCours().subscribe(
      res=>{
        this.cours = res;
        console.log(res);
        
      },
      err=>{
        console.log(err);
        
      }
    );



  }


  delete(id: any){

    this._auth.deleteCours(id).subscribe(
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
