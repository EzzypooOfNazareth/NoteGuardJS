import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bookmark } from '../models/bookmark';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BookMarkService {

    baseUrl = 'http://localhost:5000/api';

    constructor(private http: HttpClient) {

    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    //Get All Method
    getBookmarks(): Observable<Bookmark[]> {
        return this.http.get<Bookmark[]>(this.baseUrl)
            .pipe(
                retry(3),
                catchError(this.errorHandl)
            )
    }

    //Post New Method
    createBookmark(data): Observable<Bookmark> {
        return this.http.post<Bookmark>(this.baseUrl, JSON.stringify(data), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.errorHandl)
            )
    }

    //Delete Method
    deleteBookmark(id) {
        return this.http.delete<Bookmark>(this.baseUrl + '/' + id, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            )
    }

    errorHandl(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
        } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}