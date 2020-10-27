import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-formations',
  templateUrl: './list-formations.component.html',
  styleUrls: ['./list-formations.component.css']
})
export class ListFormationsComponent implements OnInit {

  constructor( private _auth: AuthService  ) { }


  formations: any;

  user: any;

alert = false;
  ngOnInit(): void {
    this.user = this._auth.getUserData();
  
    
    this._auth.getAllFormation().subscribe(
      res=>{
        this.formations = res;
        console.log(this.formations);
        
      }
    );
  
  }




  inscrir(id: any){

     let formation = {

        user: this.user.id,
        formation: id
      }


      this._auth.registerInscription(formation).subscribe(

        res=>{
          console.log(res);
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
