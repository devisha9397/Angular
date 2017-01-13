import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavModels } from '../shared/fav-models';
import { FavModel1 } from '../shared/fav-model1';
import { FavdataService } from '../shared/favdata.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
allFav:FavModel1[]=[];
  constructor(public _fav_data:FavdataService,public _router:Router) { }

  ngOnInit() {
    /*this._fav_data.getFavjoin().subscribe(

      (data:FavModel1[])=>{
        this.allFav=data;
      },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
    );*/
  }

   deleteFav(item:FavModel1){

  this._fav_data.deleteFav(item.fav_id).subscribe(

    (data:any)=>{
      this.allFav.splice(this.allFav.indexOf(item),1);
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
 
 addFav(item:FavModel1)
  {
    this._router.navigate(['/addfavs',0]);////
  }
  
 updateFav(item:FavModel1)
  {
       this._router.navigate(['/addFav',item.fav_id]);
  }



}
