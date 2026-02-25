# 🌿 GreenSpace

Welcome to **GreenSpace**, a clean, minimalist, and high-performance web template built with Next.js. This project features a soothing **Sage & Mint Green** aesthetic, designed for clarity and a calm user experience.
### 🔗 [Live Demo: greenspace-beige.vercel.app](https://greenspace-beige.vercel.app/)

## Key Features

* **Soothing Aesthetics**: A consistent light-green theme using custom CSS Modules.
* **Dynamic FAQ Section**: Interactive accordion-style FAQ with smooth transitions and a question submission area.
* **SEO Optimized**: Leveraging Next.js App Router metadata and image optimization.
* **Integrated AI Assistant**: A persistent floating AI assistant powered by Google Gemini 3 flash, providing real-time support.
* **Firebase Authentication**: Secure user sign-in via Google OAuth for a personalized experience.
* **Cloud Persistence**: Real-time chat history saving using Firebase Firestore, ensuring data persists across sessions.
* **Secure Architecture**: Implemented environment variable protection and Firestore Security Rules to safeguard user data.

## Tech Stack

* **Framework**: [Next.js](https://nextjs.org/) (App Router)
* **Language**: JavaScript / React
* **Styling**: CSS Modules (Standard CSS)
* **Images**: Unsplash via `next/image`

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
```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
# ... (and other Firebase fields)
```
