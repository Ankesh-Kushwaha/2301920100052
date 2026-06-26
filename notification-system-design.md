# Notification System Design

## Overview

The Notification Service is a lightweight, stateless microservice that fetches notifications from the Evaluation API, calculates a priority score for each notification, and returns the **Top 10 highest-priority notifications**. No notification data is stored locally.

---

## Architecture

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
          Priority Calculation Engine
                      │
                      ▼
        Min Heap (Maintains Top 10)
                      │
                      ▼
             JSON Response to Client
```

---

## Project Flow

```text
Request
   │
   ▼
Fetch Notifications
   │
   ▼
Calculate Priority Score
   │
   ▼
Maintain Top 10 using Min Heap
   │
   ▼
Sort by Priority
   │
   ▼
Return Response
```

---

## Components

### Router
- Receives API requests.
- Forwards requests to the controller.

### Controller
- Handles request and response.
- Calls the notification service.

### Notification Service
- Fetches notifications from the Evaluation API.
- Sends notifications to the priority engine.

### Priority Engine
- Computes a priority score for each notification.
- Uses a **Min Heap** to efficiently maintain the Top 10 notifications.

---

## Priority Factors

Each notification's priority is calculated using:

- Notification Type
- Read Status
- Favorite Status
- Recency (newer notifications receive higher priority)

---

## Why Min Heap?

A Min Heap allows the service to efficiently maintain only the **Top 10** highest-priority notifications.

- Insert Notification → **O(log 10)**
- Maintain Top 10 → **O(N log 10) ≈ O(N)**
- Space Complexity → **O(10)**

This approach avoids sorting the entire notification list and scales efficiently for large datasets.

---

## Complexity Analysis

| Operation | Complexity |
|-----------|------------|
| Fetch Notifications | O(N) |
| Priority Calculation | O(N) |
| Heap Operations | O(N log 10) ≈ O(N) |
| Final Sorting (Top 10) | O(10 log 10) |
| Space | O(10) |

---

## Key Design Decisions

- Stateless microservice
- Layered architecture
- No database dependency
- REST-based communication
- Efficient Top-10 selection using a Min Heap
- Modular and easily maintainable structure