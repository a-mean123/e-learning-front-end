import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private urlUser = "http://127.0.0.1/portfolio/index.php?controller=user&action=";
  private urlCategorie = "http://127.0.0.1/portfolio/index.php?controller=categorie&action=";
  private urlCours = "http://127.0.0.1/portfolio/index.php?controller=cours&action=";
  private urlFormation = "http://127.0.0.1/portfolio/index.php?controller=formation&action=";
  private urlQuiz = "http://127.0.0.1/portfolio/index.php?controller=quiz&action=";
  private urlQuestion = "http://127.0.0.1/portfolio/index.php?controller=question&action=";
  private urlOption = "http://127.0.0.1/portfolio/index.php?controller=option&action=";
  private urlTest = "http://127.0.0.1/portfolio/index.php?controller=test&action=";
  private urlInscrir = "http://127.0.0.1/portfolio/index.php?controller=inscrir&action=";
  private urlPost = "http://127.0.0.1/portfolio/index.php?controller=post&action=";
  private urlCommentaire = "http://127.0.0.1/portfolio/index.php?controller=commentaire&action=";

  private urlMailSender = "http://127.0.0.1:3000/sendmail";









  constructor(private _router: Router, private http: HttpClient) { }


  sendMail(mail:any){
    return this.http.post<any>(this.urlMailSender ,mail);
  }



  registerEtudiant(user: any){

     return this.http.post<any>(this.urlUser + 'createdEtudiant', user);

  }

  registerFormatteur(user: any){

    return this.http.post<any>(this.urlUser + 'createdProf', user);

 }


 updateFormatteur(user: any , id: any){

  return this.http.post<any>(this.urlUser + 'updatedprof&id=' + id, user);

}

