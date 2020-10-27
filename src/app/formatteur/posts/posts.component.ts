import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  posts: any;

  ngOnInit(): void {

    this._auth.getAllPost().subscribe(
      res=>{
        this.posts = res;
      }
    );

  }



  delete(id:any){
    this._auth.deletePost(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        this.ngOnInit();
      }
    );
  }
}
