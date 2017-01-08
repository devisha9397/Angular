export class RestaurantModel1 {
     public constructor(public rest_id:number,public fk_owner_email:string,public fk_cat_id:number,
  public rest_name:string,public rest_add:string,public pincode:number,
  public rest_number:string,public rest_email:string,public opening_status:string,
    public cat_id:number,public cusines:string,
  public review_id:number,public fk_user_email:string,public fk_rest_id :string,
  public  review_message:string,public review_date:string){}
}
