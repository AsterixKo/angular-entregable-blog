import { Component, Input, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/models/blog.model';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  @Input() blog: BlogModel = new BlogModel('', '', '', []);
  
  constructor() { }

  ngOnInit(): void {
  }

}
