# Art Iframe Library

Angular library that loads an external URL and facilitates inter-window communication between the Parent application and Guest application.

## Import the module

Import the module to your app.module.ts file using `import { ArtIframeLibModule } from 'art-iframe-lib'`,
and add `ArtIframeLibModule` to the imports array.

## Usage

Add this selector and configure the input and output.

`<lib-art-iframe [inputData]="inputData" [hostLanguage]="appLanguage" (outputData)="getGuestWindowData($event)" (guestLanguageChange)="guestAppLangChange($event)" [srcURL] = "srcURL"></lib-art-iframe>`

## Package Info

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.