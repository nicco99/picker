# Skip Selector App

## 📦 Component Architecture

Instead of building large monolithic components, this project emphasizes **breaking down UI into smaller, reusable parts**.

### ✅ Example: SkipCard Component

The `SkipCard` UI (used to display a skip bin) is **decomposed into 4 small focused components**:

#### 1. `CardContainer`
Handles layout, background, border, and selection styling.

#### 2. `CardImageHeader`
Displays the image of the skip and overlays the yard size label.

#### 3. `CardContent`
Shows the skip size, hire period, and total price.

#### 4. `CardAction`
Renders the selection button — shows a selected state or prompts the user to select.

**Why this matters:**
- 🧼 Clean separation of concerns
- 🔁 Reusable for other card types 
- 🧪 Easier to test each piece
- 🧩 Easy to override, extend, or replace just one section without touching others

---

## 🛠 Getting Started

### Installation

```bash
npm install
```

### Execution Command

```bash
npm run dev