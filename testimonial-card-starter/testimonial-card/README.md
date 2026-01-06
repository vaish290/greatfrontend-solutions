# Testimonial Card (GreatFrontEnd)

## Overview
This challenge was to build a simple **testimonial card UI** using basic HTML and CSS.  
The card shows:
- a profile image (avatar)
- the person’s name and role
- a short testimonial message

The goal was to make it look clean and centered, and also work nicely on mobile screens.

---

## What I built
I created a single card component with:
- a header row containing the avatar + user details
- a text section for the testimonial quote

---

## How I implemented it (simple explanation)

### 1) HTML structure
I kept the HTML very simple:
- `#card` is the main container for the testimonial.
- Inside it, `#innercard` holds the top row (image + name/designation).
- `#details` holds the name and role text.
- `#quote` holds the testimonial paragraph.

This makes the layout easy to style with flexbox.

---

### 2) Centering the card
I centered the card on the screen using flexbox on the `body`:
- `display: flex`
- `justify-content: center`
- `align-items: center`
- `min-height: 100vh`

This keeps the card centered on both desktop and mobile.

---

### 3) Card styling (UI polish)
To make the card look like a real UI component:
- I added a white background
- rounded corners (`border-radius`)
- a shadow (`box-shadow`)
- padding for spacing inside the card

---

### 4) Layout inside the card (Flexbox)
For the top section (`#innercard`), I used `inline-flex` with a `gap` so:
- the profile image and text sit next to each other
- spacing between them stays consistent

For the details section (`#details`), I used a column layout so:
- the name is on top
- the role is below it

---

### 5) Avatar styling
To make the profile image look correct:
- I set a fixed size (`40px x 40px`)
- made it circular using `border-radius: 50%`

---

### 6) Responsive sizing
Instead of using a fixed width, I used:
`width: min(92vw, 360px);`

This means:
- on small screens the card shrinks to fit
- on larger screens it doesn’t become too wide

---

## Tech Stack
- HTML
- CSS (Flexbox)

---

## Notes / What I learned
- Flexbox is the easiest way to align items in a row (avatar + text).
- Using `min(92vw, 360px)` is a simple way to make components responsive.
- Small UI polish (shadow, border-radius, padding) makes a big difference.
