# 🚁 MediDrone

> **Medicines Delivered by Drones** — Experience the fastest and safest medicine delivery with MediDrone.

MediDrone is a web-based medicine delivery platform where users can browse medicines, add them to a cart, and place orders — with the concept of drone-based doorstep delivery. It features Firebase authentication, an admin panel for order management, and a clean, responsive UI.

---

## ✨ Features

- 🛒 **Medicine Store** — Browse and search 20+ medicines across categories
- 🔐 **User Authentication** — Sign up, log in, and log out via Firebase Auth
- 📦 **Cart & Checkout** — Add medicines to cart and place orders with delivery details
- 👤 **User Dashboard** — View profile, manage orders, update settings
- 🛠️ **Admin Panel** — Admin login, view and manage all orders, update order status
- 🚁 **Animated Drone UI** — Flying drone SVG animation on the homepage
- 📱 **Responsive Design** — Works across desktop and mobile devices

---

## 📁 Project Structure

```
MediDrone/
├── index.html          # Home page — product listing with search
├── product.html        # Individual product detail page
├── cart.html           # Shopping cart
├── checkout.html       # Checkout with address & payment
├── login.html          # User login
├── signup.html         # User registration
├── dashboard.html      # User dashboard (orders, profile link)
├── profile.html        # User profile management
├── orders.html         # User order history
├── settings.html       # Account settings
├── admin-login.html    # Admin login page
├── admin.html          # Admin panel — manage all orders
├── css/
│   └── style.css       # Global stylesheet
├── js/
│   ├── firebase.js     # Firebase initialization & exports
│   └── products.js     # Product catalog data
└── images/             # Product images
```

---

## 🛠️ Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Frontend     | HTML5, CSS3, Vanilla JavaScript     |
| Icons        | Font Awesome 6                      |
| Auth         | Firebase Authentication             |
| Database     | Firebase Firestore                  |
| Analytics    | Firebase Analytics                  |
| Hosting      | Static (open `index.html` in browser or deploy to Firebase Hosting) |

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge)
- Internet connection (Firebase SDK is loaded via CDN)

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Raghunandansaw/MediDrone.git
   cd MediDrone
   ```

2. **Open in browser**

   Simply open `index.html` in your browser:
   ```bash
   # On Windows
   start index.html

   # Or use a local dev server (recommended)
   npx serve .
   ```

   > ⚠️ Some Firebase features (auth, Firestore) require the page to be served over HTTP rather than opened directly as a `file://` URL. Use a local server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code or `npx serve`.

---

## 🔥 Firebase Setup

This project uses Firebase. The configuration is already included in [`js/firebase.js`](js/firebase.js).

If you want to use your own Firebase project:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** (Email/Password) and **Firestore Database**
4. Replace the config in `js/firebase.js` with your own:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

## 📦 Product Catalog

The product catalog is defined in [`js/products.js`](js/products.js) and includes 20 medicines across categories:

| Category              | Examples                              |
|-----------------------|---------------------------------------|
| Fever & Pain Relief   | Paracetamol 500mg, Ibuprofen 400mg    |
| Cold & Cough          | Cough Syrup                           |
| Allergy Relief        | Cetirizine 10mg, Loratadine 10mg      |
| Immunity & Vitamins   | Vitamin C 1000mg, Vitamin D3, Zinc    |
| Acidity & Reflux      | Omeprazole 20mg, Pantoprazole 40mg    |
| Bone Health           | Calcium + Vitamin D3                  |
| Diabetes Care         | Metformin 500mg                       |
| Blood Pressure        | Amlodipine 5mg, Losartan 50mg         |
| Cholesterol           | Atorvastatin 10mg                     |
| Heart Health          | Aspirin 75mg (EC)                     |
| Asthma & Wheeze       | Salbutamol Inhaler                    |
| Rehydration           | ORS (Oral Rehydration Salts)          |
| First Aid             | Antiseptic Cream                      |
| Antibiotics           | Amoxicillin                           |

---

## 🧑‍💻 Pages Overview

| Page               | Description                                             |
|--------------------|---------------------------------------------------------|
| `index.html`       | Homepage with hero, animated drone, and product grid    |
| `product.html`     | Product detail with description and add-to-cart         |
| `cart.html`        | View and manage cart items                              |
| `checkout.html`    | Enter delivery address and place order                  |
| `login.html`       | Firebase email/password login                           |
| `signup.html`      | New user registration                                   |
| `dashboard.html`   | User's order history and quick links                    |
| `profile.html`     | View and update profile information                     |
| `orders.html`      | Detailed order tracking                                 |
| `settings.html`    | Account settings (password, preferences)               |
| `admin-login.html` | Admin authentication                                    |
| `admin.html`       | Admin dashboard — view all orders, update status        |

---

## 📸 Screenshots

> Open `index.html` in a browser to see the animated drone, product catalog, and full UI.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Author

**Raghunandan** — [GitHub](https://github.com/Raghunandansaw)

---

*© 2025 MediDrone. Delivering Health with Drones 🚁*
