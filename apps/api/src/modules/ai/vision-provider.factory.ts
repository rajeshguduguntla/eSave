import { VisionProviderName } from '../../types/document.types.js';
import { OpenAIVisionProvider } from './providers/openai-vision.provider.js';
import { VisionModelProvider } from './vision-provider.interface.js';

export function createVisionModelProvider(_provider: VisionProviderName): VisionModelProvider {
  return new OpenAIVisionProvider();
}
