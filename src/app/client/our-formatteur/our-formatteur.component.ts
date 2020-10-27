import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-our-formatteur',
  templateUrl: './our-formatteur.component.html',
  styleUrls: ['./our-formatteur.component.css']
})
export class OurFormatteurComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  formatteurs: any;

  ngOnInit(): void {

    this._auth.getFourFormatteur().subscribe(
      res=>{
        this.formatteurs = res;
        console.log(this.formatteurs);
        
      },
      err=>{
        console.log(err);
        
      }
    );

  }

}
