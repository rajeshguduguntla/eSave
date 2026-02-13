import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  ProcessDocumentRequest,
  ProcessDocumentResponse
} from '../../shared/models/document.model';

@Injectable({ providedIn: 'root' })
export class DocumentApiService {
  constructor(private readonly http: HttpClient) {}

  processDocument(payload: ProcessDocumentRequest): Observable<ProcessDocumentResponse> {
    return this.http.post<ProcessDocumentResponse>(
      `${environment.apiBaseUrl}/documents/process`,
      payload
    );
  }
}
