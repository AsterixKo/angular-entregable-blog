import { Component, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  listBlog: BlogModel[];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.listBlog = this.blogService.getListBlog();
  }

}
