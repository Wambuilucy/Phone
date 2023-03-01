import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSpecTsComponent } from './contact.spec.ts.component';

describe('ContactSpecTsComponent', () => {
  let component: ContactSpecTsComponent;
  let fixture: ComponentFixture<ContactSpecTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSpecTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSpecTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
