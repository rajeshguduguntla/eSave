import { env } from '../../config/env.js';

export class ObjectStorageService {
  getPublicUrl(objectKey: string): string {
    const base = env.s3Endpoint || 'https://s3.amazonaws.com';
    return `${base}/${env.s3Bucket}/${objectKey}`;
  }

  async upload(_objectKey: string, _buffer: Buffer): Promise<void> {
    // TODO: Implement via AWS SDK v3 S3Client (or GCP adapter).
  }
}
