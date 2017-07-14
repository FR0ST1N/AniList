import { Injectable } from '@angular/core';
import { Manga } from './manga';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MangaService {
  constructor(private http: Http) { }
  getManga(user): Promise<Manga[]> {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://jikan.me/api/user_list/' + user + '/manga')
             .toPromise()
             .then(function(response){
               return response.json().manga as Manga[];
             })
             .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
  return Promise.reject(error.message || error);
}
}
