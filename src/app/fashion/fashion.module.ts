import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionComponent } from './fashion.component';
import { RouterModule } from '@angular/router';
import { MensComponent } from './mens/mens.component';
import { WomansComponent } from './womans/womans.component';
import { ChildrensComponent } from './childrens/childrens.component';




@NgModule({
  declarations: [FashionComponent, MensComponent, WomansComponent, ChildrensComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FashionModule { }
