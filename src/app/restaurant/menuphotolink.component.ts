import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { RestaurantModel } from '../shared/restaurant-model';
import { RestaurantdataService } from '../shared/restaurantdata.service';
import { RestaurantModel1 } from '../shared/restaurant-model1';
import { MenuphotoModel } from '../shared/menuphoto-model';
import { MenuphotosdataService } from '../shared/menuphotosdata.service';
import { MenuphotosModel1 } from '../shared/menuphotos-model1';

@Component({
  selector: 'app-menuphotolink',
  templateUrl: './menuphotolink.component.html',
  styleUrls: ['./menuphotolink.component.css']
})
export class MenuphotolinkComponent implements OnInit {

allmenuphotoid:MenuphotosModel1[]=[];
private _subscription:Subscription;

menu_id:number;
menupic_path:string;
fk_rest_id:number;
rest_name:string;
rest_id:number;

  constructor(public _rest_data:RestaurantdataService,public _menu_data:MenuphotosdataService,public _router:Router,public _acroute:ActivatedRoute) { }

  ngOnInit() {

    this._subscription=this._acroute.params.subscribe(

      (params:any)=>{
       // this.fk_rest_id=params["rest_id"];
       this.rest_id =params["rest_id"];
      
        console.log(this.rest_name);
      }
    );

    this._rest_data.getRestaurantbyid(this.rest_id).subscribe(

        (data:RestaurantModel1[])=>{
          
         
            this.rest_name=data[0].rest_name,
          console.log(this.rest_id);
        }
      );


    /*this._ansdata.getAnswerByQueId(this.faq_id).subscribe(

        (data:AnswerjoinModel[])=>{
         this.allansbyid=data;
          console.log(this.faq_id);
        }
      );*/

      this._menu_data.getMenuphotojoinById(this.rest_id).subscribe(

      (data:MenuphotosModel1[])=>{
        this.allmenuphotoid=data;
        console.log(data);
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('photo aai gai');
      }
      
    );


  }

}
