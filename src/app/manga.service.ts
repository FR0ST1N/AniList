import { Injectable } from '@angular/core';
import { Manga } from './manga';
import { Headers, Http } from '@angular/http';
import { parseString } from 'xml2js';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MangaService {
  constructor(private http: Http) { }
  getManga(user): Promise<Manga[]> {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://myanimelist.net/malappinfo.php?u=' + user + '&status=all&type=manga')
             .toPromise()
             .then(function(response){
                let jsData;
                parseString(response.text(), function (err, result) {
                  jsData = result.myanimelist;
                });
                return jsData.manga as Manga[];
            })
             .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
  return Promise.reject(error.message || error);
}
}
