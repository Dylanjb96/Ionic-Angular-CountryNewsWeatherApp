import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [
    CommonModule, // For Angular directives like *ngIf and *ngFor
    FormsModule,  // For template-driven forms
    IonicModule,  // Import IonicModule for Ionic components
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this to allow custom Ionic components
})
export class NewsPage implements OnInit {
  countryName: string = '';
  countryCode: string = '';
  articles: any[] = [];
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['country'] && params['countryName']) {
        this.countryCode = params['country'];
        this.countryName = params['countryName'];
        console.log('Country code received:', this.countryCode);
        console.log('Country name received:', this.countryName);
        this.fetchNews();
      }
    });
  }

  fetchNews() {
    console.log('Fetching news from:', this.countryCode);
    this.isLoading = true;
    this.newsService.getNewsDataByCountry(this.countryCode).subscribe(
      (data) => {
        console.log('News API Response:', data);
        this.articles = data.results || [];
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching news:', error);
        this.isLoading = false;
      }
    );
  }
}  
