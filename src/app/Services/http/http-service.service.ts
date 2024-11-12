import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private client: HttpClient) {

  }


  async getJson(url: string) {
    return await firstValueFrom(this.client.get(url));
  }
}
