import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-passer-test',
  templateUrl: './passer-test.component.html',
  styleUrls: ['./passer-test.component.css']
})
export class PasserTestComponent implements OnInit {

  constructor(private route : ActivatedRoute, private _auth: AuthService) { }

  id: any;

  etape4 = false;
  test:any;
  questions: any;
  options: any;
  score = 0;

  showScore = false;


post = {

  name: '',
  lastname:'',
  test : '',
  score: 0

}


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');



    this._auth.getOneTest(this.id).subscribe(  
        res=>{

      this.test = res;
      console.log(this.test);
      
    this._auth.getTestQuestion(this.test.id).subscribe(
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
    this.post.test = this.test.titre;

    console.log(this.post);
    
    this._auth.registerPost(this.post).subscribe(
      res=>{
        this.showScore = true;
      },
      err=>{
        this.showScore = true;
        console.log(err);
        
      }
    );


  }

}
