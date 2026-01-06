GreatFrontEnd Projects Challenge – Blog Card

Welcome to the GreatFrontEnd Projects platform!  
This project is my solution to the **Blog Card challenge**, where the goal was to build a clean, responsive editorial card UI following the provided design guidelines.

---

Getting started

Overview  
This challenge was to build a **blog card UI** that displays editorial content.

The card includes:
- a cover image  
- a content category tag  
- a blog title  
- a short description  
- a call-to-action (CTA) link  

The goal was to follow the design closely, keep the UI visually clean, and ensure it works well on both desktop and mobile screens.

---

What I built  
I built a single blog card component that includes:
- a large cover image at the top of the card  
- a pill-shaped category tag  
- a bold blog title  
- a short descriptive paragraph  
- a “Read more →” CTA link with hover interaction  

The card is centered on the page and adapts smoothly to different screen sizes.

---

How I implemented it

Component structure  
I implemented the blog card as a single React component called `Card`.

The structure is kept simple:
- an outer container that wraps the entire card  
- an image placed at the top of the card  
- a content section that holds the category tag, title, description, and CTA link  

This structure makes the component easy to manage, style, and reuse.

---

Card layout and sizing  
The card uses a fixed maximum width so it remains readable:

max-width: 360px  
width: 100%  

This ensures:
- on small screens, the card shrinks to fit  
- on larger screens, the card does not stretch too wide  

---

Image handling  
The cover image is styled to stay clean and consistent across devices:
- a fixed height is applied  
- width is set to 100%  
- object-fit: cover prevents image distortion  
- rounded corners and overflow handling keep the image aligned with the card shape  

---

Category tag styling  
The category tag (“Interior”) is styled as a pill:
- soft border and color styling  
- rounded-full shape  
- padding for spacing  
- w-fit so the tag wraps only its text  

This visually separates the category from the rest of the content.

---

Typography and spacing  
- The blog title uses a larger font size and bold weight to stand out  
- The description text uses a muted gray color for readability  
- Margins and padding are applied consistently to maintain clean spacing  

---

CTA link and interactivity  
The “Read more →” CTA is implemented as a standard anchor tag.

For interactivity:
- the text color changes on hover  
- inline-flex is used so the arrow aligns properly with the text  
- group-hover ensures the arrow and text change together  

This provides clear visual feedback when users interact with the link.

---

Page centering  
The card is centered on the page using Flexbox on the body:

display: flex  
justify-content: center  
align-items: center  
min-height: 100vh  

This keeps the card centered across different screen sizes.

---

Tech Stack  
HTML  
CSS  
React (via CDN)  
Tailwind CSS  

---

What I learned  
- Tailwind utility classes make it easy to build clean layouts quickly  
- Using max-width with full width helps keep components responsive  
- Small UI details like shadows, rounded corners, and spacing significantly improve visual quality  
- Hover interactions make simple UI components feel more polished and interactive  

---

Completing the challenge  
This project was completed as part of a **GreatFrontEnd practice challenge** to strengthen frontend UI development skills, including layout, styling, responsiveness, and component-based design.

---


