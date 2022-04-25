import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreatedComponent } from './event-created.component';

describe('EventCreatedComponent', () => {
  let component: EventCreatedComponent;
  let fixture: ComponentFixture<EventCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
