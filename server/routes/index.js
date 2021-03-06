const path = require('path');

module.exports = app => {
  app.use('/api/auth', require('../api/user/auth'));
  app.use('/api/user', require('../api/user'));
  app.use('/api/diary', require('../api/user/diary'));
  app.use('/api/chat', require('../api/user/chat'));
  app.use('/api/spot', require('../api/spot'));
  app.use('/api/wedding', require('../api/wedding'));
  app.use('/api/comment', require('../api/comment'));
};