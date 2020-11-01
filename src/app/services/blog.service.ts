import { Injectable } from '@angular/core';
import { BlogModel } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  listBlog: BlogModel[] = [];
  constructor() { }

  addNewEntry(blog: BlogModel) {
    console.log('addNewEntry...');
    this.listBlog.push(blog);
    console.log('listBlog', this.listBlog);
  }
}
