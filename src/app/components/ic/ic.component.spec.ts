import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcComponent } from './ic.component';

describe('IcComponent', () => {
  let component: IcComponent;
  let fixture: ComponentFixture<IcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
