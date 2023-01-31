import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionImagenComponent } from './section-imagen.component';

describe('SectionImagenComponent', () => {
  let component: SectionImagenComponent;
  let fixture: ComponentFixture<SectionImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionImagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
