import { Component} from '@angular/core';
import { PostsService } from '../posts.service';
import { from } from 'rxjs';

@Component({
  selector : 'app-post-create',
  templateUrl : './post-create.component.html',
  styleUrls : ['./post-create.component.css']
})
export class PostCreateComponent {

  enteredTitle = '';
  enteredContent = '';

  constructor(private postsService:PostsService){}

  onSavePost(form){
    if(form.invalid){
      return;
    }
    this.postsService.addPost(form.value.title,form.value.content);
    form.resetForm();
  }
}
