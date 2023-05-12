import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL = "http://localhost:8080/hab";

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.URL + `/detail/${id}`);
  }

  public save(Skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', Skill);
  }

  public update(id: number, Skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, Skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}

