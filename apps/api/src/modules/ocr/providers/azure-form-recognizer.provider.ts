import { OCRProvider } from '../ocr-provider.interface.js';
import { OCRExtractionResult } from '../../../types/document.types.js';

export class AzureFormRecognizerProvider implements OCRProvider {
  async extract(objectUrl: string): Promise<OCRExtractionResult> {
    return {
      text: `[azure-form-recognizer] extracted text for ${objectUrl}`,
      fields: {},
      confidence: 0.87
    };
  }
}
