import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactServiceTsComponent } from './contact.service.ts.component';

describe('ContactServiceTsComponent', () => {
  let component: ContactServiceTsComponent;
  let fixture: ComponentFixture<ContactServiceTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactServiceTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactServiceTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
