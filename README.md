# 🧠 MeshRoute AI - Microservices Backend

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

The highly scalable, distributed backend infrastructure for **MeshRoute AI**. Architected using Docker on AWS EC2, this system utilizes a microservices approach to handle AI routing, advanced Retrieval-Augmented Generation (RAG), and secure subscription billing.

---

## 🏗️ Microservices Architecture

This backend is split into isolated services for high availability and targeted scaling:
* **API Gateway:** Centralized routing and request validation.
* **Auth Service:** Secure user verification and token management.
* **Agent Service:** Intelligent AI routing engine utilizing Groq, Gemini, and OpenRouter APIs.
* **Chat Service:** Distributed chat storage managed via MongoDB and cached with Redis.
* **Billing Service:** Secure, credit-based subscription management via Razorpay.

## ✨ Key Features

* **Advanced RAG Capabilities:** Integrates Qdrant Vector DB and Filebase S3 for highly accurate context retrieval.
* **Optimized Data Flow:** Redis caching implemented to dramatically reduce data retrieval latency.
* **Containerized Deployment:** Fully dockerized environments ensuring parity between development and AWS EC2 production.

## 🛠️ Tech Stack

* **Runtime & Framework:** Node.js, Express.js
* **Database & Caching:** MongoDB, Redis, Qdrant Vector DB
* **AI & Integrations:** Groq API, Gemini API, OpenRouter, Razorpay
* **DevOps:** Docker, AWS (EC2)

## 🚀 Getting Started

1. Clone the repository:
git clone https://github.com/vanshjain137/meshrouteai-backend.git

2. Navigate into the directory:
cd meshrouteai-backend

3. Create a .env file in the root directory (refer to .env.example for required API keys, DB URIs, and Razorpay secrets).

4. Build and start the microservices using Docker Compose:
docker-compose up --build

5. The API Gateway will now be accessible locally.

## 🔗 Links
* **Frontend Repository:** https://github.com/vanshjain137/meshrouteai-frontend
