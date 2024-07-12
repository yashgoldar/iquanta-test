/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Task-1Component } from './task-1.component';

describe('Task-1Component', () => {
  let component: Task-1Component;
  let fixture: ComponentFixture<Task-1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task-1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task-1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
