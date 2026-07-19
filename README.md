# 🎬 Cinema Ticket Reservation

> Pick your seats, pay, and get your ticket — all in the browser.


---

## 🎥 Sneak Peek
![Cinema Ticket Demo](Cinema%20Ticket.gif)
```
┌─────────────────────────────────┐
│           🎬 Screen             │
├─────────────────────────────────┤
│  🟩 🟩 🟩 🟩 🟩 🟩 🟩 🟩      │
│  🟩 🟨 🟨 🟩 🟩 🟩 🟩 🟩      │
│  🟩 🟩 🟩 🟩 🟩 ⬜ ⬜ 🟩      │
│  🟩 🟩 🟩 🟩 🟩 🟩 🟩 🟩      │
│  🟩 🟩 🟩 🟩 🟩 🟩 🟩 🟩      │
├─────────────────────────────────┤
│  🟩 Available  🟨 Selected      │
│  ⬜ Reserved                     │
└─────────────────────────────────┘
```


---

## 📖 What is this?

A simple cinema booking app where you click on seats to select them, confirm your purchase, and get a printable invoice. Your reservations are saved locally, so they stick around even if you refresh the page.

Built with **TypeScript** to practice OOP concepts like generics, abstract classes, and interfaces.

---

## ✨ Features

- 🪑 Click seats to select/deselect them
- 💰 See your total and confirm before buying
- 🧾 Get a printable invoice after purchase
- 💾 Reservations persist across page reloads
- 🔄 Admin tools to clear data or check totals
- 🎨 Dark cinema-themed UI with smooth animations

---

## 🛠 Tech Stack

- **TypeScript** — strict, type-safe logic
- **Vanilla CSS** — Grid, Flexbox, dark theme
- **ES6 Modules** — clean imports, no bundler needed
- **localStorage** — simple client-side persistence

---

## 📂 Project Structure

```
src/
├── main.ts              # Entry point & event handlers
├── models/
│   ├── Cinema.ts        # Generic container class
│   ├── Reservable.ts    # Abstract base class
│   └── Seat.ts          # Seat logic, UI & storage
└── types/
    └── SeatInfo.ts      # Type definition

index.html               # Main page
style.css                # Styles + print layout
```

---

## 🚀 Getting Started

**You need:** [Node.js](https://nodejs.org/) (v16+) and Git

```bash
# Clone & enter the project
git clone https://github.com/faraz-hsn/cinema-ticket.git
cd cinema-ticket

# Install dependencies
npm install

# Build
npm run build

# Or watch for changes during development
npm run dev
```

Then open `index.html` in your browser — that's it!

---

## 📈 Roadmap

- [x] Seat selection & reservation
- [x] Invoice generation & print
- [x] localStorage persistence
- [x] Admin controls
- [ ] Movie selection screen
- [ ] Payment integration
- [ ] Mobile responsive layout
- [ ] User authentication
- [ ] Backend + database

---

## 👨‍💻 Author

**Faraz Hosseini**

---

## ⭐ Support

If you found this helpful, drop a ⭐ on the repo!
