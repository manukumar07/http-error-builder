# http-error-builder

A clean utility to generate custom HTTP errors (400, 401, 404, 500...) for your Express/Fastify APIs with stack trace and safe JSON output.

## 📦 Installation

```bash
npm install http-error-builder
```

## ✨ Features

- ✅ Custom error messages with status code
- ✅ Auto stack trace
- ✅ JSON-friendly .toJSON() for API responses
- ✅ Works in Express/Fastify/Middleware

---

## 🛠 Usage

```
const { createError } = require('http-error-builder');

app.get('/user/:id', (req, res, next) => {
  const user = null;
  if (!user) return next(createError(404, 'User not found'));
});

```

## ✅ Output

```
{
  "status": 404,
  "message": "User not found"
}
```

## 🎯 Use in Express Error Handler

```
app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json(err.toJSON());
  } else {
    res.status(500).json({ message: 'Server error' });
  }
});
```

## 📚 API

```
createError(statusCode, message?)
statusCode — HTTP code (400, 401, 404, 500, etc.)
message — Optional custom message

```
