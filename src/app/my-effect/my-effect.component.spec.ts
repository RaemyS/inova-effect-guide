import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEffectComponent } from './my-effect.component';

describe('MyEffect', () => {
  let component: MyEffectComponent;
  let fixture: ComponentFixture<MyEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyEffectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyEffectComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
