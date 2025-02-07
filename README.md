# Food on Plate

## Project Description
**Food on Plate** is a **Food Delivery System** designed with a **Node.js backend API** and a **React.js frontend dashboard**. This system includes user authentication, menu management, and order tracking.

## Tech Stack
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** React.js, Axios, React Context/Redux, TailwindCSS/Material-UI/Bootstrap
- **Database:** MongoDB Atlas or Local MongoDB Instance

---
## Project Structure
The project consists of three main directories:
- **Frontend** - User interface for customers.
- **Backend** - API to manage users, menus, and orders.
- **Admin** - Dashboard for managing the menu and orders.

## Backend (Node.js & Express.js)
### Features
1. **Express Server Setup**
   - Runs on port **5000** (or a specified port).
2. **MongoDB Database**
   - Uses MongoDB Atlas or a local instance.
   - Models:
     - **UserModel**: username, hashed password.
     - **MenuModel**: name, category, price, availability.
     - **OrderModel**: userId, items, totalAmount, status, createdAt.
3. **API Endpoints**
   - **Authentication**:
     - `POST /register` - Register a new user.
     - `POST /login` - Login and return JWT token.
   - **Menu Management**:
     - `GET /menu` - Fetch all menu items.
     - `POST /menu` - Add a new menu item.
     - `PUT /menu/:id` - Update a menu item.
     - `DELETE /menu/:id` - Delete a menu item.
   - **Order Management**:
     - `POST /order` - Place an order.
     - `GET /orders` - Fetch logged-in user's orders.
4. **Validation & Error Handling**
   - Ensures required fields are provided.
   - Handles invalid data gracefully.

## Frontend & Admin Panel (React.js)
### Features
1. **React Application Setup**
   - Created using **Create React App** or an alternative setup.
2. **Pages & Components**
   - **Login Page**: User authentication with JWT token storage.
   - **Menu Page**: Display menu items in a grid layout with CRUD operations.
   - **Cart Component**: Add items with quantities.
   - **Order Page**: Checkout, place orders, and view order history.
3. **State Management**
   - Uses **React Context or Redux** for user sessions, menu items, and cart.
4. **API Integration**
   - Uses **Axios** or Fetch API for CRUD operations.
5. **Styling**
   - Uses **TailwindCSS, Material-UI, or Bootstrap**.
   - Fully responsive for desktop & mobile views.

---
## Installation & Setup
### 1. Backend Setup
```bash
cd backend
npm install
npm start
```
### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
### 3. Admin Panel Setup
```bash
cd admin
npm install
npm run dev
```
---
## Usage
1. **Start the backend server.**
2. **Run the frontend and admin panel.**
3. **Register/Login as a user.**
4. **Browse the menu, add items to the cart, and place orders.**
5. **Admin can manage menu items and track orders.**

---
## Live Links
- **Frontend:** [Food on Plate Frontend](https://food-on-plate.vercel.app/)
- **Backend:** [Food on Plate Backend](https://food-on-plate.onrender.com)
- **Admin Panel:** [Food on Plate Admin](https://food-on-plate-admin.vercel.app/)

---
## License
This project is open-source and free to use.

