import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantModel } from '../shared/restaurant-model';
import { RestaurantdataService } from '../shared/restaurantdata.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

allrest:RestaurantModel[]=[];
  constructor(public _rest_data:RestaurantdataService,public _router:Router) { }

  ngOnInit() {

    this._rest_data.getAllRestaurant().subscribe(

      (data:RestaurantModel[])=>{
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

  deleteRestaurant(item:RestaurantModel){

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

  addRestaurant(item:RestaurantModel)
  {
    this._router.navigate(['/addrestaurants',0]);//////
  }

}
