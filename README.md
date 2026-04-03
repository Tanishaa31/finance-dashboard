# 💰 Finance Dashboard

A simple and responsive finance dashboard built using React and Tailwind CSS.  
It helps users track income, expenses, and overall financial trends.

---

## Features

### Dashboard Overview
- Income, Expenses, and Balance summary cards
- Balance trend (Line Chart)
- Spending breakdown (Pie Chart)

### Transactions
- View list of transactions
- Includes:
  - Date
  - Amount
  - Category
  - Type (Income / Expense)

### Search & Filter
- Search transactions by category

### Role-Based UI
- **Viewer**
  - Can only view data
- **Admin**
  - Can add transactions (UI-based)

### Insights
- Highest spending category
- Income vs Expenses comparison
- Balance trend observation

---

## UI/UX Features

- Clean and modern design
- Responsive layout (mobile + desktop)
- Hover effects for better interaction
- Proper spacing and readability
- Empty state handling

---

## Tech Stack

- React (Vite)
- Tailwind CSS
- Recharts (for charts)

---

## Project Structure

src/
│
├── components/
│ ├── Navbar.jsx
│ ├── SummaryCards.jsx
│ ├── Transactions.jsx
│ ├── Charts.jsx
│
├── App.jsx
└── main.jsx
