import { Injectable } from '@angular/core';
import { Anime } from './anime';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AnimeService {
  constructor(private http: Http) { }
  getAnime(user): Promise<Anime[]> {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://jikan.me/api/user_list/' + user + '/anime')
             .toPromise()
             .then(function(response){
               return response.json().anime as Anime[];
             })
             .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
  return Promise.reject(error.message || error);
}
}
