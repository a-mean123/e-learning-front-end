import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gestionquiz',
  templateUrl: './gestionquiz.component.html',
  styleUrls: ['./gestionquiz.component.css']
})
export class GestionquizComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  etape1 = true;
  etape2 = false;

  quiz ={
    titre:"",
    description:"",
    formation: ""
  }

  


  formations: any;
  formation =''; 
    ngOnInit(): void {

    this._auth.getAllFormation().subscribe(
      res=>{
        this.formations = res;
      }
    );

  }

quizs: any;

  chercher(){
      this._auth.getQuiz(this.formation).subscribe(
        res=>{
          this.quizs = res;
          console.log(this.quizs);
          this.etape2 = true;
        }
      );


  }

  etape3 = false;

  newQuiz(){

    this.etape3 = true;
    this.etape2 = false;

  }

  resQuiz : any;
  idQuiz= "";
  ajout(){
    this.quiz.formation = this.formation;
    console.log(this.quiz);
    
    this._auth.registerQuiz(this.quiz).subscribe(

      res=>{
        this.resQuiz = res;
        console.log(this.resQuiz);
        let x = this.resQuiz.length -1;
        console.log(x);
        
        this.idQuiz = this.resQuiz[x]?.id;
        console.log(this.idQuiz);
        this.etape3 = false;
        this.etape2 = true;
      },
      err=>{
        console.log(err);
        
      }
    );


  }


deleteQuiz(id: any){

  this._auth.deleteQuiz(id).subscribe(
    res=>{
      this.chercher();
      console.log(res);
      
    },
    err=>{
      this.chercher();
      console.log(err);
      
    }
  );


}



  etape4 = false;

  detailQuiz : any;

  allOption :any;

  quizQuestion: any;

  voirDetailQuiz(id: any){

    this.etape4 = true;
    this.etape3 = false;


    this._auth.getAllOption().subscribe(
      res=>{
        this.allOption = res;

      },
      err=>{
        console.log(err);
        
      }
    );



    this._auth.getQuizQuestion(id).subscribe(
      res=>{
        this.quizQuestion = res;
      },
      err=>{
        console.log(err);
        
      }
    );


    this._auth.getOneQuiz(id).subscribe(
      res=>{
        this.detailQuiz = res;
        console.log(this.detailQuiz);
        this.question.quiz = this.detailQuiz.id;
      },
      err=>{
        console.log(err);
        
      }
    );


  }






question = {

  text: '',
  reponse : '',
  quiz: '',
  test: ''
}

option = {

  titre: '',
  text: '',
  question: ''

}

arrayOfOption = [];


ajoutOption(){

  this.arrayOfOption.push(this.option);
  this.option = {

    titre: '',
    text: '',
    question: ''
  
  }

}



resQuestion : any;
idQuestion= "";

idQuizDeatil = '';

ajoutQuestion(){



  
  this._auth.registerQuestion(this.question).subscribe(

    res=>{
      this.resQuestion = res;
      console.log(this.resQuestion);
      let x = this.resQuestion.length -1;
      console.log(x);
      
      this.idQuestion = this.resQuestion[x]?.id;
      console.log(this.idQuestion);
    


      for(let i = 0 ; i < this.arrayOfOption.length ; i++){

        let op = this.arrayOfOption[i];
        op.question = this.idQuestion;

        this._auth.registerOption(op).subscribe(
          res=>{
            console.log(res);
            
          },
          err=>{
            console.log(err);
            
          }
        );





      };
      



      this._auth.getQuizQuestion(this.idQuizDeatil).subscribe(
        res=>{
          this.quizQuestion = res;


          this._auth.getAllOption().subscribe(
            res=>{
              this.allOption = res;
      
            },
            err=>{
              console.log(err);
              
            }
          );
        },
        err=>{
          console.log(err);
          
        }
      );


      
  
     






    },
    err=>{
      console.log(err);
      
    }
  );


}





}
