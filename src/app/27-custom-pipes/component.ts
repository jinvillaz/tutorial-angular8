import { Component, ViewEncapsulation, OnInit } from '@angular/core';

interface File {
  name: string;
  size: number;
  type: string;
}

@Component({
  selector: 'app-27',
  template: `
    <div class="main-container">
      <div *ngFor="let file of files">
        <p>{{ file.name }}</p>
        <p>{{ file.size | filesize }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  files: File[];
  ngOnInit(): void {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' }
    ];
  }
}
