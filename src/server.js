const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/auth.router');
const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Dev-To API | v1.0.0' }));

app.get('/DOCUMENTACION', (req, res) =>
  res
    .status(402)
    .json({
      error:
        'Para acceder a la documentación necesita pagar una subscripción mensuaul.',
    })
);

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

module.exports = app;
