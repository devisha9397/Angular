export class CategoryModel1 {
    public constructor(public cat_id:number,public fk_rest_id:number,public cusines:string,
  public cost:number,public hours:string,public known_for:string,public spotlight:string,
  public rest_id:number,public fk_owner_email:string,public fk_cat_id:number,
  public  fk_review_id:number,public rest_name:string,public rest_add:string,public pincode:number,
  public rest_number:string,public rest_email:string,public opening_status:string,
  public main_photo:string,public menu_photo:string,public other_photos:string){}
}
