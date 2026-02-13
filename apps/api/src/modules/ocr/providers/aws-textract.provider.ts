import { OCRProvider } from '../ocr-provider.interface.js';
import { OCRExtractionResult } from '../../../types/document.types.js';

export class AwsTextractProvider implements OCRProvider {
  async extract(objectUrl: string): Promise<OCRExtractionResult> {
    return {
      text: `[aws-textract] extracted text for ${objectUrl}`,
      fields: {},
      confidence: 0.88
    };
  }
}
