import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DecimalPipe } from '@angular/common';

import { EditorModule } from 'primeng/editor';

import { AppComponent } from './app.component';
import { ExampleDirective } from './example.directive';
import { IconComponent } from './shared/icon/icon.component';
import { FloatingLabelComponent } from './shared/input-floating-label/floating-label.component';
import { ValidatorComponent } from './shared/validator/validator.component';
import { InputCheckComponent } from './shared/input-check/input-check.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    ButtonModule,
  ],
  // exports: [EditorModule],
  declarations: [
    AppComponent,
    ExampleDirective,
    IconComponent,
    FloatingLabelComponent,
    ValidatorComponent,
    InputCheckComponent,
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
