# Notification Service

A lightweight Express.js microservice that fetches notifications from the Evaluation API, calculates a priority score for each notification, and returns the **Top 10 highest-priority notifications**.

---

## 🚀 Tech Stack

- Express.js
- ES Modules
- Axios
- Min Heap (Priority Queue)

---

## 📁 Project Structure

```text
notification-service/
│
├── config/
│   ├── axios.js
│   └── constants.js
│
├── controllers/
│   └── notification.controller.js
│
├── middleware/
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   └── logger.middleware.js
│
├── routes/
│   └── notification.routes.js
│
├── services/
│   ├── notification.service.js
│   └── priority.service.js
│
├── utils/
│   ├── heap.js
│   ├── priority.js
│   └── response.js
│
├── app.js
├── server.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Working Flow

```text
                 Client
                    │
                    ▼
      GET /api/notifications/:userId
                    │
                    ▼
               Express Router
                    │
                    ▼
                Controller
                    │
                    ▼
          Notification Service
                    │
                    ▼
      Evaluation Notification API
                    │
                    ▼
        Calculate Priority Score
                    │
                    ▼
      Min Heap (Maintain Top 10)
                    │
                    ▼
       Return Top 10 Notifications
```

---

## 🧮 Priority Calculation

Each notification is assigned a score based on:

- Notification Type
- Read Status
- Favorite Status
- Recency (newer notifications get higher priority)

A **Min Heap** is used to efficiently maintain only the **Top 10** highest-priority notifications.

**Time Complexity:** `O(N log 10) ≈ O(N)`

**Space Complexity:** `O(10)`

---

## ▶️ Installation

```bash
npm install
```

---

## ▶️ Run

```bash
npm run dev
```

---

## 🔑 Environment Variables

```env
PORT=5000
BASE_URL=http://4.224.186.213/evaluation-service
API_TOKEN=YOUR_API_TOKEN
TOP_N=10
```

---

## 📌 API Endpoint

### Get Top Notifications

```http
GET /api/notifications/:userId
```

### Response

```json
{
  "success": true,
  "count": 10,
  "notifications": [
    {
      "id": 1,
      "title": "Placement Drive",
      "priority": 8
    }
  ]
}
```