import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
    constructor(private _http:Http) {}
    getEmployees() {
        return this._http.get("/Project/answers/Hi")
                .map((response:Response) => response.json());
    }
}