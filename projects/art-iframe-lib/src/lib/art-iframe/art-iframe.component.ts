import { Component, Input, Output, OnInit, EventEmitter, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'lib-art-iframe',
  templateUrl: './art-iframe.component.html',
  styleUrls: ['./art-iframe.component.css']
})
export class ArtIframeComponent implements OnInit {

  @Input() srcURL: string = "";
  @Input() hostLanguage: string = "en";
  @Input() inputData: object = {};
  @Output() outputData: EventEmitter<any> = new EventEmitter<any>();
  @Output() guestLanguageChange: EventEmitter<any> = new EventEmitter<any>();
  iframeURL: SafeResourceUrl = "";
  iframeRef: any;
  guestOrigin: string = "";
  hasInput: boolean = false;
  constructor(private _ds: DomSanitizer) { }

  ngOnInit(): void {

    this.hasInput = !!this.srcURL && !!this.hostLanguage && Object.values(this.inputData).length > 0;
    if (!this.hasInput) return;

    this.iframeURL = this._ds.bypassSecurityTrustResourceUrl(this.srcURL);
    this.iframeRef = document.getElementById('iframeRef') as HTMLIFrameElement;
    this.guestOrigin = new URL(this.srcURL).origin;

    window.addEventListener('message', (event: any) => {
      const parsedData = JSON.parse(event.data);
      if (parsedData['eventType'] == 'INPUT' && parsedData['onLoad']) {
        this.iframeRef.contentWindow.postMessage(JSON.stringify(this.inputData), this.guestOrigin);
      }
      else if (parsedData["eventType"] == 'OUTPUT') {
        this.outputData.emit(parsedData);
      }
      else if (parsedData["eventType"] == 'langChange') {
        this.guestLanguageChange.emit(parsedData);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['hostLanguage'] && this.iframeRef) {
      this.iframeRef.contentWindow.postMessage(JSON.stringify({'eventType': 'langChange', 'langValue': changes['hostLanguage'].currentValue}), this.guestOrigin);
    }
  }
}
