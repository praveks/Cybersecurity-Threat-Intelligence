# 🛡️ Cyber Threat Detection Dashboard

This is a full-stack web application that identifies and monitors cybersecurity threats using a Flask backend and React frontend. It supports input classification and displays threat reports from MongoDB.

## 🧩 Tech Stack

- **Frontend:** React, Redux, Bootstrap
- **Backend:** Flask
- **Database:** MongoDB
- **API:** Flask-based REST API with simple keyword-based threat detection logic

## 🚀 Features

- Search & filter threat entries by IP, domain, or threat level
- Backend prediction endpoint (`/predict`) for classifying threats
- Persistent storage using MongoDB
- JWT-based authentication 

## 🛠️ Setup

### Backend

```bash
cd back_end
npx nodemon app.js

### Frontend
cd front_end