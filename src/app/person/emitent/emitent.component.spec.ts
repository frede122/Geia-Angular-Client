import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitentComponent } from './emitent.component';

describe('EmitentComponent', () => {
  let component: EmitentComponent;
  let fixture: ComponentFixture<EmitentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmitentComponent]
    });
    fixture = TestBed.createComponent(EmitentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
