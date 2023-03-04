import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { DialogContentComponent } from './shared/dialog-content/dialog-content.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService],
})
export class AppComponent implements OnInit {
  public step: number = 0;
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

  // Dialog
  ref!: DynamicDialogRef;

  constructor(public dialogService: DialogService) {}

  public ngOnInit(): void {
    // this.modalOpen({
    //   desc: '500 characters of lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat esse cillum dollore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum fuugt.',
    //   header: 'This is a PrimeNG dynamic dialog',
    // });
  }

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
  modalOpen(content: any) {
    if (content && content.desc) {
      console.log('loaded');
      this.ref = this.dialogService.open(DialogContentComponent, {
        header: content.header,
        width: '65%',
        height: '75vh',
        styleClass: 'some-class',
        data: {
          desc: content.desc,
        },
      });
    }
  }
}
