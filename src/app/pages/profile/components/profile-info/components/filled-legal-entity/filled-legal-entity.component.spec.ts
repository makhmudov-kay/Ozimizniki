import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledLegalEntityComponent } from './filled-legal-entity.component';

describe('FilledLegalEntityComponent', () => {
  let component: FilledLegalEntityComponent;
  let fixture: ComponentFixture<FilledLegalEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilledLegalEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledLegalEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
