import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(private _auth: AuthService) { }


  cours: any;
  comments: any;
 
  etudiant: any;
  formation: any;



  ngOnInit(): void {


    this._auth.getAllFormation().subscribe(
      res=>{
        this.formation = res;
      }
    );


    this._auth.getAllEtudiant().subscribe(
      res=>{
        this.etudiant = res;
      }
    );




    this._auth.getAllCommentaire().subscribe(
      res=>{
        this.comments = res;
      }
    );



    this._auth.getAllCours().subscribe(
      res=>{
        this.cours = res;
      }
    );
  }

}
