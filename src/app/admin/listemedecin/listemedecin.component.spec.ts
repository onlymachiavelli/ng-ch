import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemedecinComponent } from './listemedecin.component';

describe('ListemedecinComponent', () => {
  let component: ListemedecinComponent;
  let fixture: ComponentFixture<ListemedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListemedecinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListemedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
