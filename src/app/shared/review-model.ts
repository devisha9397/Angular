export class ReviewModel {
    public constructor(public review_id:number,public fk_user_email:string,public fk_rest_id:number,
  public  review_message:string,public review_date:string){}
}
