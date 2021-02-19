import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsIssueComponent } from './comments-issue.component';

describe('CommentsIssueComponent', () => {
  let component: CommentsIssueComponent;
  let fixture: ComponentFixture<CommentsIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
