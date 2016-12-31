import { Injectable } from '@angular/core';
import { ReviewModel } from './review-model';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx'; 



@Injectable()
export class ReviewdataService {
 
  private url:string="http://localhost:3000/reviews/";


  constructor(public _http:Http) { }
  getAllReview(){

return this._http.get(this.url).map((res:Response)=>res.json());
}

getReviewbyid(id:number){

return this._http.get(this.url+id).map((res:Response)=>res.json());
}

deleteReview(id:number){

let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.delete(this.url+id,req).map((res:Response)=>res.json());
}



}
