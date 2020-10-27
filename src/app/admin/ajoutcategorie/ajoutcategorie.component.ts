import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ajoutcategorie',
  templateUrl: './ajoutcategorie.component.html',
  styleUrls: ['./ajoutcategorie.component.css']
})
export class AjoutcategorieComponent implements OnInit {

  constructor(private _auth: AuthService) { }

alert = false;
  categorie = {
    titre: ''
  }

  ngOnInit(): void {
  }


  register(){


      this._auth.addCategorie(this.categorie).subscribe(
        res=>{
          this.alert = true;
          setTimeout(() => {
              this.alert = false;
          }, 3000);
        },
        err=>{
          console.log(err);
          
        }
      );


  }

}
