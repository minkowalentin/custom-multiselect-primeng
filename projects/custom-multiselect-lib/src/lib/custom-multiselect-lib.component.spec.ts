import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMultiselectLibComponent } from './custom-multiselect-lib.component';

describe('CustomMultiselectLibComponent', () => {
  let component: CustomMultiselectLibComponent;
  let fixture: ComponentFixture<CustomMultiselectLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMultiselectLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMultiselectLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
