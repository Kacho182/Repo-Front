import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url= 'https://portfolio-backend-2okb.onrender.com/login';
  currentUserSubject: BehaviorSubject<any>;
  constructor (private http:HttpClient){
    console.log("El servicio de autenticacion esta corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }

  
    IniciarSesion(credenciales: any): Observable<any> {
      return this.http.post(this.url, credenciales).pipe(
        map((data) => {
          sessionStorage.setItem("currentUser", JSON.stringify(data));
          this.currentUserSubject.next(data);
          return data;
        })
      );
    }



    get UsuarioAutenticado(){
      return this.currentUserSubject.value;
    }
}
