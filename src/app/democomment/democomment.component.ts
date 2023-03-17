import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-democomment',
  templateUrl: './democomment.component.html',
  styleUrls: ['./democomment.component.css']
})
export class DemocommentComponent implements OnInit {

  arrComment: Comment[] = [];
  // DI
  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getPost().subscribe(res => {
      this.arrComment=res;
      console.log('Comment arr data', res );
      
    })
  }

}
