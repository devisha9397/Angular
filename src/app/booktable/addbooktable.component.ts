import { Component, OnInit } from '@angular/core';
import { BooktableModel } from '../shared/booktable-model';
import { BooktabledataService } from '../shared/booktabledata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbooktable',
  templateUrl: './addbooktable.component.html',
  styleUrls: ['./addbooktable.component.css']
})
export class AddbooktableComponent implements OnInit {

private table_id:number;
private fk_user_email:string;
private fk_rest_id:number;
private date:string;
private no_of_people:number;
private time:string;
private additional_request:string;


 public book:BooktableModel;

  constructor(public _book_data:BooktabledataService,public _router:Router) { }

  ngOnInit() {
  }

  addBooktable(){

  this.book=new BooktableModel(this.table_id,this.fk_user_email,this.fk_rest_id,this.date,this.no_of_people,this.time,this.additional_request);
  this._book_data.addBooktable(this.book).subscribe(
    (data:any)=>{
      alert('added');
      
      this._router.navigate(['/booktables']);
    }
  );
} 

}
