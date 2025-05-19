# 🏫 School-API

This project provides a simple RESTful API to manage and retrieve information about schools based on their geographical location.

## 🔧 Tech Stack

- **Backend:** Node.js + Express
- **Deployment:** Render
- **Documentation:** Postman

---

## 📄 Postman API Documentation

Access all requests via:  
🔗 [Postman Collection](https://api.postman.com/collections/36493856-8d39d5c5-6090-4690-b5fd-61e84651e6a1?access_key=SECRET_HERE)

---
## FRONTEND 
https://school-api-frontend.vercel.app/

## 🌐 Base URL

https://school-api-1a41.onrender.com


---

## 🚀 Features

- ✅ Add schools with name, address, and GPS coordinates
- ✅ List all schools sorted by distance using the **Haversine formula**
- ✅ Error handling for invalid or failed requests

---

## 📌 API Endpoints

### 1️⃣ Add a School

- **Method:** `POST`
- **URL:** `/api/addSchool`

#### Request Body (JSON):
json
{
  "name": "Springfield High",
  "address": "123 Elm Street, Springfield",
  "latitude": 37.7749,
  "longitude": -122.4194
}
# 📍 API: List Nearby Schools

This API endpoint retrieves a list of schools sorted by their distance from a specified geographical location using the Haversine formula.

---

## 🔗 Endpoint
GET /api/listSchools?latitude=37.7749&longitude=-122.4194


---

## ✅ Success Response (200 OK)

Returns a list of schools sorted by proximity:
json
[
  {
    "id": 1,
    "name": "Springfield High",
    "address": "123 Elm Street, Springfield",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "distance": 0
  },
  {
    "id": 2,
    "name": "Shelbyville Elementary",
    "address": "456 Oak Avenue, Shelbyville",
    "latitude": 37.8044,
    "longitude": -122.2711,
    "distance": 14.7
  }
]

