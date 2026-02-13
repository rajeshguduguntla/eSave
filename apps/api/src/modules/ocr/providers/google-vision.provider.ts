import { OCRProvider } from '../ocr-provider.interface.js';
import { OCRExtractionResult } from '../../../types/document.types.js';

export class GoogleVisionProvider implements OCRProvider {
  async extract(objectUrl: string): Promise<OCRExtractionResult> {
    return {
      text: `[google-vision] extracted text for ${objectUrl}`,
      fields: {},
      confidence: 0.9
    };
  }
}
