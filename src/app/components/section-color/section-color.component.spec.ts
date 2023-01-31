import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionColorComponent } from './section-color.component';

describe('SectionColorComponent', () => {
  let component: SectionColorComponent;
  let fixture: ComponentFixture<SectionColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
