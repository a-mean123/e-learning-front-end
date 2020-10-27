import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-passer-quiz',
  templateUrl: './passer-quiz.component.html',
  styleUrls: ['./passer-quiz.component.css']
})
export class PasserQuizComponent implements OnInit {
  constructor(private route : ActivatedRoute, private _auth: AuthService) { }

  id: any;

  etape4 = false;

  quiz:any;
  questions: any;
  options: any;
  score = 0;




  post = {

    name: '',
    lastname:'',
    test : '',
    score: 0
  
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');



    this._auth.getOneQuiz(this.id).subscribe(  
        res=>{

      this.quiz = res;
      console.log(this.quiz);
      
    this._auth.getQuizQuestion(this.quiz.id).subscribe(
      res=>{
        this.questions = res;
        console.log(this.questions);
        
      },
      err=>{
        console.log(err);
        
      }
    );

    },
    err=>{
      
    });
  



    this._auth.getAllOption().subscribe(
      res=>{
        this.options = res;
      },
      err=>{
        console.log(err);
        
      }
    );


  }




  updateScore(rep:any, choix: any){

    if(rep == choix){
      this.score++;
      console.log(this.score);
      
    }

  }


  
  envoyer(){
    let user = this._auth.getUserData();
    this.post.name = user.name;
    this.post.lastname = user.lastname;
    this.post.score = this.score;
    this.post.test = this.quiz.titre;

    console.log(this.post);
    
    this._auth.registerPost(this.post).subscribe(
      res=>{
          this.etape4 = true;

      },
      err=>{
        this.etape4 = true;
      
        console.log(err);
        
      }
    );


  }

}
