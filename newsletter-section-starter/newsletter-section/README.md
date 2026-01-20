## Newsletter Subscription Section – GreatFrontEnd Challenge
### 📌 Challenge Overview

This project is my implementation of the Newsletter Subscription Section challenge from GreatFrontEnd Projects.

The goal of this challenge was to build a responsive newsletter signup section where users can enter their email address, validate it on the client side, and submit it to an API endpoint, following both visual and functional requirements.

The solution focuses on:

* Responsive UI design

* Form validation

* User feedback

* API integration

* Clean, user-friendly interactions

## 🧩 Features Implemented
### ✅ Responsive Design

* The layout adapts smoothly across screen sizes

* Content stacks vertically on mobile and aligns horizontally on larger screens

* Padding, spacing, and image scaling are optimized for mobile, tablet, and desktop

* Built using Tailwind CSS responsive utilities

### ✅ Email Input & Form UI

* Clean email input field and submit button

* Button supports hover and focus states

* Input field styled for normal and error states

* Form stacks vertically on mobile and inline on larger screens

### ✅ Client-side Validation

* The email field is validated before sending data to the backend:

* Required check:
    Displays Email field cannot be empty

* Format check:
    Validates using regex for standard email format
    Displays Enter valid Email

* Prevents form submission if validation fails

### ✅ User Feedback

* Inline error messages are shown below the input field

* Toast-style notification appears for:

* Successful subscription

* API or validation errors

### ✅ API Integration

* Form submits email to a backend API (POST /subscribe)

* Uses Fetch API with JSON payload

* Handles both success and failure responses gracefully

### ✅ Backend with Node.js & Express

* A simple Express server handles subscription requests:

* Accepts POST requests at /subscribe

* Parses JSON body

* Returns success or error responses

* CORS enabled for frontend-backend communication

## 🛠️ Tech Stack
### Frontend

* HTML

* Tailwind CSS

* Vanilla JavaScript

### Backend

* Node.js

* Express.js

* CORS

### 📁 Project Structure
    ├── index.html        # Main newsletter UI
    ├── css/
    │   └── style.css     # Global styles
    ├── js/
    │   ├── index.js      # Client-side validation & API logic
    │   └── server.js     # Express backend server
    ├── img/
    │   └── abstract.jpg  # Newsletter illustration
    └── README.md         # Project documentation

## 🚀 How It Works
1. User enters email

   * The user types their email into the input field and clicks Subscribe.

2. Client-side validation

   * Before sending data:
    
   * Checks if the email is empty
    
   * Verifies format using regex
    
   * Displays error messages if validation fails

3. API submission

   * If valid:
    
   * Sends a POST request to /subscribe
    
   * Backend processes the request

4. Feedback to user

   * On success: shows success toast
    “Subscription successful! Please check your inbox to confirm.”
    
   * On error: shows appropriate error message

## ♿ Accessibility Considerations

* Input uses type="email" for browser-level validation

* Images include alt text

* Buttons and form fields are keyboard-navigable

* Clear visual feedback is provided for errors and success states

## 🌱 What I Learned

* How to structure responsive layouts using Tailwind CSS

* Implementing client-side validation using JavaScript

* Connecting frontend forms to a backend API

* Using Express.js to build a simple API

* Managing UI feedback through toast notifications

* Debugging form submission and API errors

#### This challenge helped me strengthen my frontend fundamentals and backend integration skills, especially around responsive design, form handling, and validation. 
