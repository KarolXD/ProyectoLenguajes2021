import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIssueComponent } from './lista-issue.component';

describe('ListaIssueComponent', () => {
  let component: ListaIssueComponent;
  let fixture: ComponentFixture<ListaIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
