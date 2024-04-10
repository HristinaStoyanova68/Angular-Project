import { Component } from '@angular/core';
// import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
  // errorMessage: string | null = null;

  // constructor(private errorService: ErrorService) {}

  // ngOnInit(): void {
  //   this.errorService.apiError$.subscribe((err: any) => {
  //     this.errorMessage = err?.error?.message || 'Unknown error occurred!';
  //     console.log(err);
  //   })
  // }
}
