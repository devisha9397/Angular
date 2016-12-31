import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuitemModel } from '../shared/menuitem-model';
import { MenuitemModel1 } from '../shared/menuitem-model1';
import { MenuitemdataService } from '../shared/menuitemdata.service';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {

  allMenuitem:MenuitemModel1[]=[];

  constructor(public _menuitem_data:MenuitemdataService,public _router:Router) { }

  ngOnInit() {

         this._menuitem_data.getBooktablejoin().subscribe(

      (data:MenuitemModel1[])=>{
        this.allMenuitem=data;
      },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
    ); 
  }

  deleteMenuitem(item:MenuitemModel1){

  this._menuitem_data.deleteMenuitem(item.item_id).subscribe(

    (data:any)=>{
      this.allMenuitem.splice(this.allMenuitem.indexOf(item),1);
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

  addMenuitem(item:MenuitemModel1)
  {
    this._router.navigate(['/addmenuitems',0]);
  }
}
