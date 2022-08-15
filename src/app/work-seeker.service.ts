import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class WorkSeekerService {
  url = 'http://54.39.218.37/api/Account/Login'
  constructor(private http:HttpClient) { }

  postdata(data:any){
    return this.http.post(this.url , data);
  }
}
