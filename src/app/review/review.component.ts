import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewModel1 } from '../shared/review-model1';
import { ReviewdataService } from '../shared/reviewdata.service';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
allreview:ReviewModel1[]=[];
  constructor(public _review_data:ReviewdataService,public _router:Router) { }
 
  ngOnInit() {

     this._review_data.getreviewjoin().subscribe(

      (data:ReviewModel1[])=>{
        console.log(data);
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
  deleteReview(item:ReviewModel1){

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

  addReview(item:ReviewModel1)
  {
    this._router.navigate(['/addreviews',0]);
  }

  updateReview(item:ReviewModel1)
  {
       this._router.navigate(['/addreviews',item.review_id]);
  }
}
