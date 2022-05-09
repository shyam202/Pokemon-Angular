import { List } from './../data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public search = new BehaviorSubject<string>('');
  constructor(private http: HttpClient) {}

  getData(limit: number, offset: number): Observable<any> {
    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
  }

  getMoreData(id: string): Observable<List> {
    const listInfoRequest = this.http.get(`${env.BASE_URL}/${id}`);
    return forkJoin({
      listInfoRequest,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['listInfoRequest'],
        };
      })
    );
  }
}
