import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTargetComponent } from './our-target.component';

describe('OurTargetComponent', () => {
  let component: OurTargetComponent;
  let fixture: ComponentFixture<OurTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTargetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
