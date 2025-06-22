# 📸 PicScape

PicScape is a web application where users can **sign up, log in**, and explore a gallery of stunning images. They can also apply **various filters** to the images dynamically — all in a clean, interactive interface.

> 🔐 **Note:**  
> For security reasons, the `firebase-config.js` file is **not included** in this repository.  
> Firebase configuration is required to run the project locally and must be provided by the developer.

---

## 🚀 Live Demo

🔗 [Click here to try PicScape](https://picscape-satwika.netlify.app)

---

## ✨ Features

- 🔐 Firebase authentication: User Sign-Up and Login
- 📷 Browse images dynamically (Unsplash API integration)
- 🎨 Apply filters to images like:
  - Grayscale
  - Sepia
  - Blur
  - Brightness
  - Reset
- 💡 Responsive and clean UI
- 🔗 Securely deployed using Netlify

---

## 🛠️ Tech Stack

- **HTML5**, **CSS3**, **JavaScript**
- **Firebase Authentication** for user auth
- **Unsplash API** for dynamic image fetching
- **Netlify** for deployment

---

## 📂 Project Structure

PicScape/
│
├── index.html # Landing page and Sign-up page
├── home_page.html # Main image browse/edit page (after login)
├── login_page.html # Login page
├── customize_styles.html # Image filter/customization
|__ images-page.html #Exploring Images Page
├── firebase-config.js # 🔐 Not pushed to GitHub (required for auth)
├── styles/ # CSS files
├── scripts/ # JavaScript logic
│ └── browse_image.js #Javascript for sign-up page
│ └── login_page.js #For login page
| |__ images_page.js #Exploring images page js
│ └── customize_styles.js #Styling page
└── .gitignore # Includes firebase-config.js

## 🔧 How to Run Locally

1. Clone this repo:
   ```bash
   git clone https://github.com/your-username/PicScape.git
   cd PicScape
2.Create a file named firebase-config.js in the root folder:
// firebase-config.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  ...
};
3.Open index.html or any page in a live server (like VSCode Live Server)

🙌 Acknowledgments
Firebase for easy authentication

Unsplash for free image API

Netlify for smooth deployment

👩‍💻 Author
Gadi Satwika
📬 satwikagadi2005@gmail.com

✅ Feel free to fork, modify, and contribute to this project.
📌 Remember to set up your own Firebase project before running locally.
