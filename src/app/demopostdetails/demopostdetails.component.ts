import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopostdetails',
  templateUrl: './demopostdetails.component.html',
  styleUrls: ['./demopostdetails.component.css']
})
export class DemopostdetailsComponent implements OnInit {
  
  userpost;
  // DI
  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) { }
  
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.postService.getPostById(id).subscribe(res => {
      console.log('get post by ID', res);
      this.userpost=res;
    })
    
  }
  // this is unother way to come back to parent page. using function
  // BackToParent() {
  //   this.router.navigate(['/post']);
  // }
}
