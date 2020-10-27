import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';

import {Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-updateformation',
  templateUrl: './updateformation.component.html',
  styleUrls: ['./updateformation.component.css']
})
export class UpdateformationComponent implements OnInit {


  @ViewChild('fileInput', { static: false}) fileInput: ElementRef;
  constructor(private route : ActivatedRoute, private _auth: AuthService) { }

  alert = false;

  formation = {

      titre: '',
      description: '',
      date:'' ,
      duree:'' ,
      etat : '',
      categorie: '',


  }

id:any;
  categories : any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this._auth.getAllCategorie().subscribe(
      res=>{
        this.categories = res;
      },
      err=>{
        console.log(err);
        
      }
    );

  }



  

  register(){
    console.log(this.formation);
    
    const imageBlob = this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('image', imageBlob);
    file.set('titre', this.formation.titre);
    file.set('description', this.formation.description);

    file.set('date', this.formation.date);

    file.set('duree' , this.formation.duree);
    file.set('etat' , this.formation.etat);
    file.set('categorie' , this.formation.categorie);
 
    this._auth.updateFormation(file , this.id).subscribe(

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
