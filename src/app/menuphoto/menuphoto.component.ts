import { Component, OnInit } from '@angular/core';
import { MenuphotoModel } from '../shared/menuphoto-model';
import { MenuphotosdataService } from '../shared/menuphotosdata.service';
import { Router } from '@angular/router';
import { MenuphotosModel1 } from '../shared/menuphotos-model1';

@Component({
  selector: 'app-menuphoto',
  templateUrl: './menuphoto.component.html',
  styleUrls: ['./menuphoto.component.css']
})
export class MenuphotoComponent implements OnInit {
allMenuphoto:MenuphotosModel1[]=[];
  constructor(public _photo_data:MenuphotosdataService,public _router:Router) { }

  ngOnInit() {

    this._photo_data.getMenuphotojoin().subscribe(

      (data:MenuphotosModel1[])=>{
        this.allMenuphoto=data;
      },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
    );  
  }

  deleteMenuphoto(item:MenuphotosModel1){

  this._photo_data.deleteMenuphoto(item).subscribe(

    (data:any)=>{
      this.allMenuphoto.splice(this.allMenuphoto.indexOf(item),1);
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

  addMenuphoto(item:MenuphotosModel1)
  {
    this._router.navigate(['/addmenuphotos',0]);
  }

  updateMenuphoto(item:MenuphotosModel1)
  {
       this._router.navigate(['/addmenuphotos',item.menu_id]);
  }

}
