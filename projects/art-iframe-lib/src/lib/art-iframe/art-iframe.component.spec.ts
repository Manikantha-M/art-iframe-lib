import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtIframeComponent } from './art-iframe.component';

describe('ArtIframeComponent', () => {
  let component: ArtIframeComponent;
  let fixture: ComponentFixture<ArtIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtIframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
