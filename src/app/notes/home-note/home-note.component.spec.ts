import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNoteComponent } from './home-note.component';

describe('HomeNoteComponent', () => {
  let component: HomeNoteComponent;
  let fixture: ComponentFixture<HomeNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
