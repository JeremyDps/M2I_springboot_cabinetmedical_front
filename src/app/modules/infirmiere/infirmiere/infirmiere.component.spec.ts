import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmiereComponent } from './infirmiere.component';

describe('InfirmiereComponent', () => {
  let component: InfirmiereComponent;
  let fixture: ComponentFixture<InfirmiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfirmiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfirmiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
