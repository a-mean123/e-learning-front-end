import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gestioncategorie',
  templateUrl: './gestioncategorie.component.html',
  styleUrls: ['./gestioncategorie.component.css']
})
export class GestioncategorieComponent implements OnInit {


  constructor(public _auth: AuthService) { }

  categories: any;

  upt = false;
  index = -1;

cat = {
  titre: ''
}

  ngOnInit(): void {

    this._auth.getAllCategorie().subscribe(
      res=>{
        this.categories = res;
        console.log(res);
        
      },
      err=>{
        console.log(err);
        
      }
    );



  }
  
  delete(id: any){

    this._auth.deleteCategorie(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
        this.ngOnInit();
      }
    );

  }




  update(id: any){

    this._auth.updateCategorie(this.cat , id).subscribe(
        res=>{
          console.log(res);
          this.ngOnInit();
        },
        err=>{
          console.log(err);
          this.ngOnInit();
          
        }

    );


  }
}
