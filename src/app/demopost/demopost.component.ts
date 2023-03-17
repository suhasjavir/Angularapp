import { Component, OnInit } from '@angular/core';
import { post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {
  arrPost: post[] = [];

  // DI the post service
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPost().subscribe(res => {
      this.arrPost = res;
      console.log('post array data', res);
    })
  }

}
