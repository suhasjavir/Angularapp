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
import { Usscrud1Component } from './usscrud1/usscrud1.component';
import { Usscrud1Service } from './services/usscrud1.service';
import { SerchapiComponent } from './serchapi/serchapi.component';
import { CartloginComponent } from './cartlogin/cartlogin.component';
import { CartshopingComponent } from './cartshoping/cartshoping.component';
import { CartlistComponent } from './cartshoping/cartlist/cartlist.component';
import { ReactformnewComponent } from './reactformnew/reactformnew.component';
import { AuthloginComponent } from './authlogin/authlogin.component';
import { HooksComponent } from './hooks/hooks.component';
import { TempformprComponent } from './tempformpr/tempformpr.component';
import { Tempformpr1Component } from './tempformpr1/tempformpr1.component';
import { TempformuxprComponent } from './tempformuxpr/tempformuxpr.component';
import { ReactsohoComponent } from './reactsoho/reactsoho.component';
import { ReactanilsComponent } from './reactanils/reactanils.component';
import { ReactformuxComponent } from './reactformux/reactformux.component';
import { Reactformux1Component } from './reactformux1/reactformux1.component';
import { Z7uxservicedi1Component } from './z7uxservicedi1/z7uxservicedi1.component';
import { Z7uxservicedi2Component } from './z7uxservicedi2/z7uxservicedi2.component';
import { ZuxdidesignutilityService } from './services/zuxdidesignutility.service';
import { Z7sohoservicedi1Component } from './z7sohoservicedi1/z7sohoservicedi1.component';
import { Z7sohoservicedi2Component } from './z7sohoservicedi2/z7sohoservicedi2.component';
import { ZsohodiemployeeService } from './services/zsohodiemployee.service';
import { Z7anilservivedi1Component } from './z7anilservivedi1/z7anilservivedi1.component';
import { Z7anilservivedi2Component } from './z7anilservivedi2/z7anilservivedi2.component';
import { ZanilservicediService } from './services/zanilservicedi.service';
import { Z7anilseredi1Component } from './z7anilseredi1/z7anilseredi1.component';
import { Z7anilseredi2Component } from './z7anilseredi2/z7anilseredi2.component';
import { ZuxhttpclientandobservableComponent } from './zuxhttpclientandobservable/zuxhttpclientandobservable.component';
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
    TodoComponent,
    Usscrud1Component,
    SerchapiComponent,
    CartloginComponent,
    CartshopingComponent,
    CartlistComponent,
    ReactformnewComponent,
    AuthloginComponent,
    HooksComponent,
    TempformprComponent,
    Tempformpr1Component,
    TempformuxprComponent,
    ReactsohoComponent,
    ReactanilsComponent,
    ReactformuxComponent,
    Reactformux1Component,
    Z7uxservicedi1Component,
    Z7uxservicedi2Component,
    Z7sohoservicedi1Component,
    Z7sohoservicedi2Component,
    Z7anilservivedi1Component,
    Z7anilservivedi2Component,
    Z7anilseredi1Component,
    Z7anilseredi2Component,
    ZuxhttpclientandobservableComponent
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
  providers: [MyserviceService, DesignutilityService, Usscrud1Service, NewserviceService, PostService,
   UserService, CommentService, ZuxdidesignutilityService, ZsohodiemployeeService, ZanilservicediService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('appmodule called');
  }
 }
