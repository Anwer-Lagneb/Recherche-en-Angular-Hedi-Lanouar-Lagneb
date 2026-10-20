import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComposantPcComponent } from './add-composant-pc.component';

describe('AddComposantPcComponent', () => {
  let component: AddComposantPcComponent;
  let fixture: ComponentFixture<AddComposantPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddComposantPcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComposantPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
