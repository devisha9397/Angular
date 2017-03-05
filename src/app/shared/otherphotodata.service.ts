import { Injectable } from '@angular/core';
import { OtherphotoModel } from './otherphoto-model';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx'; 

@Injectable()
export class OtherphotodataService {

private url:string="http://localhost:3000/otherphotos/";
private url1:string="http://localhost:3000/getotherphotojoins/";
private url2:string="http://localhost:3000/getotherphotojoinbyid/";

  constructor(public _http:Http) { }

  getAllOtherphoto(){ 

return this._http.get(this.url).map((res:Response)=>res.json());
}

getOtherphotobyid(id:number){

return this._http.get(this.url+id).map((res:Response)=>res.json());
}

addOtherphoto(item:OtherphotoModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.post(this.url,body,req).map((res:Response)=>res.json());
} 
deleteOtherphoto(id:number){

let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.delete(this.url+id,req).map((res:Response)=>res.json());
}

/*deleteallBooktable(item:BooktableModel[])
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this.url+1,body,req).map(
    (res:Response)=>res.json()
    
  );
}*/

updateOtherphoto(item:OtherphotoModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.put(this.url+item.other_id,body,req).map((res:Response)=>res.json());
}


getOtherphotojoin()
{
    return this._http.get(this.url1).map((res:Response)=>res.json());
}

getOtherphotojoinById(other_id:number){
    return this._http.get(this.url2+other_id).map((res:Response)=>res.json());
  }

}
