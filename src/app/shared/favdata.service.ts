import { Injectable } from '@angular/core';
import { FavModels } from './fav-models';
import { FavModel1 } from './fav-model1';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class FavdataService {
private url:string="http://localhost:3000/favs/";
//private url1:string="http://localhost:3000/getfavjoins/";
  constructor(public _http:Http) { }


getAllFav(){
 
return this._http.get(this.url).map((res:Response)=>res.json());
}

/*getFavjoin()
{
    return this._http.get(this.url1).map((res:Response)=>res.json());
}*/

getFavbyid(id:number){


return this._http.get(this.url+id).map((res:Response)=>res.json());
}

addFav(item:FavModels){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.post(this.url,body,req).map((res:Response)=>res.json());
}

deleteFav(id:number){

let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.delete(this.url+id,req).map((res:Response)=>res.json());
}

updateFav(item:FavModels){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.put(this.url+item.fav_id,body,req).map((res:Response)=>res.json());
}


}
