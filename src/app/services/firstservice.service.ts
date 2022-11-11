import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FirstserviceService {
  headerSearchString = '';

  getSingleData(getparamId: any) {
    throw new Error('Method not implemented.');
  }
  apiURL = 'http://localhost:3200/users';
  CreateURL = 'http://localhost:3200/user';
  constructor(private http: HttpClient) {}

  getAlluser(): Observable<any> {
    return this.http.get(`${this.apiURL}`);
  }

  createUser(data: any): Observable<any> {
    return this.http.post(`${this.CreateURL}`, data);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${this.CreateURL}/${id}`);
  }

  updateUser(id: any, data: any) {
    return this.http.put(`${this.CreateURL}/${id}`, data);
  }
}
