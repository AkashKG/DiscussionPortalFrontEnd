import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
    constructor(private _http:Http) {}
    getQuestionDetails(questionId) {
        return this._http.get("/api/v1/answers/" + questionId)
                .map((response:Response) => response.json());
    }

     addQuestion(questionObj) {
        return this._http.post("/api/v1/question", questionObj)
                .map((response:Response) => response.json());
    }

    addAnswer(answer,questionId) {
        return this._http.post("/api/v1/" + questionId +"/answer", answer)
        .map((Response:Response) => Response.json());
    }
}