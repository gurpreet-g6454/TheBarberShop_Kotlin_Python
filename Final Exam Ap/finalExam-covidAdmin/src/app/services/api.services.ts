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
const requestConfig = { headers: {  "Content-Type": "application/json" } };

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private baseUrl: string = "http://localhost:5000/public/";


    constructor(private http: HttpClient) { }


    /**
     * Get dashboards
     */
    // getAllHospital() {
    //     return this.http.get(this.baseUrl + 'getAllDashboard', ).map((res: Response) => res)
        
    // }

    getAllHospital() {
        requestConfig.headers['Content-Type'] = contentType.json;
        return this.http.get(this.baseUrl + 'hospital')
      }

      addHospital(data : any) {
        requestConfig.headers['Content-Type'] = contentType.json;
        return this.http.post(this.baseUrl + 'hospital' , data , requestConfig)
      }
      editHospital() {
        requestConfig.headers['Content-Type'] = contentType.json;
        return this.http.get(this.baseUrl + 'hospital' , requestConfig)
      }

      deleteHospital(data : any) {
        requestConfig.headers['Content-Type'] = contentType.json ;
        return this.http.delete(this.baseUrl + 'hospital?id='+data )
      }

    // async getLiberateHoldDataList(groupId) {
    //     requestConfig.headers['Content-Type'] = contentType.json;
    //     return Promise.resolve(cjfSaswebApi.get(`hold/request/getHoldDetailsByGroupId/` + groupId));
    //     // return Promise.resolve(axios.get(`${baseUrl}/hold/request/getHoldDetailsByGroupId/` + groupId, requestConfig));
    // }

    // signin(data: any) {
    
    //     const body = new URLSearchParams();
    //     body.append('email', data.email);
    //     body.append('password', data.password);
    //     // return this.http.post(this.BaseUrl + 'account/login/',this.httpService.login
    //     return this.http.post(this.global.serverUrl + this.httpService.login,
    //     body.toString(),
    //     {headers: this.global.urlHeaders} )
    //     .map(
    //         (response: Response) => {
    //            const output = response.json();
    //            return output;
    //         }
    //     ).catch(
    //         (error: Response) => {
    //             return Observable.throw('Something went wrong');
    //         }
    //     );
    //    }

}