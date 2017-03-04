import { Injectable } from '@angular/core';
import { MenuphotoModel } from './menuphoto-model';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx'; 

@Injectable()
export class MenuphotosdataService {

private url:string="http://localhost:3000/menuphotos/";
private url1:string="http://localhost:3000/getmenuphotojoins/";
private url2:string="http://localhost:3000/getmenuphotojoinbyid/";

  constructor(public _http:Http) { }

getAllMenuphoto(){ 

return this._http.get(this.url).map((res:Response)=>res.json());
}

getMenuphotobyid(id:number){

return this._http.get(this.url+id).map((res:Response)=>res.json());
}


addMenuphoto(item:MenuphotoModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.post(this.url,body,req).map((res:Response)=>res.json());
} 
deleteMenuphoto(item:MenuphotoModel){

let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.delete(this.url+item.menu_id,req).map((res:Response)=>res.json());
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

updateMenuphoto(item:MenuphotoModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.put(this.url+item.menu_id,body,req).map((res:Response)=>res.json());
}


getMenuphotojoin()
{
    return this._http.get(this.url1).map((res:Response)=>res.json());
}

getMenuphotojoinById(menu_id:number){
    return this._http.get(this.url2+menu_id).map((res:Response)=>res.json());
  }

}
