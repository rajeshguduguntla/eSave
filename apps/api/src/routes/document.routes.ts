import { Router } from 'express';
import { DocumentService } from '../modules/documents/document.service.js';
import { DocumentUploadRequest } from '../types/document.types.js';

const router = Router();
const documentService = new DocumentService();

router.post('/process', async (req, res, next) => {
  try {
    const payload = req.body as DocumentUploadRequest;
    const result = await documentService.processUpload(payload);

    res.status(200).json({
      status: 'ok',
      data: result
    });
  } catch (error) {
    next(error);
  }
});

export default router;
