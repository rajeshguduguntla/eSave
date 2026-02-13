import { VisionEnrichmentResult } from '../../types/document.types.js';

export interface VisionModelProvider {
  enrich(text: string): Promise<VisionEnrichmentResult>;
}
