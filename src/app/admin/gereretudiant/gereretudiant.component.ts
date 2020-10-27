import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gereretudiant',
  templateUrl: './gereretudiant.component.html',
  styleUrls: ['./gereretudiant.component.css']
})
export class GereretudiantComponent implements OnInit {

  constructor(public _auth: AuthService) { }

  etudiant: any;


  ngOnInit(): void {

    this._auth.getAllEtudiant().subscribe(
      res=>{
        this.etudiant = res;
        console.log(res);
        
      },
      err=>{
        console.log(err);
        
      }
    );



  }
  
  delete(id: any){

    this._auth.deleteUser(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
        this.ngOnInit();
      }
    );

  }

  enable(id:any, e:any){

      this._auth.enableEtudiant(id, e).subscribe(
        res=>{
          this.ngOnInit();
        },
        err=>{
          this.ngOnInit();

        }

      );



  }



}
