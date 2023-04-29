import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges {

  @Input() parentData: string;
  constructor() {
    console.log('HooksComponent Constructor Called');
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('HooksComponent ngOnchanges called');
      
  }

  
}
