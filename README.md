## Cybersecurity Threat Dashboard

## A full-stack cybersecurity threat analysis dashboard using:

 Backend – Node.js + Express + Mongoose
 ML API – Python Flask for simple threat classification
 Frontend – React (Vite) + Bootstrap
 MongoDB – Database
 Docker Compose – To run all services seamlessly

## Project Structure
- Frontend
- Backend
- ML-API

## Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)


## Setup Instructions

### 1. Clone the repository

git clone https://github.com/praveks/Cybersecurity-Threat-Intelligence.git
cd CYBER

### 2. Add environment variables
Create .env file inside back_end/
PORT=5000
MONGO_URI=mongodb://mongo:27017/cyber_dashboard
JWT_SECRET=your_secret_key_here

### 3. Run the Project(In Docker)
Run->  docker-compose up --build
Stop-> docker-compose down

### Ports Used
Frontend-http://localhost:3000
Backend-http://localhost:5000
ml_api-http://localhost:5001
mongodb://localhost:27018(mapped from the container's default port 27017)

## Endpoints To Test
For Signup- POST http://localhost:5000/api/auth/register -- Body->(username,password)
For Login-  POST http://localhost:5000/api/auth/login --- gives the AccessToken
For Adding Threat - POST http://localhost:5000/api/threats -- header->token -- body->thread to add
For Get All - GET http://localhost:5000 /api/threats
For Update- PUT http://localhost:5000/api/threats/{id}
For Delete- DELETE http://localhost:5000/api/threats/{id}

For Ml-api - http://127.0.0.1:5001/predict - 

