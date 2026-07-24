# 🧪 Playwright Automation Testing Suite (UI & Backend)

This project features a complete **End-to-End (E2E) and API Automation Testing Suite** built using **[Playwright](https://playwright.dev/)**. It validates both the **Next.js Frontend UI** and the **Express/LangChain/Qdrant RAG Backend API**.

---

## 📁 Test Architecture & Directory Structure

```
PDF-RAG/
├── playwright.config.js       # Playwright runner configuration (Chromium, Mobile, Base URLs)
├── package.json               # Root scripts for executing automation tests
└── tests/
    ├── fixtures/
    │   └── sample.pdf         # Sample PDF fixture used for binary upload API testing
    ├── api-backend.spec.js    # Backend API Automation Tests (POST /upload/pdf, GET /chat)
    └── ui-frontend.spec.js    # Frontend E2E UI Automation Tests (Mobile view, Thinking animation)
```

---

## 🚀 How to Run the Automation Tests Locally

### 1. Prerequisites
Ensure both your **Server** (port `8000`) and **Client** (port `3000`) are running:

```bash
# Terminal 1: Start Backend Server
cd server
npm run dev

# Terminal 2: Start Next.js Frontend
cd client
npm run dev
```

### 2. Execute Test Commands

From the root project directory (`PDF-RAG/`):

```bash
# Run all tests headlessly in terminal
npm test

# Run tests with Playwright Interactive UI Mode (Visual Debugger)
npx playwright test --ui

# Run only Backend API tests
npx playwright test tests/api-backend.spec.js

# Run only Frontend UI tests
npx playwright test tests/ui-frontend.spec.js

# View HTML Test Results Report
npm run test:report
```

---

## 🧪 Test Coverage Breakdown

### 🔹 1. Backend API Test Suite (`tests/api-backend.spec.js`)
- **PDF Upload Endpoint (`POST /upload/pdf`)**:
  - Sends a multipart PDF buffer fixture to the Express backend.
  - Asserts HTTP `200 OK` status and verifies file ingestion response.
- **RAG Query Endpoint (`GET /chat?message=...`)**:
  - Sends query strings to the vector search & LLM completion pipeline.
  - Asserts HTTP `200 OK` status code.
  - Validates JSON payload schema (`message` string length > 0, `docs` array length).
- **API Error Validation**:
  - Validates missing parameter behavior (`400 Bad Request`).

### 🔹 2. Frontend UI Test Suite (`tests/ui-frontend.spec.js`)
- **Homepage Layout & Component Render**:
  - Verifies brand headers, main prompt heading, and PDF upload component visibility.
- **Interactive Chat & Thinking State**:
  - Types user queries into the chat bar and triggers `Enter`.
  - Asserts that the animated **"Searching vector database & thinking..."** indicator appears dynamically.
- **Mobile View & Navigation Drawer**:
  - Simulates a mobile device viewport (`Pixel 5`, 375x812 resolution).
  - Asserts mobile top bar branding and verifies slide-in drawer menu toggle for mobile PDF uploading.

---

## 💼 Resume & Interview Talking Points

Add these bullet points to your resume under your **PDF-RAG Assistant** project:

> - **Full-Stack Automation Testing**: Architected a Playwright automation testing suite covering end-to-end user flows (Next.js) and REST API contracts (Express & Qdrant RAG pipeline).
> - **API & E2E Test Suite**: Engineered automated tests validating PDF vector ingestion (`POST /upload/pdf`), context retrieval (`GET /chat`), and status handling.
> - **UI/UX & Mobile Verification**: Validated responsive mobile viewports (`Pixel 5`), drawer menu interactions, markdown rendering, and real-time async thinking state animations.
> - **CI/CD & Quality Assurance**: Configured `playwright.config.js` with parallel worker execution, trace collection, HTML reporting, and retry capabilities.
