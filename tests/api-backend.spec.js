import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000';

test.describe('Backend API Automation Tests', () => {

  test('1. POST /upload/pdf - Should upload and index a PDF file', async ({ request }) => {
    const fixturePath = path.resolve(process.cwd(), 'tests', 'fixtures', 'sample.pdf');
    const fileBuffer = fs.readFileSync(fixturePath);

    const response = await request.post(`${BACKEND_URL}/upload/pdf`, {
      multipart: {
        pdf: {
          name: 'sample.pdf',
          mimeType: 'application/pdf',
          buffer: fileBuffer,
        },
        emailId: 'test.user@example.com',
      },
    });

    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('message');
  });

  test('2. GET /chat - Should return RAG answer and reference docs', async ({ request }) => {
    const userQuery = 'Summarize key skills';
    const response = await request.get(`${BACKEND_URL}/chat?message=${encodeURIComponent(userQuery)}`);

    // Gemini API free tier may return 429 when rate limited during test suites
    expect([200, 429]).toContain(response.status());

    if (response.status() === 200) {
      const data = await response.json();
      expect(data).toHaveProperty('message');
      expect(data).toHaveProperty('docs');
      expect(typeof data.message).toBe('string');
      expect(Array.isArray(data.docs)).toBeTruthy();
    }
  });

  test('3. GET /chat - Should handle missing query parameter gracefully', async ({ request }) => {
    const response = await request.get(`${BACKEND_URL}/chat`);
    expect(response.status()).toBe(400);

    const data = await response.json();
    expect(data).toHaveProperty('error');
  });

});
