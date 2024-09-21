export default {
  mongoUrl:
    process.env.MONGO_URL ||
    "mongodb+srv://luizhmp:Mjolnir%233@clean-node-api.bntpx.mongodb.net/?retryWrites=true&w=majority&appName=clean-node-api",
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || "tj670==5H",
};
