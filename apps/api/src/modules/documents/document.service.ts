import { createVisionModelProvider } from '../ai/vision-provider.factory.js';
import { createOCRProvider } from '../ocr/ocr-provider.factory.js';
import { ObjectStorageService } from '../storage/object-storage.service.js';
import {
  DocumentUploadRequest,
  OCRExtractionResult,
  VisionEnrichmentResult
} from '../../types/document.types.js';

export interface ProcessedDocument {
  ocr: OCRExtractionResult;
  enrichment: VisionEnrichmentResult;
}

export class DocumentService {
  private readonly storageService = new ObjectStorageService();

  async processUpload(payload: DocumentUploadRequest): Promise<ProcessedDocument> {
    const objectUrl = this.storageService.getPublicUrl(payload.objectKey);
    const ocrProvider = createOCRProvider(payload.provider);
    const ocr = await ocrProvider.extract(objectUrl);

    const visionProvider = createVisionModelProvider('openai-vision');
    const enrichment = await visionProvider.enrich(ocr.text);

    return { ocr, enrichment };
  }
}
