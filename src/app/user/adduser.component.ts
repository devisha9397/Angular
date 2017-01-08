import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user-model';
import { UserdataService } from '../shared/userdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx';
//import { RestaurantModel } from '../shared/restaurant-model';
//import { RestaurantdataService } from '../shared/restaurantdata.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']

})
export class AdduserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
