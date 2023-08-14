import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitosSaludablesComponent } from './habitos-saludables.component';

describe('HabitosSaludablesComponent', () => {
  let component: HabitosSaludablesComponent;
  let fixture: ComponentFixture<HabitosSaludablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HabitosSaludablesComponent]
    });
    fixture = TestBed.createComponent(HabitosSaludablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
