import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLoginSuccessComponent } from './social-login-success.component';

describe('SocialLoginSuccessComponent', () => {
  let component: SocialLoginSuccessComponent;
  let fixture: ComponentFixture<SocialLoginSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialLoginSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLoginSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
