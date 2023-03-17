import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-democommentdetails',
  templateUrl: './democommentdetails.component.html',
  styleUrls: ['./democommentdetails.component.css']
})
export class DemocommentdetailsComponent implements OnInit {
  commentPost;
  // DI
  constructor(private route: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.commentService.getPostById(id).subscribe(res => {
      console.log('get post by ID', res);
      this.commentPost = res;
    })
    
  }
}
