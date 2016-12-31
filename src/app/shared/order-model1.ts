export class OrderModel1 {

     public constructor(public order_id:number,public fk_rest_id:number,public fk_user_email:string,
  public  fk_item_id:number,public item_name:string,public quantity:number,public total_amount:number,public flag:number,
  public date_of_order:string,public delivery_area:string,public item_id:number,
  public item_price:number,public rest_id:number,public fk_owner_email:string,public fk_cat_id:number,
  public  fk_review_id:number,public rest_name:string,public rest_add:string,public pincode:number,
  public rest_number:string,public rest_email:string,public opening_status:string,
  public main_photo:string,public menu_photo:string,public other_photos:string ){}
}
