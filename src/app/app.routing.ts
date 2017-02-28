import { Routes,RouterModule } from '@angular/router';
import { BooktableComponent } from './booktable/booktable.component';
import { AddbooktableComponent } from './booktable/addbooktable.component';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './category/addcategory.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { AddmenuitemComponent } from './menuitem/addmenuitem.component';
import { RestownerComponent } from './restowner/restowner.component';
import { AddrestownerComponent } from './restowner/addrestowner.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AddrestaurantComponent } from './restaurant/addrestaurant.component';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './user/adduser.component';
import { OrderComponent } from './order/order.component';
import { AddorderComponent } from './order/addorder.component';
import { ReviewComponent } from './review/review.component';
import { AddreviewComponent } from './review/addreview.component';
import { FavComponent } from './fav/fav.component';
import { AddfavComponent } from './fav/addfav.component';
import { DiscountComponent } from './discount/discount.component';
import { AdddiscountComponent } from './discount/adddiscount.component';
import { MenuphotoComponent } from './menuphoto/menuphoto.component';
import { AddmenuphotoComponent } from './menuphoto/addmenuphoto.component';
import { OtherphotoComponent } from './otherphoto/otherphoto.component';
import { AddotherphotoComponent } from './otherphoto/addotherphoto.component';


const routing:Routes=[

    {path:'',pathMatch:'full',redirectTo:'/booktables'},
    {path:'booktables', component:BooktableComponent},
    {path:'addbooktables/:table_id', component:AddbooktableComponent},
     {path:'categories', component:CategoryComponent},
    {path:'addcategories/:cat_id', component:AddcategoryComponent},
    {path:'menuitems', component:MenuitemComponent},
    {path:'addmenuitems/:item_id', component:AddmenuitemComponent},
    {path:'restowners', component:RestownerComponent},
    {path:'addrestowners/:owner_email', component:AddrestownerComponent},
    {path:'restaurants', component:RestaurantComponent},
    {path:'addrestaurants/:rest_id', component:AddrestaurantComponent},
    {path:'users', component:UserComponent}, 
     {path:'addusers/:user_email', component:AdduserComponent},
    {path:'orders', component:OrderComponent},
    {path:'addorders/:order_id', component:AddorderComponent},
    {path:'reviews', component:ReviewComponent},
      {path:'addreviews/:review_id', component:AddreviewComponent},
    {path:'favs', component:FavComponent},
    {path:'addfavs/:fav_id', component:AddfavComponent},
    {path:'discounts', component:DiscountComponent},
    {path:'adddiscounts/:discount_id', component:AdddiscountComponent},
     {path:'menuphotos', component:MenuphotoComponent},
    {path:'addmenuphotos/:menu_id', component:AddmenuphotoComponent},
      {path:'otherphotos', component:OtherphotoComponent},
    {path:'addotherphotos/:other_id', component:AddotherphotoComponent}
    ];

export const Router=RouterModule.forRoot(routing);