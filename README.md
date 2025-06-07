# Skip Selector App

A sleek, interactive skip selection interface built with React, TypeScript, and Tailwind CSS. This project emphasizes reusable UI components, modern animation, and a clean developer experience.

---

## 📦 Component Architecture

This project demonstrates a modular and reusable design philosophy by **decomposing large components into smaller, focused ones**.

### ✅ SkipCard Breakdown

The `SkipCard` component is broken down into the following subcomponents:

#### 🔹 `CardContainer`

- Handles the outer layout and styling of the card.
- Supports animations on hover and when selected.
- Applies selection styling using conditional Tailwind classes.
- Makes the entire card clickable for a better UX.

#### 🔹 `CardImageHeader`

- Displays the skip image.
- Includes a hover animation for visual interactivity.
- Shows the skip size badge overlay (e.g., `4 Yards`).

#### 🔹 `CardBanner`

- Conditionally displays a warning banner if `allowed_on_road` is `false`.
- Highlights regulatory constraints clearly to the user.

#### 🔹 `CardContent`

- Renders:
  - Skip size and title
  - Hire period (e.g., `14 day hire`)
  - Total price with VAT
  - Postcode (e.g., `NR32`)
  - Info on whether the skip allows heavy waste

#### 🔹 `CardAction`

- Displays a select button or selected state.
- Uses Lucide icons for visual cues.
- Changes interaction and appearance when selected.

---

## ✨ Features

- ✅ **Tailwind CSS** only — no custom stylesheets
- 🧩 **Reusable modular components**
- 🖱️ **Hover animations** to reveal visual transitions
- 🛑 **Conditional banners** for compliance info
- 📱 **Responsive carousel-like layout** (3 cards on large screens, scrollable on mobile)
- 📍 Displays extra info like `postcode` and `allows_heavy_waste`

---

## 🛠 Getting Started

### Installation

```bash
npm install
```

### Local Execution on visual studio code

```bash
npm run dev
```
