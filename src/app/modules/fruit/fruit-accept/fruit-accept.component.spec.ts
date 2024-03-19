import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitAcceptComponent } from './fruit-accept.component';

describe('FruitAcceptComponent', () => {
  let component: FruitAcceptComponent;
  let fixture: ComponentFixture<FruitAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FruitAcceptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
