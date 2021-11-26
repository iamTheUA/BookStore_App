import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any> {

    return this.http.get<any>(this.baseUrl + "/book/")
  }

  getBookById(n:number){
    return this.http.get<any>(this.baseUrl+"/book/"+n)
  }
}
