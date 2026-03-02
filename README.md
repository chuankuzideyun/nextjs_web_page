# 🌿 GreenSpace

Welcome to **GreenSpace**, a clean, minimalist, and high-performance web template built with Next.js. This project features a soothing **Sage & Mint Green** aesthetic, designed for clarity and a calm user experience.
### 🔗 [Live Demo: greenspace-beige.vercel.app](https://greenspace-beige.vercel.app/)

## Key Features

* **Soothing Aesthetics**: A consistent light-green theme using custom CSS Modules.
* **SEO Optimized**: Leveraging Next.js App Router metadata and image optimization.
* **Integrated AI Assistant**: A persistent floating AI assistant powered by Google Gemini, providing real-time support.
* **Firebase Authentication**: Secure user sign-in via Google OAuth for a personalized experience.
* **Cloud Persistence**: Real-time chat history saving using Firebase Firestore, ensuring data persists across sessions.
* **CI/CD Pipeline**: Engineered GitHub Actions pipeline for automated Linting, dependency auditing, and production-ready builds.
* **Secure Architecture**:
1. SAST: Automated code vulnerability and secret scanning using Snyk.

2. DAST: Runtime security auditing with OWASP ZAP to mitigate XSS and injection risks.

3. Access Control: Strict Firestore Security Rules and Environment Variable isolation to safeguard user data.

## Tech Stack

* **Language**: JavaScript / React
* **Images**: Unsplash via `next/image`
* **Frontend**: Next.js (App Router), React, CSS Modules
* **AI Engine**: Google Gemini AI API
* **Backend & Security**: Firebase (Auth & Firestore), Snyk, OWASP ZAP
* **Deployment**: Vercel (CI/CD)

## Getting Started

Follow these steps to get the project running locally:

### 1. Clone the repository
```bash
git clone [https://github.com/chuankuzideyun/nextjs_web_page.git](https://github.com/chuankuzideyun/nextjs_web_page.git)
cd nextjs_web_page
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

## Project Structure
```bash
├── app/
│   ├── about/          # About Us page
│   ├── contact/        # Contact form page
│   ├── faq/            # FAQ with Accordion
│   ├── layout.js       # Root layout (Navigation + Children)
│   ├── page.js         # Home Hero page
│   └── globals.css     # Global resets
├── components/         # Reusable UI components (FAQItem, etc.)
└── public/             # Static assets (SVGs, logos)
```

## Environment Variables Setup

# Google Gemini
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_key

# Firebase
```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
# ... (and other Firebase fields)
```
# Resend for sending email
RESEND_API_KEY=your_resend_key

# snyk for SAST
SNYK_TOKEN=your_snyk_key
