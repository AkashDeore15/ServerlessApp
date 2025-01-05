import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesDisplayComponent } from './articles-display.component';

describe('ArticlesDisplayComponent', () => {
  let component: ArticlesDisplayComponent;
  let fixture: ComponentFixture<ArticlesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
