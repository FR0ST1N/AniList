import { Injectable } from '@angular/core';
import { Anime } from './anime';
import { Headers, Http } from '@angular/http';
import { parseString } from 'xml2js';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AnimeService {
  constructor(private http: Http) { }
  getAnime(user): Promise<Anime[]> {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://myanimelist.net/malappinfo.php?u=' + user + '&status=all&type=anime')
             .toPromise()
             .then(function(response){
                let jsData;
                parseString(response.text(), function (err, result) {
                  jsData = result.myanimelist;
                });
                return jsData.anime as Anime[];
             })
             .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
  return Promise.reject(error.message || error);
}
}
