import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTsComponent } from './contact.ts.component';

describe('ContactTsComponent', () => {
  let component: ContactTsComponent;
  let fixture: ComponentFixture<ContactTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
