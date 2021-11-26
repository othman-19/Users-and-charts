module.exports = {
  secret: process.env.SECRET,
  environement: process.env.NODE_ENV,
  database: process.env.MONGO_DB,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  secure: process.env.NODE_ENV === 'production',
};
