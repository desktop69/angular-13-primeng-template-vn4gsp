import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

//  import * from 'node_modules/quill/dist/quill.js';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss'],
})
export class DialogContentComponent implements OnInit {
  desc: any = '';
  quillFormats = [
    'background',
    'bold',
    'color',
    'font',
    'code',
    'italic',
    'link',
    'size',
    'strike',
    'script',
    'underline',
    'blockquote',
    'header',
    'indent',
    'list',
    'align',
    'direction',
    'block',
    'image',
    'video',
  ];
  style: any;

  constructor(public config: DynamicDialogConfig) {}

  ngOnInit() {}

  selectionChange(e: any) {
    console.log(e);
  }
  anything(e: any) {
    console.log(e);
    // this.changeDetectorRef.detectChanges();
  }
  textChange(e: any) {
    console.log(e);
  }
}
