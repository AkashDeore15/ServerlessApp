import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles-display',
  templateUrl: './articles-display.component.html',
  styleUrls: ['./articles-display.component.css']
})
export class ArticlesDisplayComponent implements OnInit {

  articles:any;
  constructor(private articleService:ArticlesService) {
    
    this.articleService.getAllArticles().subscribe((articledata)=>{
      this.articles = articledata;
      //console.log(articledata);
   })
  }

  ngOnInit(): void {
  }

 
  
}
