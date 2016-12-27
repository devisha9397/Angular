export class BooktableModel {
    public constructor(public table_id:number,public fk_user_email:string,public fk_rest_id:number,
    date:string,public no_of_people:number,public time:string,public additional_request:string){}
}
