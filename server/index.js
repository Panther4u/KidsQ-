// require("dotenv").config();
// const express = require("express");
// const app = express();
// const path = require('path');
// const cors = require("cors");
// const connectDB = require("./config/db");
// const { secret } = require("./config/secret");
// const PORT = secret.port || 8000;
// const morgan = require('morgan')
// // error handler
// const globalErrorHandler = require("./middleware/global-error-handler");
// // routes
// const userRoutes = require("./routes/user.routes");
// const categoryRoutes = require("./routes/category.routes");
// const brandRoutes = require("./routes/brand.routes");
// const userOrderRoutes = require("./routes/user.order.routes");
// const productRoutes = require("./routes/product.routes");
// const orderRoutes = require("./routes/order.routes");
// const couponRoutes = require("./routes/coupon.routes");
// const reviewRoutes = require("./routes/review.routes");
// const adminRoutes = require("./routes/admin.routes");
// // const uploadRouter = require('./routes/uploadFile.route');
// const cloudinaryRoutes = require("./routes/cloudinary.routes");

// // middleware
// app.use(cors());
// app.use(express.json());
// app.use(morgan('dev'));

// const allowedOrigins = process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : ['https://kidsquniforms.netlify.app'];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   methods: ['GET', 'PUT', 'POST', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }));

// app.use(express.static(path.join(__dirname, 'public')));

// // connect database
// connectDB();


// app.use("/api/user", userRoutes);
// app.use("/api/category", categoryRoutes);
// app.use("/api/brand", brandRoutes);
// app.use("/api/product", productRoutes);
// // app.use('/api/upload',uploadRouter);
// app.use("/api/order", orderRoutes);
// app.use("/api/coupon", couponRoutes);
// app.use("/api/user-order", userOrderRoutes);
// app.use("/api/review", reviewRoutes);
// app.use("/api/cloudinary", cloudinaryRoutes);
// app.use("/api/admin", adminRoutes);

// // root route
// app.get("/", (req, res) => res.send("Apps worked successfully"));

// app.listen(PORT, () => console.log(`server running on port ${PORT}`));

// // global error handler
// app.use(globalErrorHandler);
// //* handle not found
// app.use((req, res, next) => {
//   res.status(404).json({
//     success: false,
//     message: 'Not Found',
//     errorMessages: [
//       {
//         path: req.originalUrl,
//         message: 'API Not Found',
//       },
//     ],
//   });
//   next();
// });

// module.exports = app;


require("dotenv").config();
const express = require("express");
const path = require('path');
const cors = require("cors");
const morgan = require('morgan');
const connectDB = require("./config/db");
const { secret } = require("./config/secret");
const globalErrorHandler = require("./middleware/global-error-handler");
const PORT = secret.port || 8000;

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// CORS configuration
const allowedOrigins = process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : ['https://kidsquniforms.netlify.app'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Connect to the database
connectDB();

// Routes
app.use("/api/user", require("./routes/user.routes"));
app.use("/api/category", require("./routes/category.routes"));
app.use("/api/brand", require("./routes/brand.routes"));
app.use("/api/product", require("./routes/product.routes"));
app.use("/api/order", require("./routes/order.routes"));
app.use("/api/coupon", require("./routes/coupon.routes"));
app.use("/api/user-order", require("./routes/user.order.routes"));
app.use("/api/review", require("./routes/review.routes"));
app.use("/api/cloudinary", require("./routes/cloudinary.routes"));
app.use("/api/admin", require("./routes/admin.routes"));

// Root route
app.get("/", (req, res) => res.send("App works successfully"));

// Global error handler
app.use(globalErrorHandler);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
