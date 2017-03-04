import { Injectable } from '@angular/core';
import { ReviewModel } from './review-model';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx'; 



@Injectable()
export class ReviewdataService {
 
  private url:string="http://localhost:3000/reviews/";
   private url1:string="http://localhost:3000/getreviewjoins/";
private url2:string="http://localhost:3000/getreviewbyrestid/";

  constructor(public _http:Http) { }
  getAllReview(){

return this._http.get(this.url).map((res:Response)=>res.json());
}

getReviewbyid(id:number){

return this._http.get(this.url+id).map((res:Response)=>res.json());
}

addReview(item:ReviewModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.post(this.url,body,req).map((res:Response)=>res.json());
}

updateReview(item:ReviewModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.put(this.url+item.review_id,body,req).map((res:Response)=>res.json());
}
deleteReview(id:number){

let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.delete(this.url+id,req).map((res:Response)=>res.json());
}

getreviewjoin()
{
    return this._http.get(this.url1).map((res:Response)=>res.json());
}

getReviewByRestId(review_id:number){
    return this._http.get(this.url2+review_id).map((res:Response)=>res.json());
  }

}
