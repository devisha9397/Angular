import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';  
import { RestaurantModel } from '../shared/restaurant-model';
import { RestaurantModel1 } from '../shared/restaurant-model1';
import { RestaurantdataService } from '../shared/restaurantdata.service';
 
@Component({ 
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

allrest:RestaurantModel1[]=[];
  constructor(public _rest_data:RestaurantdataService,public _router:Router) { }

rev(item:RestaurantModel1){
    this._router.navigate(['/reviewlink',item.rest_id]);
  }

  menu(item:RestaurantModel1){
    this._router.navigate(['/menuphotolink',item.rest_id]);
  }

  ngOnInit() {
 
    this._rest_data.getRestaurantjoin().subscribe(

      (data:RestaurantModel1[])=>{
        this.allrest=data;
      },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
    );
  }

  deleteRestaurant(item:RestaurantModel1){

  this._rest_data.deleteRestaurant(item.rest_id).subscribe(

    (data:any)=>{
      this.allrest.splice(this.allrest.indexOf(item),1);
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
 
  addRestaurant(item:RestaurantModel1)
  {
    this._router.navigate(['/addrestaurants',0]);
  }
updateRestaurant(item:RestaurantModel1) 
  {
       this._router.navigate(['/addrestaurants',item.rest_id]);
  }

}
