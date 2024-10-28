import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentProjectsComponent } from './development-projects.component';

describe('DevelopmentProjectsComponent', () => {
  let component: DevelopmentProjectsComponent;
  let fixture: ComponentFixture<DevelopmentProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopmentProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopmentProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
