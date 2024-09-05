import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdonComponent } from './edon.component';

describe('EdonComponent', () => {
  let component: EdonComponent;
  let fixture: ComponentFixture<EdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
