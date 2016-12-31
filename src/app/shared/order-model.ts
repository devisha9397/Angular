export class OrderModel {
     public constructor(public order_id:number,public fk_rest_id:number,public fk_user_email:string,
  public  fk_item_id:number,public item_name:string,public quantity:number,public total_amount:number,public flag:number,
  public date_of_order:string,public delivery_area:string){}
}
