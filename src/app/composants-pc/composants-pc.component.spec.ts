import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantsPcComponent } from './composants-pc.component';

describe('ComposantsPcComponent', () => {
  let component: ComposantsPcComponent;
  let fixture: ComponentFixture<ComposantsPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantsPcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantsPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
