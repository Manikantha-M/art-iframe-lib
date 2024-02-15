import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ArtIframeLibComponent } from './art-iframe-lib.component';
import { ArtIframeComponent } from './art-iframe/art-iframe.component';



@NgModule({
  declarations: [
    ArtIframeLibComponent,
    ArtIframeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArtIframeLibComponent,
    ArtIframeComponent
  ]
})
export class ArtIframeLibModule { }
