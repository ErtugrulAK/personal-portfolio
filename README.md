# 🚀 Task Manager Pro - Full-Stack Web Application

A modern, responsive full-stack task management application featuring secure user authentication, real-time Firestore database synchronization, serverless Firebase Cloud Functions, and dynamic UI animations with Framer Motion.

---

## 🌟 Key Features

- 🔐 **User Authentication**: Secure signup, login, and session persistence powered by Firebase Auth.
- 📋 **Real-Time Task Management**: Interactive CRUD operations (Create, Read, Update, Delete) synced in real-time with Cloud Firestore.
- ⚙️ **Automated Serverless Workflows**: Firebase Cloud Functions automatically generate a customizable welcome task upon user account creation.
- 🎨 **Fluid UI & Animations**: Page transition effects and dynamic list animations powered by React Router and Framer Motion.
- 🎯 **Task Filtering**: Real-time task filtering by status (`All`, `Pending`, `Completed`).
- 🛡️ **User Data Isolation**: Granular Firestore Security Rules ensuring users can strictly read/write only their own document data.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Core** | React 19, JavaScript (ES6+) |
| **Styling & Motion** | Custom CSS3, Framer Motion, React Icons |
| **Routing** | React Router v7 |
| **Backend & Cloud Services** | Firebase Authentication, Cloud Firestore, Firebase Cloud Functions |
| **Runtime & Hosting** | Node.js (v18+), Firebase Hosting |

---

## 🏗️ Project Architecture

```
personal-portfolio/
└── task-manager-pro/
    ├── client/               # React Frontend Application
    │   ├── public/           # Static assets & HTML template
    │   └── src/
    │       ├── components/   # Modular UI components (TaskForm, TaskItem, TaskList)
    │       ├── context/      # React Authentication Context (AuthContext)
    │       ├── pages/        # Route pages (HomePage, LoginPage, SignupPage)
    │       ├── firebase.js   # SDK initialization & service exports
    │       └── App.js        # Protected routes & Framer Motion transitions
    ├── functions/            # Firebase Cloud Functions (Serverless Backend)
    │   └── index.js          # User creation trigger (addWelcomeTask)
    ├── firestore.rules       # Security rules for document-level user isolation
    ├── firebase.json         # Firebase hosting & function deployment config
    └── DEPLOYMENT.md         # Step-by-step deployment guide
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/)
- [Firebase CLI](https://firebase.google.com/docs/cli) (`npm install -g firebase-tools`)

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ErtugrulAK/personal-portfolio.git
   cd personal-portfolio/task-manager-pro
   ```

2. **Install Frontend Dependencies**:
   ```bash
   cd client
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local` inside `client/` and populate your Firebase project credentials:
   ```bash
   cp .env.example .env.local
   ```

4. **Run Locally**:
   ```bash
   npm start
   ```
   Open `http://localhost:3000` to view the application in your browser.

---

## 📖 Deployment

For detailed deployment instructions for Firebase Hosting and Cloud Functions, refer to the [Deployment Guide](task-manager-pro/DEPLOYMENT.md).

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
