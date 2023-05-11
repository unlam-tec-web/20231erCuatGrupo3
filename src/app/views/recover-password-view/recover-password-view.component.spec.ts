import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPasswordViewComponent } from './recover-password-view.component';

describe('RecoverPasswordViewComponent', () => {
  let component: RecoverPasswordViewComponent;
  let fixture: ComponentFixture<RecoverPasswordViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverPasswordViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverPasswordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
