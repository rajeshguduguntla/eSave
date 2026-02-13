import { OCRExtractionResult } from '../../types/document.types.js';

export interface OCRProvider {
  extract(objectUrl: string): Promise<OCRExtractionResult>;
}
