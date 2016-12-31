export class CategoryModel {

public constructor(public cat_id:number,public fk_rest_id:number,public cusines:string,
  public cost:number,public hours:string,public known_for:string,public spotlight:string){} 
}