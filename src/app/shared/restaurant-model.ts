export class RestaurantModel {

    public constructor(public rest_id:number,public owner_email:string,public fk_cat_id:number,public rest_name:string,public rest_add:string,public pincode:number,
  public rest_number:string,public rest_email:string,public opening_status:string,
  public flag:number,public rest_image:string){}
}
