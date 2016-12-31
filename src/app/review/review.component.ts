import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewModel } from '../shared/review-model';
import { ReviewdataService } from '../shared/reviewdata.service';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
allreview:ReviewModel[]=[];
  constructor(public _review_data:ReviewdataService,public _router:Router) { }

  ngOnInit() {

    this._review_data.getAllReview().subscribe(

      (data:ReviewModel[])=>{
        this.allreview=data;
      },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
    );
  }
  deleteReview(item:ReviewModel){

  this._review_data.deleteReview(item.review_id).subscribe(

    (data:any)=>{
      this.allreview.splice(this.allreview.indexOf(item),1);
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
}
