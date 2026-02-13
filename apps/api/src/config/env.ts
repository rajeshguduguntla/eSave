import dotenv from 'dotenv';

dotenv.config();

export const env = {
  port: Number(process.env.PORT ?? 4000),
  nodeEnv: process.env.NODE_ENV ?? 'development',
  databaseUrl: process.env.DATABASE_URL ?? '',
  s3Region: process.env.S3_REGION ?? 'us-east-1',
  s3Bucket: process.env.S3_BUCKET ?? '',
  s3Endpoint: process.env.S3_ENDPOINT ?? '',
  s3AccessKey: process.env.S3_ACCESS_KEY ?? '',
  s3SecretKey: process.env.S3_SECRET_KEY ?? '',
  googleCredentialsPath: process.env.GOOGLE_APPLICATION_CREDENTIALS ?? '',
  awsRegion: process.env.AWS_REGION ?? 'us-east-1',
  azureFormRecognizerEndpoint: process.env.AZURE_FORM_RECOGNIZER_ENDPOINT ?? '',
  azureFormRecognizerKey: process.env.AZURE_FORM_RECOGNIZER_KEY ?? '',
  openAiApiKey: process.env.OPENAI_API_KEY ?? '',
  openAiVisionModel: process.env.OPENAI_VISION_MODEL ?? 'gpt-4.1-mini'
};
