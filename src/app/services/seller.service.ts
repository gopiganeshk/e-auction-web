import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShowBidsResults } from '../models/showbidsresults';
import { environment } from '../../environments/environment';
import { catchError, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SellerService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiSellerUrl;
  }

  getBidsById(id: string): Observable<ShowBidsResults> {
    return this.http.get<ShowBidsResults>(this.url +'show-bids/'+ id)
  }
}