import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';

import {Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-updateformatteur',
  templateUrl: './updateformatteur.component.html',
  styleUrls: ['./updateformatteur.component.css']
})
export class UpdateformatteurComponent implements OnInit {
  @ViewChild('fileInput', { static: false}) fileInput: ElementRef;
  constructor(private route : ActivatedRoute, private _auth: AuthService) { }


  id: any;


  alert = false;

  user = {

      name: '',
      lastname: '',
      email:'' ,
      login:'' ,
     adress: '',
     phone: '',
     password:''

  }



  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  
    this._auth.detailUser(this.id).subscribe(
      res=>{
     

        console.log(this.user);
        
      },
      err=>{
        console.log(err);
        
      }
    );
    
  }


  

  update(){
    console.log(this.user);
    
    const imageBlob = this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('image', imageBlob);
    file.set('name', this.user.name);
    file.set('lastname', this.user.lastname);

    file.set('email', this.user.email);

    file.set('login' , this.user.login);
    file.set('adress' , this.user.adress);
    file.set('phone' , this.user.phone);
    file.set('password' , this.user.password);

  
    
    this._auth.updateFormatteur(file , this.id).subscribe(

      res=>{
        console.log(res);
        this.alert = true;
        setTimeout(() => {
            this.alert = false;
        }, 3000);
        
      },
      err=>{
        this.alert = true;
        setTimeout(() => {
            this.alert = false;
        }, 3000);
      }

    );

  }


}
