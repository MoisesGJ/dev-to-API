const express = require('express');

const authRouter = require('./routes/auth.router');
const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Dev-To API | v1.0.0' }));

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

module.exports = app;
