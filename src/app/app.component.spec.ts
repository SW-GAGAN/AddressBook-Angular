import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======
import { RouterTestingModule } from '@angular/router/testing';
>>>>>>> c70297a54ee7a657252f91b61ccbc7a8c2f8f3b5
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
=======
      imports: [
        RouterTestingModule
      ],
>>>>>>> c70297a54ee7a657252f91b61ccbc7a8c2f8f3b5
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'addressbook-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('addressbook-frontend');
=======
  it(`should have as title 'Address-book'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Address-book');
>>>>>>> c70297a54ee7a657252f91b61ccbc7a8c2f8f3b5
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('.content span')?.textContent).toContain('addressbook-frontend app is running!');
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('Address-book app is running!');
>>>>>>> c70297a54ee7a657252f91b61ccbc7a8c2f8f3b5
  });
});
