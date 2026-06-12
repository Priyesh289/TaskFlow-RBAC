# Taskflow-RBAC

A full-stack Role-Based Task Management System built with the MERN stack. The application provides secure authentication, role-based access control, task management, activity tracking, and analytics dashboards for administrators.

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt.js

---

## Features

### Authentication

- User Registration
- User Login
- JWT-Based Authentication
- Protected Routes

### Role-Based Access Control (RBAC)

#### Admin

- View all users
- Change user status (Active / Inactive)
- Delete users
- View all tasks
- Delete any task
- View activity logs
- Access analytics dashboard

#### User

- Create tasks
- View own tasks
- Update own tasks
- Delete own tasks

---

## Backend Features

- ✅ User Authentication using JWT
- ✅ Role-Based Authorization (Admin/User)
- ✅ Task CRUD Operations
- ✅ Activity Logging System
- ✅ Admin Management APIs
- ✅ Analytics API

---

## Frontend Features

- ✅ Login and Registration
- ✅ Protected Routes
- ✅ Admin Dashboard
- ✅ User Management
- ✅ Task Monitoring
- ✅ Activity Logs
- ✅ Analytics Dashboard
- ✅ Responsive UI using Tailwind CSS

---

## Security Features

- JWT Authentication
- Admin-Only Route Protection
- User Ownership Validation
- Password Hashing using Bcrypt
- Protected API Endpoints

---

## Activity Logging

The system automatically records important actions such as:

- User Login
- User Registration
- Task Creation
- Task Update
- Task Deletion
- User Status Updates
- User Deletion

---

## Analytics Dashboard

Provides insights including:

- Total Users
- Active Users
- Inactive Users
- Total Tasks
- Task Status Statistics
- Activity Overview

---

## Project Structure

```text
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── app.js

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── services/
│   ├── routes/
│   └── App.jsx
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd project-name
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/taskflow-rbac
JWT_SECRET=your_secret_key
```

Start Backend:

```bash
npm run server
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## API Modules

### Authentication

- Register User
- Login User

### User Tasks

- Create Task
- Get My Tasks
- Update Task
- Delete Task

### Admin

- View Users
- Update User Status
- Delete Users
- View All Tasks
- Delete Any Task
- View Activity Logs
- View Analytics

---

## Testing Completed

- [x] Authentication Flow
- [x] Task CRUD Operations
- [x] Admin Functionality
- [x] Activity Logging
- [x] Responsive Layouts

---

## Technical Highlights

- Role-Based Access Control (RBAC)
- Centralized Activity Tracking
- Reusable API Service Layer
- Protected Routing
- Analytics Endpoints
- Clean Architecture
- Scalable Folder Structure

---

## Notes

- Followed reusable component architecture.
- Implemented responsive design using Tailwind CSS.
- Added loading and empty states for better user experience.
- Organized codebase with scalable folder structure.
- Maintained clear separation between frontend and backend responsibilities.

---

