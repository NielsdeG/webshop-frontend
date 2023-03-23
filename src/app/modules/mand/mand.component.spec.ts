import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandComponent } from './mand.component';

describe('MandComponent', () => {
  let component: MandComponent;
  let fixture: ComponentFixture<MandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
