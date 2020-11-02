import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder, private blogService: BlogService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.forma = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      imagen: ['', Validators.required],
      texto: ['', [Validators.required, Validators.minLength(3)]],
      etiquetas: this.fb.array([

      ])
    });
  }

  get tags(): FormArray {
    return this.forma.get('etiquetas') as FormArray;
  }

  addTag(): void {
    this.tags.push(this.fb.control('', Validators.required));
  }

  deleteTag(id: number) {
    this.tags.removeAt(id);
  }

  saveForm() {
    console.log('saveForm...');
    console.log(this.forma);

    let blog: BlogModel = new BlogModel('', '', '', []);
    blog.title = this.forma.get('titulo').value;
    blog.image = this.forma.get('imagen').value;
    blog.text = this.forma.get('texto').value;
    if (this.forma.get('etiquetas') != null) {
      blog.tags = this.forma.get('etiquetas').value;
    }

    console.log('blog:', blog);

    this.blogService.addNewEntry(blog);
    this.forma.reset();
  }

  isInvalid(name: string): boolean {
    return this.forma.get(name).invalid && this.forma.get(name).touched;
  }
}
