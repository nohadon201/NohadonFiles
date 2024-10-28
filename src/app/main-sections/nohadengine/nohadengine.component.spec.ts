import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NohadengineComponent } from './nohadengine.component';

describe('NohadengineComponent', () => {
  let component: NohadengineComponent;
  let fixture: ComponentFixture<NohadengineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NohadengineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NohadengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
