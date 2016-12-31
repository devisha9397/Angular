import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooktableModel } from '../shared/booktable-model';
import { BooktableModel1 } from '../shared/booktable-model1';
import { BooktabledataService } from '../shared/booktabledata.service';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css']
})
export class BooktableComponent implements OnInit {
 
allBooktable:BooktableModel1[]=[];
  constructor(public _book_data:BooktabledataService,public _router:Router) { }

  ngOnInit() {

     this._book_data.getBooktablejoin().subscribe(

      (data:BooktableModel1[])=>{
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
deleteBooktable(item:BooktableModel1){

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

  addBooktable(item:BooktableModel1)
  {
    this._router.navigate(['/addbooktables',0]);
  }

}
 