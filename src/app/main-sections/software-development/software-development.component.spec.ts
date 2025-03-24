import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDevelopmentComponent } from './software-development.component';

describe('DevelopmentProjectsComponent', () => {
  let component: SoftwareDevelopmentComponent;
  let fixture: ComponentFixture<SoftwareDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDevelopmentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SoftwareDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
