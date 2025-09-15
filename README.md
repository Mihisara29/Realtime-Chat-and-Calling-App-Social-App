# 🌍 Realtime Social & Video Calling Application  

A full-stack real-time chat and video calling platform designed for **language learners** to connect, chat, and practice speaking with each other. This was built as an **individual project**, focusing on smooth communication and a clean, responsive user experience.  

---

## ✨ Features  

- **🔐 Secure Authentication** – Sign up & login using JWT-based authentication  
- **👫 Friend Management** – Send/accept friend requests and manage your friend list  
- **💬 Real-Time Messaging** – Instant chat with smooth, responsive UI  
- **🎥 Peer-to-Peer Video Calls** – Powered by **Streamify API** for stable video calls  
- **🖥️ Responsive Design** – Built with **React + Tailwind CSS** for a modern look  
- **⚙️ Scalable Backend** – Express.js + MongoDB for robust and real-time data handling  

---

## 🏗️ Tech Stack  

- **Frontend:** React, Tailwind CSS  
- **Backend:** Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT  
- **Real-Time Communication:** Streamify API  

---

## 🖼️ System Architecture  

```mermaid
graph TD;
    A[React Frontend] -->|REST + WebSocket| B[Express.js Backend]
    B --> C[MongoDB Database]
    B --> D[Streamify API - Video & Chat]
````

This architecture enables secure authentication, instant messaging, and peer-to-peer video calls for a seamless learning experience.

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v16+)
* MongoDB (local or Atlas)
* Streamify API credentials

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Mihisara29/realtime-social-app.git
cd realtime-social-app
```

2. **Install dependencies:**

```bash
npm install
```

3. **Environment Variables:**
   Create a `.env` file in the root directory and configure:

```
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
STREAMIFY_API_KEY=your_streamify_api_key
```

4. **Run the application:**

```bash
npm run dev
```

---

## 📸 Demo Video

🎥 **Watch the project in action:**
[▶️ Realtime Social & Video Calling App Demo](https://www.linkedin.com/posts/induwara-mihisara-9572712a4_just-dropped-my-latest-project-a-real-time-activity-7347709336007098368-d4CV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEldmxMBnPOO2hlV1Sy_92H2m4wVZYUOrNU)

---

## 📦 Deployment

* **Frontend & Backend:** Can be deployed on **Vercel**, **Render**, or **Heroku**

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to your branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📬 Contact

**Induwara Mihisara**
📧 Email: [induwaramihisara@gmail.com](mailto:induwaramihisara@gmail.com)
🔗 GitHub: [@Mihisara29](https://github.com/Mihisara29)

**🔗 Project Link:** [Realtime Social & Video Calling Application](https://github.com/your-username/realtime-social-app)

```

✅ **Why this is great for GitHub/Portfolio:**  
- **Clean & professional format** – Sections are clear, well-structured  
- **Includes demo video link** – Recruiters can instantly see your project in action  
- **System architecture diagram** – Shows you understand full-stack design  
- **Setup instructions** – Anyone can clone & run your app easily  

Would you like me to add a **Screenshots/GIFs section** with placeholders (so you can later insert UI screenshots for chat screen, video call screen, etc.)? This will make the README visually attractive.
```
