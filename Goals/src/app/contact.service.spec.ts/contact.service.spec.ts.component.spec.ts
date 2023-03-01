import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactServiceSpecTsComponent } from './contact.service.spec.ts.component';

describe('ContactServiceSpecTsComponent', () => {
  let component: ContactServiceSpecTsComponent;
  let fixture: ComponentFixture<ContactServiceSpecTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactServiceSpecTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactServiceSpecTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
