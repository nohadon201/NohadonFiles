import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsDevelopmentComponent } from './graphics-development.component';

describe('GraphicsDevelopmentComponent', () => {
  let component: GraphicsDevelopmentComponent;
  let fixture: ComponentFixture<GraphicsDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsDevelopmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicsDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
