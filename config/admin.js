module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b5725f67f1e32103f395ceb0cd1f7d13'),
  },
});
