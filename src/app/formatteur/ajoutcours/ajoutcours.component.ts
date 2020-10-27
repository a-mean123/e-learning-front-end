import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ajoutcours',
  templateUrl: './ajoutcours.component.html',
  styleUrls: ['./ajoutcours.component.css']
})
export class AjoutcoursComponent implements OnInit {


  @ViewChild('fileInput', { static: false}) fileInput: ElementRef;
  constructor(private _auth: AuthService) { }

  alert = false;

  user = {

      titre: '',
      date: '',
      formation: 0

  }


  formations: any;
  ngOnInit(): void {

    this._auth.getAllFormation().subscribe(
      res=>{
        this.formations = res;
      }
    );

  }



  

  register(){
    console.log(this.user);
    
    const imageBlob = this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('image', imageBlob);
    file.set('titre', this.user.titre);
   
    file.set('date' , this.user.date);
    file.set('formation' , this.user.formation.toString());


    this._auth.registerCours(file).subscribe(

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
