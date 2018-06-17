import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

/**
 * Service for interactions with API endpoints
 */
@Injectable()
export class ApiService {
  private _apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this._apiUrl = environment.API_URL;
  }

  /**
   * The complete list of city summaries
   */
  public list(): Observable<any> {
    return this.httpClient.get(
      `${this._apiUrl}/posts`
    );
  }
}