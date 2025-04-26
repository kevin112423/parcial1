import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallUserComponent } from './detall-user.component';

describe('DetallUserComponent', () => {
  let component: DetallUserComponent;
  let fixture: ComponentFixture<DetallUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
