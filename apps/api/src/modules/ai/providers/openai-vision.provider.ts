import { VisionModelProvider } from '../vision-provider.interface.js';
import { VisionEnrichmentResult } from '../../../types/document.types.js';

export class OpenAIVisionProvider implements VisionModelProvider {
  async enrich(text: string): Promise<VisionEnrichmentResult> {
    return {
      summary: `Stubbed enrichment summary for text length ${text.length}`,
      tags: ['receipt', 'invoice']
    };
  }
}
