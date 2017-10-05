import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment';

const BASEURL = environment.BASEURL;

@Injectable()
export class UserService {

  private options = { withCredentials: true };

  constructor( private http: Http ) { }

  private handleError(e) {
    return Observable.throw(e.json().message);
  }

  getFavorites(id) {
    return this.http.get(`${BASEURL}/wedding/${id}/list`, this.options)
      .map( res => res.json() )
      .catch( this.handleError );
  }
}
