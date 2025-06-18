import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsworkComponent } from './letswork.component';

describe('LetsworkComponent', () => {
  let component: LetsworkComponent;
  let fixture: ComponentFixture<LetsworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetsworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetsworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
