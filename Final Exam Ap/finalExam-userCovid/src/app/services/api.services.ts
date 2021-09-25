import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestMethod, RequestOptions, ResponseContentType } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

// import {map, startWith} from "rxjs/operators";


import 'rxjs/add/operator/map';
import { $ } from 'protractor';
// import { environment } from 'environments/environment';

const contentType = {
  json: "application/json",
  file: "multipart/form-data"
}
const requestConfig = { headers: { "Content-Type": "application/json" } };

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl: string = "http://localhost:5000/public/";


  constructor(private http: HttpClient) { }

  getAllHospital() {
    console.log("get all hospitalsss")
    requestConfig.headers['Content-Type'] = contentType.json;
    return this.http.get(this.baseUrl + 'hospital')
  }

  addHospital(data: any) {
    requestConfig.headers['Content-Type'] = contentType.json;
    return this.http.post(this.baseUrl + 'hospital', data, requestConfig)
  }
  editHospital() {
    requestConfig.headers['Content-Type'] = contentType.json;
    return this.http.get(this.baseUrl + 'hospital', requestConfig)
  }

  deleteHospital(data: any) {
    requestConfig.headers['Content-Type'] = contentType.json;
    return this.http.delete(this.baseUrl + 'hospital?id=' + data)
  }

  bookBed(data: any) {
    requestConfig.headers['Content-Type'] = contentType.json;
    return this.http.post(this.baseUrl + 'booking', data, requestConfig)
  }

  bookCylinder(data: any) {
    requestConfig.headers['Content-Type'] = contentType.json;
    return this.http.post(this.baseUrl + 'company', data, requestConfig)
  }

  getCylinder() {
    requestConfig.headers['Content-Type'] = contentType.json;
    return this.http.get(this.baseUrl + 'company')
  }

  searchBooking(name : any) {
    requestConfig.headers['Content-Type'] = contentType.json;
    return this.http.get(this.baseUrl + 'booking?search=' + name)
  }

}