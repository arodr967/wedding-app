import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HomeService {
    constructor(private httpClient: HttpClient) { }
    
    getGuests() {
        return this.httpClient.get('/api/guests').pipe(
            map((r: any) => r.data)
        );
    }
}