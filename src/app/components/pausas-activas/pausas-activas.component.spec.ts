import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PausasActivasComponent } from './pausas-activas.component';

describe('PausasActivasComponent', () => {
  let component: PausasActivasComponent;
  let fixture: ComponentFixture<PausasActivasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PausasActivasComponent]
    });
    fixture = TestBed.createComponent(PausasActivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
