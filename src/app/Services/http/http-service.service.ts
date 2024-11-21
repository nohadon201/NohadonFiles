import { HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DevProject } from '../../main-sections/development-projects/dev_model';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  constructor(private client: HttpClient) {

  }

  async getAllItems<T>(url: string): Promise<Array<T>> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*")
    return await firstValueFrom(this.client.get<Array<T>>(url, { headers: headers }));
  }

  async getItem<T>(url: string): Promise<T> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*")
    return await firstValueFrom(this.client.get<T>(url, { headers: headers }));
  }

  async getText(url: string): Promise<string> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*")
    headers.append("Accept", "text/html, application/xhtml+xml, */*")
    headers.append("Content-Type", "application/x-www-form-urlencoded")
    let options = {
      headers: headers,
      responseType: 'text' as 'text'
    };
    return await firstValueFrom(this.client.get(url, options));
  }

}
