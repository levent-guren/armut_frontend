import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCreateComponent } from './box-create.component';

describe('BoxCreateComponent', () => {
  let component: BoxCreateComponent;
  let fixture: ComponentFixture<BoxCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
