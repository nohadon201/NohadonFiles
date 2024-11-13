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

  async getJson(url: string): Promise<Array<DevProject>> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*")
    return await firstValueFrom(this.client.get<Array<DevProject>>(url, { headers: headers }));
  }
}
