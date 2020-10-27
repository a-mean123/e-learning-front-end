import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gestionformatteur',
  templateUrl: './gestionformatteur.component.html',
  styleUrls: ['./gestionformatteur.component.css']
})
export class GestionformatteurComponent implements OnInit {

  constructor(public _auth: AuthService) { }

  formatteurs: any;


  ngOnInit(): void {

    this._auth.getAllFormatteur().subscribe(
      res=>{
        this.formatteurs = res;
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

}
