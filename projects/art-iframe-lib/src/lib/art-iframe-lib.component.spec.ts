import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtIframeLibComponent } from './art-iframe-lib.component';

describe('ArtIframeLibComponent', () => {
  let component: ArtIframeLibComponent;
  let fixture: ComponentFixture<ArtIframeLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtIframeLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtIframeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
