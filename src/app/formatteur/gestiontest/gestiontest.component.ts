import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-gestiontest',
  templateUrl: './gestiontest.component.html',
  styleUrls: ['./gestiontest.component.css']
})
export class GestiontestComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  etape1 = true;
  etape2 = false;

  test ={
    titre:"",
   
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

tests: any;

  chercher(){
    this.etape2 = true;
      this._auth.getTest(this.formation).subscribe(
        res=>{
          this.tests = res;
          console.log(this.tests);
          this.etape2 = true;
        }
      );


  }

  etape3 = false;

  newtest(){

    this.etape3 = true;
    this.etape2 = false;

  }

  restest : any;
  idtest= "";
  ajout(){
    this.test.formation = this.formation;
    console.log(this.test);
    
    this._auth.registerTest(this.test).subscribe(

      res=>{
        this.restest = res;
        console.log(this.restest);
        let x = this.restest.length -1;
        console.log(x);
        
        this.idtest = this.restest[x]?.id;
        console.log(this.idtest);
        this.etape3 = false;
        this.etape2 = true;
      },
      err=>{
        console.log(err);
        
      }
    );


  }


deletetest(id: any){

  this._auth.deleteTest(id).subscribe(
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

  detailtest : any;

  allOption :any;

  testQuestion: any;

  voirDetailtest(id: any){

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



    this._auth.getTestQuestion(id).subscribe(
      res=>{
        this.testQuestion = res;
      },
      err=>{
        console.log(err);
        
      }
    );


    this._auth.getOneTest(id).subscribe(
      res=>{
        this.detailtest = res;
        console.log(this.detailtest);
        this.question.test = this.detailtest.id;
      },
      err=>{
        console.log(err);
        
      }
    );


  }






question = {

  text: '',
  reponse : '',
  test: '',
  quiz: ''
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

idtestDeatil = '';

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
      



      this._auth.getTestQuestion(this.idtestDeatil).subscribe(
        res=>{
          this.testQuestion = res;
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
