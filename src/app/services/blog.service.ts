import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BlogModel } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  listBlog: BlogModel[] = [];

  constructor() {
    this.listBlog.push(new BlogModel('DefeXtiles: esta tela moldeable ha sido creada en el MIT aprovechando un error en las impresoras 3D más económicas', 'https://i.blogs.es/0322e4/tela-impresion-3d/1366_2000.jpg', 'Habitualmente los errores en las impresoras 3D provocan que el material se desperdicie, pero Jack Forman, del MIT Media Lab ha convertido uno de estos defectos en su nuevo proyecto. DefeXtiles se nos presenta como la "tela del futuro", un polímero flexible que puede ser impreso de forma rápida con una sencilla impresora 3D, sin necesidad de modificaciones ni software especial para la ocasión. Para crear este material se ha aprovechado la subextrusión del filamento de polímero, un error de los huecos que algunas impresoras generan. Habitualmente este pequeño espacio provoca que la impresión resultante no surja como se desea, pero Forman lo ha utilizado para "tejer" este material.', ['INVESTIGACIÓN', 'MIT', 'IMPRESORAS 3D', 'MATERIAL']));
    this.listBlog.push(new BlogModel('El Raspberry Pi 400 no es un simple teclado: hay un ordenador completo dentro de él', 'https://i.blogs.es/6f6e84/raspberry_pi_400/1366_2000.jpg', 'Las especificaciones del Raspberry Pi cubren las necesidades básicas de navegación y gestión de archivos que un usuario general puede necesitar: procesador ARM Broadcom de cuatro núcleos a 1,8 GHz, 4 GB de memoria RAM, Bluetooth 5.0 de bajo consumo, puertos USB 2.0, 3.0 y USB-C para carga, puerto Gigabit Ethernet, Wi-Fi 5 y el rendimiento por hardware suficiente como para decodificar vídeo en 4K y 60 fps mediante el códec H.265. Tampoco se olvidan del puerto GPIO que muchos programadores querrán seguir teniendo a mano. El tamaño del teclado no es nada exagerado. Con sus 78 teclas y su color blanco en la parte superior recuerda a los Magic Keyboard de Apple, aunque con un grosor bastante mayor para poder alojar el ordenador y su sistema de disipación. Contamos también con dos puertos micro-HDMI, capaces de soportar una pantalla cada uno. El sistema operativo es, como no podía ser de otra forma, Raspberry Pi OS.', ['ORDENADORES', 'SOBREMESA', 'RASPBERRY PI', 'RASPBERRY']));
  }

  addNewEntry(blog: BlogModel) {
    console.log('addNewEntry...');
    this.listBlog.push(blog);
    console.log('listBlog', this.listBlog);
  }

  getListBlog(): BlogModel[] {
    return this.listBlog;
  }
}
