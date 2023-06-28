import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationCodeViewComponent } from './verification-code-view.component';

describe('VerificationCodeViewComponent', () => {
  let component: VerificationCodeViewComponent;
  let fixture: ComponentFixture<VerificationCodeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationCodeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationCodeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
