import { Component, OnInit } from '@angular/core';
import { OtherphotoModel } from '../shared/otherphoto-model';
import { OtherphotodataService } from '../shared/otherphotodata.service';
import { Router } from '@angular/router';
import { Otherphotomodel1 } from '../shared/otherphotomodel1';

@Component({
  selector: 'app-otherphoto',
  templateUrl: './otherphoto.component.html',
  styleUrls: ['./otherphoto.component.css']
})
export class OtherphotoComponent implements OnInit {
allOtherphoto:Otherphotomodel1[]=[];

  constructor(public _photo_data:OtherphotodataService,public _router:Router) { }


  ngOnInit() {

    this._photo_data.getOtherphotojoin().subscribe(

      (data:Otherphotomodel1[])=>{
        this.allOtherphoto=data;
      },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
    );  
  }

deleteOtherphoto(item:Otherphotomodel1){

  this._photo_data.deleteOtherphoto(item.other_id).subscribe(

    (data:any)=>{
      this.allOtherphoto.splice(this.allOtherphoto.indexOf(item),1);
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

  addOtherphoto(item:Otherphotomodel1)
  {
    this._router.navigate(['/addotherphotos',0]);
  }

  updateMenuphoto(item:Otherphotomodel1)
  {
       this._router.navigate(['/addotherphotos',item.other_id]);
  }


}
