export type OCRProviderName =
  | 'google-vision'
  | 'aws-textract'
  | 'azure-form-recognizer';

export type VisionProviderName = 'openai-vision';

export interface DocumentUploadRequest {
  filename: string;
  mimeType: string;
  objectKey: string;
  provider: OCRProviderName;
}

export interface OCRExtractionResult {
  text: string;
  fields: Record<string, string>;
  confidence?: number;
}

export interface VisionEnrichmentResult {
  summary: string;
  tags: string[];
}
