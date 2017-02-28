import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from './app.routing';
import { AppComponent } from './app.component';
import { BooktabledataService } from './shared/booktabledata.service';
import { CategorydataService } from './shared/categorydata.service';
import { RestownerdataService } from './shared/restownerdata.service';
import { UserdataService } from './shared/userdata.service';
import { MenuitemdataService } from './shared/menuitemdata.service';
import { OrderdataService } from './shared/orderdata.service';
import { ReviewdataService } from './shared/reviewdata.service';
import { RestaurantdataService } from './shared/restaurantdata.service';
import { BooktableComponent } from './booktable/booktable.component';
import { AddbooktableComponent } from './booktable/addbooktable.component';
import { HeaderComponent } from './header.component';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './category/addcategory.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { AddmenuitemComponent } from './menuitem/addmenuitem.component';
import { RestownerComponent } from './restowner/restowner.component';
import { AddrestownerComponent } from './restowner/addrestowner.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AddrestaurantComponent } from './restaurant/addrestaurant.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { AddorderComponent } from './order/addorder.component';
import { ReviewComponent } from './review/review.component';
import { AddreviewComponent } from './review/addreview.component';
import { AdduserComponent } from './user/adduser.component';
import { FavComponent } from './fav/fav.component';
import { FavdataService } from './shared/favdata.service';
import { AddfavComponent } from './fav/addfav.component';
import { DiscountComponent } from './discount/discount.component';
import { DiscountdataService } from './shared/discountdata.service';
import { AdddiscountComponent } from './discount/adddiscount.component';
import { BooktablefilterPipe } from './booktable/booktablefilter.pipe';
import { CategoryfilterPipe } from './category/categoryfilter.pipe';
import { MenuitemfilterPipe } from './menuitem/menuitemfilter.pipe';
import { RestownerfilterPipe } from './restowner/restownerfilter.pipe';
import { MenuphotosdataService } from './shared/menuphotosdata.service';

import { PaginatePipe } from './ng2paging/paginate.pipe';
import { PaginationService } from './ng2paging/pagination.service';
import { PaginationControlsComponent } from './ng2paging/pagination-controls.component';
import { PaginationControlsDirective } from './ng2paging/pagination-controls.directive';
import { RestaurantfilterPipe } from './restaurant/restaurantfilter.pipe';
import { OrderfilterPipe } from './order/orderfilter.pipe';
import { UserfilterPipe } from './user/userfilter.pipe';
import { MenuphotoComponent } from './menuphoto/menuphoto.component';
import { AddmenuphotoComponent } from './menuphoto/addmenuphoto.component';
import { OtherphotodataService } from './shared/otherphotodata.service';
import { OtherphotoComponent } from './otherphoto/otherphoto.component';
import { AddotherphotoComponent } from './otherphoto/addotherphoto.component';

@NgModule({
  declarations: [
    AppComponent,
    BooktableComponent,
    AddbooktableComponent,
    HeaderComponent,
    CategoryComponent,
    AddcategoryComponent,
    MenuitemComponent,
    AddmenuitemComponent,
    RestownerComponent,
    AddrestownerComponent,
    RestaurantComponent,
    AddrestaurantComponent,
    UserComponent,
    OrderComponent,
    AddorderComponent,
    ReviewComponent,
    AdduserComponent,
    FavComponent,
    AddfavComponent,
    DiscountComponent,
    AdddiscountComponent,
    BooktablefilterPipe,
    CategoryfilterPipe,
    MenuitemfilterPipe,
    RestownerfilterPipe,
    PaginatePipe,
    PaginationControlsComponent,
    PaginationControlsDirective,
    AddreviewComponent,
    RestaurantfilterPipe,
    OrderfilterPipe,
    UserfilterPipe,
    MenuphotoComponent,
    AddmenuphotoComponent,
    OtherphotoComponent,
    AddotherphotoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Router
  ],
  providers: [BooktabledataService,CategorydataService,MenuitemdataService,RestownerdataService,RestaurantdataService,UserdataService,OrderdataService,ReviewdataService,FavdataService,DiscountdataService,PaginationService,MenuphotosdataService,OtherphotodataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
