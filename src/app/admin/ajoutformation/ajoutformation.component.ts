import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';

import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-ajoutformation',
  templateUrl: './ajoutformation.component.html',
  styleUrls: ['./ajoutformation.component.css']
})
export class AjoutformationComponent implements OnInit {


  @ViewChild('fileInput', { static: false}) fileInput: ElementRef;
  constructor(private _auth: AuthService) { }

  alert = false;

  formation = {

      titre: '',
      description: '',
      date:'' ,
      dateremise:'' ,
      duree:'' ,
      etat : '',
      categorie: '',


  }


  categories : any;

  ngOnInit(): void {

    this._auth.getAllCategorie().subscribe(
      res=>{
        this.categories = res;
      },
      err=>{
        console.log(err);
        
      }
    );

  }



  mail = {

    from:'aminejbali32@gmail.com',
    to: '',
    subject:'new formation is added',
    message:'hello everyone this is the new formation , feel free to join us !!!'

  }
  

  register(){
    console.log(this.formation);
    
    const imageBlob = this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('image', imageBlob);
    file.set('titre', this.formation.titre);
    file.set('description', this.formation.description);

    file.set('date', this.formation.date);
    file.set('dateremise', this.formation.dateremise);
    file.set('duree' , this.formation.duree);
    file.set('etat' , this.formation.etat);
    file.set('categorie' , this.formation.categorie);
 
    this._auth.registerFormation(file).subscribe(

      res=>{
        console.log(res);
        this.mail.to = res;
        this._auth.sendMail(this.mail).subscribe();
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
