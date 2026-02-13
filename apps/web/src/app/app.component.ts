import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocumentApiService } from './core/services/document-api.service';
import { OCRProviderName, ProcessDocumentResponse } from './shared/models/document.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly providers: OCRProviderName[] = [
    'google-vision',
    'aws-textract',
    'azure-form-recognizer'
  ];

  selectedProvider: OCRProviderName = 'google-vision';
  lastResponse?: ProcessDocumentResponse;

  constructor(private readonly documentApiService: DocumentApiService) {}

  runDemo(): void {
    this.documentApiService
      .processDocument({
        filename: 'demo-invoice.png',
        mimeType: 'image/png',
        objectKey: 'demo/demo-invoice.png',
        provider: this.selectedProvider
      })
      .subscribe((response) => {
        this.lastResponse = response;
      });
  }
}
