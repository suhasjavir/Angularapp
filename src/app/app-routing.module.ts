import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminlistComponent } from './admin/adminlist/adminlist.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerlistComponent } from './customer/customerlist/customerlist.component';
import { DemocommentComponent } from './democomment/democomment.component';
import { DemocommentdetailsComponent } from './democommentdetails/democommentdetails.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { ChildrensComponent } from './fashion/childrens/childrens.component';
import { FashionComponent } from './fashion/fashion.component';
import { MensComponent } from './fashion/mens/mens.component';
import { WomansComponent } from './fashion/womans/womans.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { TodoComponent } from './todo/todo.component';
import { UserdatailsComponent } from './userdatails/userdatails.component';
import { UserderoutingComponent } from './userderouting/userderouting.component';
import { UserpostComponent } from './userpost/userpost.component';


const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full'},
  { path:'homepage', component: HomepageComponent},
  { path: 'aboutus', component: AboutusComponent }, // http://localhost:4200/aboutus
  { path: 'contactus', component: ContactusComponent },
  // { path: 'product', // this code for single <router-outlet> 
  { path: 'product', component: ProductComponent,  // this code for multiple <router-outlet>
  children: [
    // { path:'', component: ProductComponent}, // this code for single <router-outlet> 
    { path:'laptop', component:LaptopComponent},
    { path:'mobile', component:MobileComponent},
    { path:'camera', component:CameraComponent},
    { path:'watch', component:WatchComponent}
  ]
  },
  { path: 'post', component: DemopostComponent},
  { path: 'postdetails/:id', component: DemopostdetailsComponent},
  { path: 'userpost', component: UserpostComponent},
  { path: 'userdetails/:id', component: UserdatailsComponent},
  { path: 'comment', component: DemocommentComponent},
  { path: 'commentdetails/:id', component: DemocommentdetailsComponent},
  { path: 'userderouting', component: UserderoutingComponent},
  { path: 'login', component: TemplateformComponent},
  { path: 'order', component: OrderlistComponent},
  { path: 'fashion',
  children:[
    {path:'', component: FashionComponent},
    {path: 'men', component: MensComponent},
    {path: 'woman', component: WomansComponent},
    {path: 'child', component: ChildrensComponent},
  ]
},
  // {path: 'customer', component: CustomerlistComponent},
  // {path: 'admin', component: AdminlistComponent},
  { path: 'todo', component: TodoComponent},
  {path: 'customer', loadChildren: './customer/customer.module#CustomerModule'},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
