# **Full-Stack Blog Application**

This is a full-stack blog application built with a **Node.js/Express.js** backend and a **React Native** frontend. The application allows users to view a list of blogs, filter blogs by tags, and paginate through the blog list.

---

## **Features**
### Backend
- **List Blogs with Pagination**: Fetch a paginated list of blogs.
- **Filter Blogs by Tags**: Fetch blogs that contain specific tags.
- **Update Blog by ID**: Update a blog's details by its ID.

### Frontend (React Native)
- **Blog Listing Page**: Displays a list of blogs with pagination.
- **Filter by Tags**: Allows users to filter blogs using tags.
- **Responsive Design**: Works seamlessly on both Android and iOS.

---

## **Tech Stack**
### Backend
- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing blog and user data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.

### Frontend
- **React Native**: Framework for building cross-platform mobile apps.
- **Redux Toolkit**: State management library.
- **Axios**: HTTP client for making API requests.
- **React Navigation**: Routing and navigation for React Native apps.

---

## **Setup Instructions**
### Prerequisites
- Node.js (v16 or higher)
- MongoDB (running locally or remotely)
- React Native CLI or Expo CLI
- Android Studio/Xcode (for running the app on an emulator or device)

---

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fullstack-blog-app.git
   cd fullstack-blog-app/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up MongoDB:
   - Ensure MongoDB is running locally or update the connection string in `server.js`.

4. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

---

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the API base URL:
   - Open `src/store/blogSlice.js` and replace `http://<your-backend-ip>:5000` with your backend server URL.

4. Start the React Native app:
   ```bash
   npx react-native start
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

---

## **API Endpoints**
### Blogs
- **GET `/api/blogs?page={page}&limit={limit}`**: Fetch a paginated list of blogs.
- **GET `/api/blogs?tags={tag}`**: Fetch blogs by tags.
- **PUT `/api/blogs/:id`**: Update a blog by its ID.

---

## **Folder Structure**
```
fullstack-blog-app/
├── backend/
│   ├── controllers/          # API controllers
│   ├── models/               # MongoDB models
│   ├── routes/               # API routes
│   ├── server.js             # Backend entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── navigation/       # React Navigation setup
│   │   ├── screens/          # React Native screens
│   │   ├── store/            # Redux store and slices
│   │   └── App.js            # Frontend entry point
│   └── package.json
└── README.md
```

---

## **Screenshots**
![Blog Listing Page](https://via.placeholder.com/300x600?text=Blog+Listing+Page)
![Filter by Tags](https://via.placeholder.com/300x600?text=Filter+by+Tags)

---

## **Contributing**
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Contact**
For any questions or feedback, feel free to reach out:
- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)

---

Enjoy building and using the full-stack blog application! 🚀