import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _auth: AuthService) { }


  cours: any;
  comments: any;
  formatteurs: any;
  etudiant: any;
  formation: any;
  categorie: any;


  ngOnInit(): void {

    this._auth.getAllCategorie().subscribe(
      res=>{
        this.categorie = res;
      }
    );


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


    this._auth.getAllFormatteur().subscribe(
      res=>{
        this.formatteurs = res;
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
