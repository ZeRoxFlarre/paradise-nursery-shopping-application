🌿 Paradise Nursery Shopping Application

A modern, responsive e-commerce front-end built with React + Vite, featuring a dynamic shopping cart, animated UI, and production-ready deployment.

🔗 Live Demo: https://lighthearted-piroshki-0585eb.netlify.app/

📦 Repository: https://github.com/ZeRoxFlarre/paradise-nursery-shopping-application

🚀 Overview

Paradise Nursery is a fully responsive plant shopping application that allows users to:

Browse categorized plants

Add items to a shopping cart

Adjust quantities

Remove items

View total cost dynamically

Persist cart state using localStorage

The application was built with a strong focus on clean UI, smooth animations, and scalable state management.

🛠️ Built With

⚛️ React 19

⚡ Vite

🧭 React Router

🎯 Context API (Global State Management)

🎨 Custom CSS Animations

☁️ Netlify (Deployment)

✨ Features

Responsive landing page with parallax and animated scroll hint

Categorized product listing

Animated add-to-cart interactions

Dynamic cart badge with bounce effect

Fully functional cart page (increase, decrease, remove)

Persistent cart using localStorage

Production-ready routing configuration for Netlify

📂 Project Structure
src/
│
├── components/
│   ├── Navbar.jsx
│   └── PlantCard.jsx
│
├── context/
│   └── CartContext.jsx
│
├── pages/
│   ├── LandingPage.jsx
│   ├── PlantsPage.jsx
│   └── CartPage.jsx
│
├── styles/
│
├── data/
│
└── main.jsx
🧠 Key Concepts Implemented

Global state management using React Context

Memoized total calculations with useMemo

Route-based rendering using React Router

Case-sensitive path handling for production environments

Deployment configuration with Netlify redirects

📦 Installation

To run locally:

git clone https://github.com/ZeRoxFlarre/paradise-nursery-shopping-application
cd TUREPO
npm install
npm run dev

To build for production:

npm run build
🌐 Deployment

This project is deployed using Netlify with proper routing configuration to support React Router.

Redirect configuration included via:

netlify.toml
👨‍💻 Author

Miguel A. Quiñones Aleman
Frontend Developer
Made with ❤️ using React

📈 Future Improvements

Product filtering and search

Dark mode toggle

Backend integration (Node / Express)

Payment integration (Stripe)

Admin product management

⭐ If you like this project

Give it a star on GitHub!
