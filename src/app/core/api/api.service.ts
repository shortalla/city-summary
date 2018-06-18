import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
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
   * Endpoint for getting the complete list of city summaries
   */
  public list(): Observable<any> {
    return this.httpClient.get(
      `${this._apiUrl}/posts`
    ).map(
      response => response
    ).catch((error: any) => Observable.throw(error));
  }

  /**
   * Endpoint for getting the summary of a given city
   */
  public getCity(id: number): Observable<any> {
    return this.httpClient.get(
      `${this._apiUrl}/posts/${id}`
    ).map(
      response => response
    ).catch((error: any) => Observable.throw(error));
  }

  /**
   * Endpoint for adding a city to the list
   */
  public createCity(title: string, content: string,
                    lat: string, long: string, image_url: string) {
    const body = { post: {
        title: title,
        content: content,
        lat: lat,
        long: long,
        image_url: image_url
    }};
    return this.httpClient.post(
      `${this._apiUrl}/posts/`, body
    ).map(
      response => response
    ).catch((error: any) => Observable.throw(error));
  }

  /**
   * Endpoint for updating an existing city in the list
   */
  public updateCity(id: number, title: string, content: string,
                    lat: string, long: string, image_url: string) {
    const body = { post: {
        title: title,
        content: content,
        lat: lat,
        long: long,
        image_url: image_url
    }};
    return this.httpClient.put(
      `${this._apiUrl}/posts/${id}`, body
    ).map(
      response => response
    ).catch((error: any) => Observable.throw(error));
  }

  /**
   * Endpoint for delete an existing city from the list
   */
  public delete(id: number) {
    return this.httpClient.delete(
        `${this._apiUrl}/posts/${id}`
    ).map(
      response => response
    ).catch((error: any) => Observable.throw(error));
  }
}