import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mes-formation',
  templateUrl: './mes-formation.component.html',
  styleUrls: ['./mes-formation.component.css']
})
export class MesFormationComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  formations: any;
user: any;
  ngOnInit(): void {


  this.user=  this._auth.getUserData();


  this._auth.getFormationByCategorie(this.user.categorie).subscribe(
    res=>{
      this.formations = res;
    }
  );

  }

}
