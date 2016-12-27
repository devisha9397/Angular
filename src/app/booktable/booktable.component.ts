import { Component, OnInit } from '@angular/core';
import { BooktableModel } from '../shared/booktable-model';
import { BooktabledataService } from '../shared/booktabledata.service';
@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css']
})
export class BooktableComponent implements OnInit {

allBooktable:BooktableModel[]=[];
  constructor(public _book_data:BooktabledataService) { }

  ngOnInit() {

     this._book_data.getAllBooktable().subscribe(

      (data:BooktableModel[])=>{
        this.allBooktable=data;
      },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
    );  
  }
deleteBooktable(item:BooktableModel){

  this._book_data.deleteBooktable(item.table_id).subscribe(

    (data:any)=>{
      this.allBooktable.splice(this.allBooktable.indexOf(item),1);
      alert('udi gayu');
    },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
  );

  }

}
