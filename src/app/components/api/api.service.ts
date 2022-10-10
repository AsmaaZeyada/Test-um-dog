import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  // https://thedogapi.com/

  cobsomeApi(): Observable<any> {
    const headers = {
      'x-api-key':
        'live_D4LH7Y9ZFszkSm9E60GOW3lrVvCbFvVP2rn7xzodsygEzWVBTkfomPFfaMnzLLx3',
    };
    return this.http.get('https://api.thedogapi.com/v1/images/search?limit=3', {
      headers,
    });
  }

  getVotos(body): Observable<any> {
    const headers = {
      'x-api-key':
        'live_D4LH7Y9ZFszkSm9E60GOW3lrVvCbFvVP2rn7xzodsygEzWVBTkfomPFfaMnzLLx3',
      body,
    };
    return this.http.get('https://api.thedogapi.com/v1/votes', {
      headers,
    });
  }

  setVoto(body): Observable<any> {
    const headers ={
      'x-api-key':
      'live_D4LH7Y9ZFszkSm9E60GOW3lrVvCbFvVP2rn7xzodsygEzWVBTkfomPFfaMnzLLx3',
      body
    }
    return this.http.post('https://api.thedogapi.com/v1/votes/', {headers});
  }
}
