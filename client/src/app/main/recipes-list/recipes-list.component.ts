import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  //   collectionName: string | undefined;
  isLoading: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    const currentUrl = this.router.url;
    const collectionName: string | undefined =
      this.extractCollection(currentUrl);

    if (collectionName !== undefined) {
      this.apiService
        .getRecipesForCollectionName(collectionName)
        .subscribe((recipes) => {
            console.log(recipes);
            
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        });
    }

    console.log('done');
  }

  private extractCollection(url: string): string | undefined {
    const segments = url.split('/');
    const result = segments.pop();
    return result;
  }
}
