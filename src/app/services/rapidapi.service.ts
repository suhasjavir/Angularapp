import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';
  constructor(private httpClient: HttpClient) { }

  getFinance() {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '3952c6b69emsh54967ff384576c1p191279jsnd67eed9e2b03',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    });
    return this.httpClient.get(this.url, {headers: headers});
  }
}
