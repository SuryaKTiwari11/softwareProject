# 🎓 Thapar Institute Lost & Found System

A full-stack web application for managing lost and found items at **Thapar Institute of Engineering and Technology**. This system streamlines the process of reporting found items and claiming lost ones, with admin oversight for verification.

## 🌟 Features

### 👥 For Public Users (No Authentication Required)

- 🔍 Browse all found items with advanced filters
- 📱 Search by category, location, and time period
- 👁️ View detailed item information and images
- 🎨 Dark mode support
- ✨ Smooth animations and modern UI

### 🔐 For Authenticated Users

- 📝 Claim lost items with detailed descriptions
- 📊 Track claim status (Pending/Approved/Rejected)
- 👤 View personal profile and claim history
- 🔔 Real-time notifications via toast messages

### 👨‍💼 For Admins

- ➕ Create, edit, and delete found items
- 🔢 Auto-generated unique Item IDs (ITEM000001, ITEM000002, etc.)
- 📋 Manage pending, approved, and rejected claims
- ✅ Approve claims after cross-questioning claimants
- ❌ Reject claims with admin remarks
- 🔍 Advanced search and filter for items and claims
- 📊 Paginated data management
- 🚫 Automatic rejection of competing claims when one is approved

## 🛠️ Tech Stack

### Frontend

- **React 19.1.1** - UI library
- **React Router 7.9.5** - Client-side routing
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **Framer Motion 12.23.24** - Animation library
- **Vite 7.1.7** - Build tool
- **Lucide React** - Icon library
- **React Toastify** - Toast notifications
- **Axios** - HTTP client

### Backend

- **Node.js** - JavaScript runtime
- **Express 5.1.0** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.19.3** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd softwareProject
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/lostfound
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` folder:

```env
VITE_API_BASE_URL=http://localhost:3000
```

### 4. Seed Database (Optional but Recommended)

```bash
cd ../backend
npm run seed
```

This creates:

- 5 test users (including 1 admin)
- 15 sample items
- 3 pending claims

**Default Test Credentials:**

- **Admin**: admin@thapar.edu / admin123
- **User**: john.doe@thapar.edu / password123

### 5. Run the Application

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**

```bash
cd frontend
npm run dev
```

The app will be available at:

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

## 📚 Project Structure

```
softwareProject/
├── backend/
│   ├── controllers/        # Request handlers
│   │   ├── admin.controller.js
│   │   ├── auth.controllers.js
│   │   └── user.controller.js
│   ├── middlewares/        # Auth & validation
│   │   └── auth.middleware.js
│   ├── models/            # Database schemas
│   │   ├── claim.model.js
│   │   ├── item.model.js
│   │   └── user.model.js
│   ├── routes/            # API routes
│   │   ├── admin.routes.js
│   │   ├── auth.routes.js
│   │   └── user.routes.js
│   ├── index.js           # Entry point
│   ├── utils.js           # Helper functions
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── ItemCard.jsx
│   │   │   ├── CategoryFilter.jsx
│   │   │   ├── DarkModeToggle.jsx
│   │   │   └── FloatingActionButton.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── login.jsx
│   │   │   ├── signup.jsx
│   │   │   ├── admin.jsx
│   │   │   └── Claim_items.jsx
│   │   ├── context/       # React Context
│   │   │   └── DarkModeContext.jsx
│   │   ├── utils/         # Utilities
│   │   │   ├── api.js     # Axios config
│   │   │   └── constants.js
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   └── package.json
```

## 🔐 Authentication & Authorization

- **JWT-based authentication** with HTTP-only cookies
- **Token expiry**: 1 hour
- **Admin privileges** must be manually set in the database
- **Protected routes** for user claims and admin dashboard
- **Email validation**: Only @thapar.edu emails allowed

## 🎯 Key Workflows

### 1. Item Recovery Flow

```
Admin finds item → Creates entry in system →
User browses items → Recognizes their item →
Requests claim (with proof) → Admin cross-questions →
Admin approves claim → Item marked as claimed →
Other pending claims auto-rejected → User collects item
```

### 2. Admin Approval Process

```
View pending claims → Check claimant details →
Cross-question in person → Verify ownership proof →
Approve correct claimant → Add remarks →
System auto-rejects other claims → Notify users
```

## 📊 Database Models

### User

- Email (must be @thapar.edu)
- Name, Roll Number
- Password (hashed with bcrypt)
- isAdmin flag

### Item

- Item ID (auto-generated: ITEM000001)
- Name, Description, Category
- Found Location, Date Found
- Images, Brief Notes
- isClaimed, Owner Reference

### Claim

- Item Reference
- Claimant Reference
- Status (pending/approved/rejected)
- Admin Remarks
- Proof Description

## 🎨 Categories & Locations

**Categories:**
bottle, earpods, watch, phone, wallet, id_card, keys, bag, laptop, charger, books, stationery, glasses, jewelry, clothing, electronics, other

**Locations:**
COS, Library, LT, near HOSTEL O C D M, near HOSTEL A B J H, near HOSTEL Q PG, near HOSTEL E N G I, near HOSTEL K L, SBI LAWN, G BLOCK, SPORTS AREA, Auditorium, Main Gate, Jaggi

## 🔍 Filter Options

- **Category Filter**: Filter by item type
- **Location Filter**: Filter by where item was found
- **Status Filter**: Available or Claimed items
- **Time Period**: Yesterday, Last Week, Last Month, Last 3 Months
- **Search**: Search in item name or description
- **Claim Status**: Pending, Approved, or Rejected claims

## 🛡️ Security Features

- Password hashing with bcryptjs
- JWT token authentication
- HTTP-only cookies
- Helmet.js for security headers
- CORS protection
- Input validation
- Admin-only routes
- No future dates for "Date Found"

## 📖 API Documentation

Detailed API documentation is available in `backend/API_DOCUMENTATION.md`

**Key Endpoints:**

- `GET /api/user/items` - Browse items (public)
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login
- `POST /api/user/items/:id/claim` - Claim item
- `GET /api/user/my-claims` - View my claims
- `POST /api/admin/items` - Create item (admin)
- `PATCH /api/admin/claims/:id/approve` - Approve claim (admin)

## 🧪 Testing

**Seed Database:**

```bash
npm run seed          # Full reset with test data
npm run add-items     # Add more items
npm run create-admin  # Create admin user
```

**Check Database Status:**

```bash
npm run db-status
```

## 🎓 Admin Account Setup

### Method 1: Using Seed Script

```bash
npm run seed
```

Creates admin@thapar.edu / admin123

### Method 2: Manual Setup

1. Sign up normally through the UI
2. Connect to MongoDB
3. Run:

```javascript
db.users.updateOne(
  { email: "youremail@thapar.edu" },
  { $set: { isAdmin: true } }
);
```

## 🚨 Common Issues & Solutions

**Issue**: Can't see approved claims in Approved Claims tab  
**Solution**: The filter was set to 'pending' by default. Now fixed to 'all'.

**Issue**: Item ID field shows when creating items  
**Solution**: Item IDs are now auto-generated (ITEM000001 format).

**Issue**: Claimed items are still clickable  
**Solution**: Claimed items now have reduced opacity and are non-interactive.

**Issue**: Admin filters not working  
**Solution**: Backend now properly parses search, category, location, and status filters.

## 📝 License

This project is for educational purposes at Thapar Institute of Engineering and Technology.

## 👥 Contributors

- Your Name/Team Name

## 📞 Contact

For issues or questions, contact: [your-email@thapar.edu]

---

**Made with ❤️ for Thapar Institute of Engineering and Technology**
