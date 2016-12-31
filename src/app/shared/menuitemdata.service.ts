import { Injectable } from '@angular/core';
import { MenuitemModel } from './menuitem-model';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MenuitemdataService {
  private url:string="http://localhost:3000/menuitems/";
  private url1:string="http://localhost:3000/getmenuitemjoins/";

  constructor(public _http:Http) { }

 getAllMenuitem(){
 
return this._http.get(this.url).map((res:Response)=>res.json());
}

getBooktablejoin()
{
    return this._http.get(this.url1).map((res:Response)=>res.json());
}

getMenuitembyid(id:number){

return this._http.get(this.url+id).map((res:Response)=>res.json());
}

addMenuitem(item:MenuitemModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.post(this.url,body,req).map((res:Response)=>res.json());
}

deleteMenuitem(id:number){

let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.delete(this.url+id,req).map((res:Response)=>res.json());
}

updateMenuitem(item:MenuitemModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.put(this.url+item.item_id,body,req).map((res:Response)=>res.json());
}

}
