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
 public booktablearr:BooktableModel1[]=[];
 public delarr:BooktableModel1[]=[];
i:number=0;
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

  addarr(item:BooktableModel1)
  {
    if(this.delarr.find(x=>x==item))
    {
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else{
      this.delarr.push(item);
    }
  }

  deleteallBooktable()
  {
    console.log("Deleteall");
  this._book_data.deleteallBooktable(this.delarr).subscribe(
      (data:BooktableModel1[])=>{
          for(this.i=0;this.i<this.delarr.length;this.i++)
          {
            if(this.booktablearr.find(x=>x==this.booktablearr[this.i]))
            {
              this.booktablearr.splice(this.booktablearr.indexOf(this.delarr[this.i]),1);
            }
          }
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("successfully delete");
      }
    );
  
  }
 
  addBooktable(item:BooktableModel1)
  {
    this._router.navigate(['/addbooktables',0]);
  }

  updateBooktable(item:BooktableModel1)
  {
       this._router.navigate(['/addbooktables',item.table_id]);
  }




}
 