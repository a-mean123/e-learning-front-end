import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detail-formations',
  templateUrl: './detail-formations.component.html',
  styleUrls: ['./detail-formations.component.css']
})
export class DetailFormationsComponent implements OnInit {

  constructor(private route : ActivatedRoute, private _auth: AuthService) { }

  id: any;

  formation: any;

  tests: any;
  quizs:any;

  cours: any;

  commentaire = {

    name: '',
    lastname: '',
    formation: '',
    commentaire: ''

  }

  comments: any;


  voirCours= true;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');



    this._auth.getCommentaire(this.id).subscribe(
      res=>{
        this.comments = res;
        console.log(this.comments);
        
      },
      err=>{
        console.log(err);
        
      }
    );




    this._auth.detailFormation(this.id).subscribe(
      res=>{
        this.formation = res;
        console.log(this.formation);
        
      },
      err=>{
        console.log(err);
        
      }
    );




    this._auth.getCours(this.id).subscribe(
      res=>{
        this.cours = res;
     
      },
      err=>{
        console.log(err);
        
      }
    );




    this._auth.getQuiz(this.id).subscribe(
      res=>{
        this.quizs = res;
      },
      err=>{
        console.log(err);
        
      }
    );


    this._auth.getTest(this.id).subscribe(
      res=>{
        this.tests = res;
      },
      err=>{
        console.log(err);
        
      }
    );

  }


  commenter(){

    let user = this._auth.getUserData();

      this.commentaire.formation = this.id;
      this.commentaire.name = user.name;
      this.commentaire.lastname = user.lastname;



    this._auth.registerCommentaire(this.commentaire).subscribe(
      res=>{
        this.ngOnInit();
        this.commentaire = {

          name: '',
          lastname: '',
          formation: '',
          commentaire: ''
      
        }
      },
      err=>{
        this.ngOnInit();
        this.commentaire = {

          name: '',
          lastname: '',
          formation: '',
          commentaire: ''
      
        }
      }
    );


  }

}
