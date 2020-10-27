import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router, ActivatedRoute, ParamMap  } from '@angular/router';

@Component({
  selector: 'app-updatecours',
  templateUrl: './updatecours.component.html',
  styleUrls: ['./updatecours.component.css']
})
export class UpdatecoursComponent implements OnInit {


  @ViewChild('fileInput', { static: false}) fileInput: ElementRef;
  constructor(private route : ActivatedRoute,private _auth: AuthService) { }

  alert = false;

  cours = {

      titre: '',
      date: ''

  }
  id: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }



  

  register(){
    console.log(this.cours);
    
    const imageBlob = this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('image', imageBlob);
    file.set('titre', this.cours.titre);
   
    file.set('date' , this.cours.date);

    this._auth.updateCours(file, this.id).subscribe(

      res=>{
        console.log(res);
        this.alert = true;
        setTimeout(() => {
            this.alert = false;
        }, 3000);
        
      },
      err=>{
        console.log(err);
       
        this.alert = true;
        setTimeout(() => {
            this.alert = false;
        }, 3000);
      }

    );

  }

}
