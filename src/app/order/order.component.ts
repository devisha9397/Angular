import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from '../shared/order-model';
import { OrderModel1 } from '../shared/order-model1';
import { OrderdataService } from '../shared/orderdata.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
}) 
export class OrderComponent implements OnInit {
 
allOrder:OrderModel1[]=[];
  constructor(public _order_data:OrderdataService,public _router:Router) { }

  ngOnInit() {

    this._order_data.getOrderjoin().subscribe(

      (data:OrderModel1[])=>{
        this.allOrder=data;
      },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
    );
  }

deleteOrder(item:OrderModel1){

  this._order_data.deleteOrder(item.order_id).subscribe(

    (data:any)=>{
      this.allOrder.splice(this.allOrder.indexOf(item),1);
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


addOrder(item:OrderModel1)
  {
    this._router.navigate(['/addorders',0]);
  }

 updateOrder(item:OrderModel1)
  {
       this._router.navigate(['/addorders',item.order_id]);
  }
 
}
