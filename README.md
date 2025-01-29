# Collaborative Study Platform

## Overview
This project focuses on developing a **Collaborative Study Platform** that connects **students, tutors, and administrators** to streamline **study session scheduling, resource sharing, and user management**. The goal is to enhance collaboration, improve access to study materials, and ensure efficient educational management.

---

## Features

### 1. **Authentication & Authorization**
- **User Registration**
  - Signup form for **students, tutors, and administrators**.
  - Fields: **name, email, photo (direct link or ImgBB upload), password, role selection**.
- **User Login**
  - **JWT-based authentication** for secure session management.
  - **Social login** (Google & GitHub) - defaults to student role.
- **Role-Based Access Control**
  - Middleware to check **user roles and permissions**.
  - Routes protected based on role-based access.

---

### 2. **Home Page**
- **Navbar**: Includes logo, website name, login/signup buttons (if logged out), profile picture, logout, and dashboard button (if logged in).
- **Banner Section**: A professional background image relevant to the platform.
- **Study Session Section**: Displays **6 study sessions** (only approved ones).
  - **Ongoing/Closed** status (based on registration dates).
  - "Read More" button (redirects to session details page).
  - **Only logged-in users** can access details.
- **Tutor Section**: Lists all tutors.
- **Footer**

---

### 3. **Student Dashboard (Private Route)**
- **View Booked Sessions**
  - Displays **all booked study sessions**.
  - "View Details" button to access session information.
  - Ability to **post reviews and ratings**.
- **Create Note**
  - Form fields: **Email (ReadOnly), Title, Description**.
  - Notes stored in a separate collection.
- **Manage Personal Notes**
  - View, **update**, and **delete** notes.
- **View Study Materials**
  - Access materials **only for booked sessions**.
  - View **images and Google Drive links**.
  - Download images.

---

### 4. **Tutor Dashboard (Private Route)**
- **Create Study Session**
  - Fields: **Title, Tutor Name, Email, Description, Dates, Duration, Default Registration Fee (0), Status (Pending)**.
- **View All Study Sessions**
  - Tutors can see **approved** and **rejected** sessions.
  - Can **request approval again** for rejected sessions.
- **Upload Materials**
  - Fields: **Title, Study Session ID (ReadOnly), Tutor Email (ReadOnly), Image Upload, Google Drive Link**.
  - Materials stored in a separate collection.
- **View All Materials**
  - Tutors can view, update, and delete their uploaded materials.

---

### 5. **Admin Dashboard (Private Route)**
- **View All Users**
  - Admin can **search users by name/email**.
  - Can **update user roles**.
- **View All Study Sessions**
  - Approve or reject study sessions.
  - If approved, set **free or paid status** (set fee if paid).
  - If rejected, **provide a reason and feedback**.
  - Can **update and delete approved sessions**.
- **View All Materials**
  - Admin can **remove inappropriate or outdated content**.

---

## **Challenges & Implementation**

### 1. **TanStack Query**
- Used for **data fetching**

### 2. **JWT Authentication**
- Implemented **JWT-based authentication**.


### 4. **Admin Session Rejection**
- Pop-up modal for rejection reason and feedback.
- Tutors can view **feedback on rejected sessions**.

---

## **Optional Tasks**
- Implement **Axios interceptor**.
- Admin can **make announcements**.
- Navbar menu for **public announcements**.
- Student dashboard can display **classmates for booked sessions**.

---

## **Tech Stack**
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase, JWT
- **State Management**: TanStack Query

---

