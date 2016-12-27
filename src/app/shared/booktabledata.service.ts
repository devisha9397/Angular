import { Injectable } from '@angular/core';
import { BooktableModel } from './booktable-model';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class BooktabledataService {
private url:string="http://localhost:3000/booktables/";
 constructor(public _http:Http) { }
  
getAllBooktable(){

return this._http.get(this.url).map((res:Response)=>res.json());
}
addBooktable(item:BooktableModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.post(this.url,body,req).map((res:Response)=>res.json());
}
deleteBooktable(id:number){

let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.delete(this.url+id,req).map((res:Response)=>res.json());
}
updateBooktable(item:BooktableModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.put(this.url+item.table_id,body,req).map((res:Response)=>res.json());
}
}
