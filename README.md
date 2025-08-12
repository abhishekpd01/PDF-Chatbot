# PDF Chatbot

## Description
PDF Chatbot – Built a Retrieval-Augmented Generation (RAG) system for answering queries from PDF content with high accuracy. Integrated LangChain with OpenAI and Google Vertex AI for natural language understanding, used Qdrant DB for vector search, and implemented Redis + BullMQ for scalable background processing. Added secure user authentication via Clerk and optimized performance with caching and task decoupling.


## 🌐 Live Demo
- 🔗 **[Click here to try the PDF Chatbot](https://pdf-chatbot-client-three.vercel.app/)**
- ⚠️ **Note: The server is hosted on Render.com free tier, so please wait 40–50 seconds after uploading your first file for the server to spin up.**

---

## 🚀 Features

- **RAG Pipeline** – Enables accurate responses using context from uploaded PDFs.
- **Multi-LLM Integration** – Utilizes **LangChain**, **OpenAI**, and **Google Vertex AI** for enhanced natural language understanding.
- **Scalable Backend** – Built with **Redis** and **BullMQ** for efficient job queue management.
- **Vector Search** – Implements **Qdrant DB** for semantic search and quick retrieval of relevant content.
- **Secure Authentication** – Uses **Clerk** for user authentication and session management.
- **Performance Optimized** – Background job processing & caching with **Redis** for faster responses.

---

## 🛠️ Tech Stack

**Frontend:**
- [Next.js](https://nextjs.org/) – React framework for building the frontend interface.

**Backend & Infrastructure:**
- [Node.js](https://nodejs.org/) – Backend server.
- [Redis](https://redis.io/) – In-memory data store for caching.
- [BullMQ](https://docs.bullmq.io/) – Job queue management.
- [Qdrant DB](https://qdrant.tech/) – Vector database for semantic search.
- [LangChain](https://www.langchain.com/) – LLM orchestration.
- [OpenAI API](https://platform.openai.com/) – Language model integration.
- [Google Vertex AI](https://cloud.google.com/vertex-ai) – Alternative LLM processing.

**Authentication:**
- [Clerk](https://clerk.com/) – Authentication and session management.

---

## 📂 Project Structure
### Client
```
📦client
 ┣ 📂app
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂ui
 ┃ ┃ ┣ 📜chat.jsx
 ┃ ┃ ┣ 📜dropdown-menu.jsx
 ┃ ┃ ┣ 📜theme-provider.jsx
 ┃ ┃ ┣ 📜toggle-theme.jsx
 ┃ ┃ ┗ 📜upload-file.jsx
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜freeup-resource.jsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.js
 ┃ ┗ 📜page.js
 ┣ 📂lib
 ┣ 📂public
 ┣ 📜.env
 ┣ 📜package-lock.json
 ┣ 📜package.json
```
 
### Server
```
📦server
 ┣ 📂config
 ┃ ┣ 📜ai-agent-465405-ccb3e8b3e185.json
 ┃ ┣ 📜openai.config.js
 ┃ ┗ 📜qdrantdb.config.js
 ┣ 📂controllers
 ┃ ┣ 📜chat.controller.js
 ┃ ┣ 📜file.controller.js
 ┃ ┗ 📜vectordb.controller.js
 ┣ 📂routes
 ┃ ┣ 📜chat.routes.js
 ┃ ┣ 📜file.routes.js
 ┃ ┗ 📜vectordb.routes.js
 ┣ 📂uploads
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜app.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜redis-connection.js
 ┗ 📜worker.js
```

---

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/pdf-chatbot.git
cd pdf-chatbot
```
2. Install dependencies
```
Client: npm install
Server: npm install
```
3. Set environment variables
   Create a .env file in the root directory and add:
```
QDRANT_URL=<url>
QDRANT_API_KEY=<key>

# OpenAI
GEMINI_API_KEY=<api-key>
BASE_URL="https://generativelanguage.googleapis.com/v1beta/openai/"

# Redis
HOST="redis-host-url"
REDIS_PORT=<port>
REDIS_PASSWORD=<password>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<> (inside client)
CLERK_SECRET_KEY=<> (inside client)
```
4. Run the development server
```
Server-> 1. npm run dev 2. npm run dev:worker
Client-> npm run dev
```

---

## 📌 Usage
1. Upload a PDF – The system ingests and processes it in the background.
2. Ask questions – The chatbot retrieves relevant content from the vector database.
3. Receive context-aware answers – Powered by LLMs and RAG.

---

## 🧠 How It Works
1. PDF Upload → Stored temporarily for processing.
2. Text Extraction → Extracts text from PDF.
3. Vector Embedding → Converts text into embeddings and stores in Qdrant.
4. Question Processing → Retrieves relevant chunks using semantic search.
5. LLM Query → Passes chunks to LLM for answer generation.
6. Response Delivery → Sends answer back to the user.

---

## 📈 Performance Optimizations
1. Decoupled PDF ingestion using BullMQ background jobs.
2. Cached frequent queries using Redis.
3. Batched vector inserts to reduce Qdrant API calls.

---

## 🔒 Security
1. All user sessions managed securely with Clerk.
2. API routes protected via authentication middleware.
