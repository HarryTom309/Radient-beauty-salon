# Radiant Beauty Salon & Spa

This is a MERN stack application for Radiant Beauty Salon & Spa, featuring a frontend built with React and a backend with Node.js, Express, and MongoDB. The application supports user authentication, service browsing, cart management, order history, password changes, and appointment booking.

## Project Structure

```
radiant-beauty-salon/
├── client/                # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   ├── public/
│   │   ├── Images/
│   │   ├── styles.css
│   │   ├── index.html
│   ├── package.json
│   ├── .gitignore
├── server/                # Node.js/Express backend
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
├── package.json           # Root package.json
├── README.md
├── services-data.json     # Sample data for MongoDB
```

## Prerequisites

- Node.js (v14 or later)
- MongoDB Atlas account
- Render account
- Git

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd radiant-beauty-salon
```

### 2. Install Dependencies
Install dependencies for the root, client, and server:
```bash
npm run install-all
```

### 3. Set Up MongoDB Atlas
1. Create a MongoDB Atlas account and set up a cluster.
2. Create a database user and allow network access from `0.0.0.0/0`.
3. Copy the connection string (e.g., `mongodb+srv://<username>:<password>@cluster0.mongodb.net/salonDB?retryWrites=true&w=majority`).

### 4. Populate the Database
Import the sample services data into MongoDB:
```bash
mongoimport --uri "mongodb+srv://<username>:<password>@cluster0.mongodb.net/salonDB" --collection services --jsonArray --file services-data.json
```

### 5. Configure Environment Variables
1. Copy `server/.env.example` to `server/.env`.
2. Update `server/.env` with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/salonDB?retryWrites=true&w=majority
   PORT=5000
   ```

### 6. Run the Application Locally
1. Start the backend server:
   ```bash
   npm start
   ```
2. In a separate terminal, start the frontend:
   ```bash
   npm run client
   ```
3. Open `http://localhost:3000` in your browser to view the app.

## Deployment on Render

### 1. Push to GitHub
1. Initialize a Git repository if not already done:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a new repository on GitHub and push your code:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

### 2. Deploy Backend on Render
1. In the Render dashboard, click **New > Web Service**.
2. Connect your GitHub repository.
3. Configure the backend service:
   - **Name**: `radiant-beauty-backend`
   - **Root Directory**: `server`
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free
4. Add environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string.
   - `PORT`: 5000
5. Deploy the service. Note the URL (e.g., `https://radiant-beauty-backend.onrender.com`).

### 3. Deploy Frontend on Render
1. In the Render dashboard, click **New > Static Site**.
2. Connect your GitHub repository.
3. Configure the frontend service:
   - **Name**: `radiant-beauty-frontend`
   - **Root Directory**: `client`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
   - **Instance Type**: Free
4. Deploy the service. Note the URL (e.g., `https://radiant-beauty-frontend.onrender.com`).

### 4. Update CORS and Proxy
- Ensure `server/server.js` has the correct CORS origin (e.g., `https://radiant-beauty-frontend.onrender.com`).
- Ensure `client/package.json` has the correct proxy (e.g., `https://radiant-beauty-backend.onrender.com`).

### 5. Test the Deployed App
- Visit the frontend URL (e.g., `https://radiant-beauty-frontend.onrender.com`).
- Test features like sign-up, cart management, order confirmation, order history, password change, and appointment booking.

## Notes
- **Render Free Tier**: The free tier may sleep after 15 minutes of inactivity. Set up a cron job (e.g., using [cron-job.org](https://cron-job.org)) to ping the backend URL every 10 minutes to keep it awake.
- **Default Password**: After signing up, users can log in with the default password `defaultPassword123` and change it via the "Change Password" page.

## Features
- User authentication (sign-up, login, logout)
- Service browsing and cart management
- Order confirmation and history
- Password change
- Appointment booking

## Deliverable 2 Requirements
- **Database Design (15%)**: MongoDB collections (`Users`, `Services`, `Appointments`, `Orders`, `Cart`) are inter-related.
- **Data Population (15%)**: Services are populated via `services-data.json`.
- **Server-Side Code (20%)**: Handles cart, orders, password changes, and appointments.
- **Deployment (10%)**: Deployed on Render with clear instructions.