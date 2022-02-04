module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '43daa8582e1bcc166e5daa8dc44b79ee'),
  },
});
