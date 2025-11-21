# Next.js Project Setup and Basics

This repository **alx-project-0x02-setup** provides the scaffolding and progressive implementation of a modern web application using **Next.js**, **TypeScript**, and **Tailwind CSS**. It demonstrates how to build reusable components, implement routing, and integrate API data fetching with type safety and responsive design.

## 🎯 Objectives

The goal of this repository is to establish a baseline project environment that demonstrates:

- How to scaffold a Next.js application with TypeScript and Tailwind CSS.
- Project organization for components, pages, and styles.
- Integration of ESLint and Prettier for code quality and formatting.
- Building reusable UI components (Card, Button, PostCard, UserCard).
- Implementing navigation and layout with a shared Header.
- Fetching and rendering data from external APIs (JSONPlaceholder).
- Combining **static generation** (`getStaticProps`) with **client-side fetching** (`useEffect`) for hybrid data strategies.

## 📦 Features Implemented

- **Next.js** for server-side rendering, static generation, and routing.
- **TypeScript** for type safety and developer productivity.
- **Tailwind CSS** for utility-first styling and responsive design.
- **ESLint + Prettier** for consistent code quality and formatting.
- **Reusable Components**:
  - `Card` for displaying generic content.
  - `PostModal` for creating posts dynamically.
  - `Button` with configurable size and shape.
  - `Header` for navigation across `/home`, `/about`, `/posts`, `/users`.
  - `PostCard` for rendering posts fetched from JSONPlaceholder.
  - `UserCard` for rendering user details with hybrid data fetching.
- **Hybrid Data Fetching**:
  - `getStaticProps` for SEO-friendly pre-rendered content.
  - `useEffect` for refreshing data client-side after hydration.

## 🗂️ Project Structure

```folder
alx-project-0x02-setup/
├── pages/                # Next.js pages (routes: home, about, posts, users)
├── components/
│   ├── common/           # Reusable UI components (Card, Button, PostModal, PostCard, UserCard)
│   └── layout/           # Layout components (Header)
├── public/               # Static assets
├── styles/               # Global styles and Tailwind setup
├── interfaces/           # TypeScript interfaces (CardProps, ButtonProps, PostProps, UserProps)
├── README.md             # Project documentation
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/D0nG4667/alx-project-0x02-setup.git
cd alx-project-0x02-setup
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 📖 Recent Milestones

- **Modal Component**: Implemented `PostModal` for adding posts dynamically on `/home`.
- **Button Component**: Created reusable `Button` with size and shape props, used on `/about`.
- **Navigation & Layout**: Built `Header` with links to `/home`, `/about`, `/posts`, `/users`.
- **PostCard Component**: Fetched posts from JSONPlaceholder and displayed them on `/posts`.
- **UserCard Component**: Fetched users from JSONPlaceholder and displayed them on `/users`.
- **Hybrid Data Fetching**: Combined `getStaticProps` and `useEffect` for SEO + dynamic updates on `/users`.

---

## 👤 Author

- GitHub: [@D0nG4667](https://github.com/D0nG4667)  
- LinkedIn: [Gabriel Okundaye](https://www.linkedin.com/in/dr-gabriel-okundaye)

---

## 🌟 Show Your Support

If this project helps you get started with Next.js, give it a ⭐️ to support future open-source work.
