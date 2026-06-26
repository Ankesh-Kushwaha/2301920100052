# Vehicle Scheduler

A minimal Express.js backend that generates an optimal vehicle maintenance schedule for each depot using the **0/1 Knapsack** algorithm.

---

## Tech Stack

- Node.js
- Express.js
- Axios
- ES Modules

---

## Project Structure

```text
vehicle-scheduler/
│
├── src
│   ├── app.js
│   ├── server.js
│   │
│   ├── config
│   │   └── axios.js
│   │
│   ├── controllers
│   │   └── schedule.controller.js
│   │
│   ├── routes
│   │   └── schedule.routes.js
│   │
│   ├── services
│   │   ├── depot.service.js
│   │   ├── vehicle.service.js
│   │   └── scheduler.service.js
│   │
│   ├── utils
│   │   └── knapsack.js
│   │
│   └── middleware
│       ├── logger.js
│       └── errorHandler.js
│
├── .env
├── package.json
└── README.md
```

---

## How it Works

```text
          Request
             │
             ▼
      Schedule Controller
             │
             ▼
      Fetch All Depots
             │
             ▼
   Fetch Vehicles per Depot
             │
             ▼
   0/1 Knapsack Algorithm
             │
             ▼
     Generate Schedule
             │
             ▼
         JSON Response
```

---

## API

### Generate Schedule

```http
GET /api/schedule
```

Returns the optimal maintenance schedule for all depots.

---

## Run

```bash
npm install
npm start
```