import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCounterComponent } from './remove-counter.component';

describe('RemoveCounterComponent', () => {
  let component: RemoveCounterComponent;
  let fixture: ComponentFixture<RemoveCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
