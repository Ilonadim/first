import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAllertComponent } from './warning-allert.component';

describe('WarningAllertComponent', () => {
  let component: WarningAllertComponent;
  let fixture: ComponentFixture<WarningAllertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningAllertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningAllertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
