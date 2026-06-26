# Logging Middleware

A lightweight reusable logging module for Express applications.

## Folder Structure

```text
logger/
│
├── axios.js
├── auth.js
└── index.js
```

---

## Dependencies

```bash
npm install axios dotenv
```

---

## Environment Variables

Create a `.env` file.

```env
LOG_BASE_URL=http://4.224.186.213
LOG_AUTH_API=/evaluation-service/auth
LOG_API=/evaluation-service/logs

EMAIL=your_email
PASSWORD=your_password
```

> Replace the authentication credentials according to the evaluation portal.

---

## Usage

Import the logger.

```javascript
const Log = require("./logger");
```

Log a message.

```javascript
await Log(
    "backend",
    "info",
    "controller",
    "Fetching vehicles"
);
```

---

## Request Format

```json
{
    "stack": "backend",
    "level": "info",
    "package": "controller",
    "message": "Fetching vehicles"
}
```

---

## Parameters

| Parameter | Description |
|-----------|-------------|
| stack | backend / frontend |
| level | debug, info, warn, error, fatal |
| package | Module name (controller, service, route, etc.) |
| message | Log message |

---

## Example

```javascript
await Log(
    "backend",
    "error",
    "handler",
    "received string, expected bool"
);
```

---

## Export

```javascript
const Log = require("./logger");
```

The module returns the response received from the logging API.