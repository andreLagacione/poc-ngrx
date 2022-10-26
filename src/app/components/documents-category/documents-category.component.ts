import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentsCategoryService } from './services/documents-category.service';

@Component({
  selector: 'app-main-documents',
  templateUrl: './documents-category.component.html',
  styleUrls: ['./documents-category.component.scss'],
})
export class DocumentsCategoryComponent implements OnInit {

  constructor(
    private documentsCategoryService: DocumentsCategoryService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    
  }

  getCategories() {
    
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
