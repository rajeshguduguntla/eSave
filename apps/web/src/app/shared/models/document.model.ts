export type OCRProviderName =
  | 'google-vision'
  | 'aws-textract'
  | 'azure-form-recognizer';

export interface ProcessDocumentRequest {
  filename: string;
  mimeType: string;
  objectKey: string;
  provider: OCRProviderName;
}

export interface ProcessDocumentResponse {
  status: string;
  data: {
    ocr: {
      text: string;
      fields: Record<string, string>;
      confidence?: number;
    };
    enrichment: {
      summary: string;
      tags: string[];
    };
  };
}
