import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInfirmieresComponent } from './list-infirmieres.component';

describe('ListInfirmieresComponent', () => {
  let component: ListInfirmieresComponent;
  let fixture: ComponentFixture<ListInfirmieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInfirmieresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInfirmieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
