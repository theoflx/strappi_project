module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd3e1c27ac8a8fcd71fd644076a5b0e63'),
  },
});
