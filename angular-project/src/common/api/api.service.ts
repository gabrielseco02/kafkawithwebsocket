import {
    HttpClient,
    HttpHeaders,
    HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
    private urlBase: string = '';

    constructor(
        private http: HttpClient
    ) {
        this.urlBase = "http://localhost:8080/api";
    }

    public get(
        resource: string
    ): Observable<any> {
        return this.http
            .get(`${this.urlBase}/${resource}`, {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            })
            .pipe(map(this.handleMap), catchError(this.handleError));
    }

    private handleMap(result: any): any {
        if (result.result) return result.result;

        return result;
    }

    private handleError(error: any): any {
        return throwError(() => error);
    }

}
