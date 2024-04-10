import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  errorMessage: string | null = null;

  constructor(private errorService: ErrorService) {}
  ngOnInit(): void {
    this.errorService.apiError$.subscribe((err: any) => {
      this.errorMessage = err?.error?.message || '';
      console.log(err);

      setTimeout(() => {
        this.errorMessage = null;
      }, 3000);
    });
  }
}
