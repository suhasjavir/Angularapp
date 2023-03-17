import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
// import { CustomDirective } from './custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TemplateformComponent } from './templateform/templateform.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwichComponent } from './ng-swich/ng-swich.component';
import { CountrystatedrpComponent } from './countrystatedrp/countrystatedrp.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { PractemformComponent } from './practemform/practemform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TempformassignComponent } from './tempformassign/tempformassign.component';
import { ReactiveformassignComponent } from './reactiveformassign/reactiveformassign.component';
import { ReactmyassignComponent } from './reactmyassign/reactmyassign.component';
import { AgecalculatorComponent } from './agecalculator/agecalculator.component';
import { MyserviceService } from './services/myservice.service';
import { Usdi1Component } from './usdi1/usdi1.component';
import { Usdi2Component } from './usdi2/usdi2.component';
import { DesignutilityService } from './services/designutility.service';
import { Ussdi3Component } from './ussdi3/ussdi3.component';
import { NewserviceService } from './services/newservice.service';
import { HttpClientModule } from '@angular/common/http';
import { Usshttp4Component } from './usshttp4/usshttp4.component';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { CustomPipe } from './custom.pipe';
import { SearchPipe } from './search.pipe';
import { ProductfilterComponent } from './productfilter/productfilter.component';
import { PipesearchassignComponent } from './pipesearchassign/pipesearchassign.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';

import { Uscomp2Component } from './uscomp2/uscomp2.component';
import { Uscomp3Component } from './uscomp3/uscomp3.component';
import { Uscomp4Component } from './uscomp4/uscomp4.component';
import { Uscomp1Component } from './uscomp1/uscomp1.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { UserpostComponent } from './userpost/userpost.component';
import { UserdatailsComponent } from './userdatails/userdatails.component';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { DemocommentComponent } from './democomment/democomment.component';
import { DemocommentdetailsComponent } from './democommentdetails/democommentdetails.component';
import { CommentService } from './services/comment.service';
import { UserderoutingComponent } from './userderouting/userderouting.component';
import { ProductModule } from './product/product.module';
import { OrdersModule } from './orders/orders.module';
import { FashionModule } from './fashion/fashion.module';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { TodoComponent } from './todo/todo.component';
// import { HttpobservComponent } from './httpobserv/httpobserv.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    CardComponent,
    // CustomDirective,
    TemplateformComponent,
    NgForComponent,
    NgIfComponent,
    NgSwichComponent,
    CountrystatedrpComponent,
    NgStyleComponent,
    NgClassComponent,
    PractemformComponent,
    ReactiveformComponent,
    TempformassignComponent,
    ReactiveformassignComponent,
    ReactmyassignComponent,
    AgecalculatorComponent,
    Usdi1Component,
    Usdi2Component,
    Ussdi3Component,
    Usshttp4Component,
    PipeexampleComponent,
    CustomPipe,
    SearchPipe,
    ProductfilterComponent,
    PipesearchassignComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Uscomp1Component,
    Uscomp2Component,
    Uscomp3Component,
    Uscomp4Component,
    AboutusComponent,
    ContactusComponent,
    HomepageComponent,
    PagenotfoundComponent,
    DemopostComponent,
    DemopostdetailsComponent,
    UserpostComponent,
    UserdatailsComponent,
    DemocommentComponent,
    DemocommentdetailsComponent,
    UserderoutingComponent,
    TodoComponent  
    // HttpobservComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    OrdersModule,
    FashionModule
  ],
  providers: [MyserviceService, DesignutilityService, NewserviceService, PostService, UserService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('appmodule called');
  }
 }