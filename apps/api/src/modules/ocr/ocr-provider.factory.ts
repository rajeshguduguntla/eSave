import { OCRProviderName } from '../../types/document.types.js';
import { OCRProvider } from './ocr-provider.interface.js';
import { AwsTextractProvider } from './providers/aws-textract.provider.js';
import { AzureFormRecognizerProvider } from './providers/azure-form-recognizer.provider.js';
import { GoogleVisionProvider } from './providers/google-vision.provider.js';

export function createOCRProvider(provider: OCRProviderName): OCRProvider {
  switch (provider) {
    case 'google-vision':
      return new GoogleVisionProvider();
    case 'aws-textract':
      return new AwsTextractProvider();
    case 'azure-form-recognizer':
      return new AzureFormRecognizerProvider();
    default:
      throw new Error(`Unsupported OCR provider: ${provider}`);
  }
}