enableEtudiant( id: any , e: any){

  return this.http.get<any>(this.urlUser + 'enable&id=' + id + '&enable=' + e);

}


 getAllFormatteur(){

  return this.http.get<any>(this.urlUser + 'getAllProf');

 }

 getFourFormatteur(){

  return this.http.get<any>(this.urlUser + 'getFour');

 }


 getAllEtudiant(){

  return this.http.get<any>(this.urlUser + 'getAllEtudiant');

 }


 deleteUser(id: any){

  return this.http.get<any>(this.urlUser + 'delete&id=' + id);

 }


 
 detailUser(id: any){

  return this.http.get<any>(this.urlUser + 'detail&id=' + id);

 }

  loginUser(user) {
    return this.http.post<any>(this.urlUser + 'login', user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

   jwtDecode(t) {
    let token = {
      raw:'',
      header:'',
      payload: ''
    };

    let payload : any;
    token.raw = t;
    token.header = JSON.parse(window.atob(t.split('.')[0]));
    payload = JSON.parse(window.atob(t.split('.')[1]));
    return (payload)
  }


  getUserData(){
   

      let token = this.getToken();
    
      var decoded = this.jwtDecode(token); 
      
       return decoded.user;  
  }





//categorie


getAllCategorie(){

  return this.http.get<any>(this.urlCategorie + 'consulte');

}


addCategorie(cat: any){

  return this.http.post<any>(this.urlCategorie + 'createdCategorie' , cat);

}


deleteCategorie(id: any){

  return this.http.get<any>(this.urlCategorie + 'delete&id=' + id);

 }




updateCategorie(cat: any, id: any){

  return this.http.post<any>(this.urlCategorie+ 'updated&id=' + id, cat);


}


//cours


registerCours(cour: any){

  return this.http.post<any>(this.urlCours + 'createdCours', cour);

}





getAllCours(){

  return this.http.get<any>(this.urlCours + 'consulte');

}


deleteCours(id:any){

  return this.http.get<any>(this.urlCours + 'delete&id=' + id);
}


getCours(id:any){

  return this.http.get<any>(this.urlCours + 'getCours&id=' + id);
}

updateCours(c: any , id: any){

  return this.http.post<any>(this.urlCours + 'updated&id=' + id, c);

}





//formation


registerFormation(cour: any){

  return this.http.post<any>(this.urlFormation + 'createdFormation', cour);

}





getAllFormation(){

  return this.http.get<any>(this.urlFormation + 'consulte');

}




getThreeFormation(){

  return this.http.get<any>(this.urlFormation + 'getThree');

}


deleteFormation(id:any){

  return this.http.get<any>(this.urlFormation + 'delete&id=' + id);
}
detailFormation(id:any){

  return this.http.get<any>(this.urlFormation + 'detail&id=' + id);
}

getFormationByCategorie(cat:any){

  return this.http.get<any>(this.urlFormation + 'getFormationByCategorie&categorie=' + cat);
}


updateFormation(c: any , id: any){

  return this.http.post<any>(this.urlFormation + 'updated&id=' + id, c);

}




//quiz


registerQuiz(quiz: any){

  return this.http.post<any>(this.urlQuiz + 'createdQuiz', quiz);

}





getAllQuiz(){

  return this.http.get<any>(this.urlQuiz + 'consulte');

}


deleteQuiz(id:any){

  return this.http.get<any>(this.urlQuiz + 'delete&id=' + id);
}

getQuiz(id:any){

  return this.http.get<any>(this.urlQuiz + 'detail&id=' + id);
}

getOneQuiz(id:any){

  return this.http.get<any>(this.urlQuiz + 'detailquiz&id=' + id);
}
updateQuiz(c: any , id: any){

  return this.http.post<any>(this.urlQuiz + 'updated&id=' + id, c);

}





//test


registerTest(Test: any){

  return this.http.post<any>(this.urlTest + 'createdTest', Test);

}





getAllTest(){

  return this.http.get<any>(this.urlTest + 'consulte');

}



deleteTest(id:any){

  return this.http.get<any>(this.urlTest + 'delete&id=' + id);
}

getTest(id:any){

  return this.http.get<any>(this.urlTest + 'detail&id=' + id);
}

getOneTest(id:any){

  return this.http.get<any>(this.urlTest + 'detailTest&id=' + id);
}
updateTest(c: any , id: any){

  return this.http.post<any>(this.urlTest + 'updated&id=' + id, c);

}



//question


registerQuestion(Question: any){

  return this.http.post<any>(this.urlQuestion + 'createdQuestion', Question);

}



getTestQuestion(id:any){

  return this.http.get<any>(this.urlQuestion + 'getterTest&id=' + id);
}



getAllQuestion(){

  return this.http.get<any>(this.urlQuestion + 'consulte');

}

getQuizQuestion(id:any){

  return this.http.get<any>(this.urlQuestion + 'getter&id=' + id);
}

deleteQuestion(id:any){

  return this.http.get<any>(this.urlQuestion + 'delete&id=' + id);
}

getQuestion(id:any){

  return this.http.get<any>(this.urlQuestion + 'detail&id=' + id);
}

getOneQuestion(id:any){

  return this.http.get<any>(this.urlQuestion + 'detailQuestion&id=' + id);
}
updateQuestion(c: any , id: any){

  return this.http.post<any>(this.urlQuestion + 'updated&id=' + id, c);

}




//question


registerOption(Option: any){

  return this.http.post<any>(this.urlOption + 'createdOption', Option);

}





getAllOption(){

  return this.http.get<any>(this.urlOption + 'consulte');

}


deleteOption(id:any){

  return this.http.get<any>(this.urlOption + 'delete&id=' + id);
}

getOption(id:any){

  return this.http.get<any>(this.urlOption + 'detail&id=' + id);
}

getOneOption(id:any){

  return this.http.get<any>(this.urlOption + 'detailOption&id=' + id);
}
updateOption(c: any , id: any){

  return this.http.post<any>(this.urlOption + 'updated&id=' + id, c);

}



//  insxrir au formation


registerInscription(insc: any){

  return this.http.post<any>(this.urlInscrir + 'createdInscrir', insc);

}


getUserFormation(id: any){
  return this.http.get<any>(this.urlInscrir + 'userFormation&id=' + id);


}



//post


registerPost(post: any){

  return this.http.post<any>(this.urlPost + 'createdPost', post);

}

getAllPost(){
  return this.http.get<any>(this.urlPost + 'consulte');
}



deletePost(id:any){

  return this.http.get<any>(this.urlPost + 'delete&id=' + id);
}



//commentaire


registerCommentaire(cmnt: any){

  return this.http.post<any>(this.urlCommentaire + 'createdCommentaire', cmnt);

}
  getCommentaire(id: any){
    return this.http.get<any>(this.urlCommentaire + 'formationCommentaire&id=' + id);


  }
  getAllCommentaire(){
    return this.http.get<any>(this.urlCommentaire + 'consulte');
  
  
  }
}
