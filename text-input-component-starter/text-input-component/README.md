## Text Input Component (GreatFrontEnd)

## Overview  
This challenge was to build a reusable text input component as part of a design system.
Text input components are commonly used in forms and data entry interfaces across applications.

The goal was to follow the provided design closely, ensure the inputs work correctly across browsers,
and support different states such as normal, focused, filled, disabled, and error states.

---

## What I built  
I built a simple form that demonstrates a versatile text input component with:

    email input field  
    name input field  
    password input field  
    labels associated with each input  
    error messages shown when validation fails  
    a submit button to trigger validation  
    
    I also added **custom styling** to make the inputs and form visually clean and easy to use.

---

## How I implemented it (simple explanation)

1) HTML structure  
I used a semantic HTML form structure:

    the entire form is wrapped inside a `<form>` element  
    each input has a corresponding `<label>`  
    labels are linked to inputs using the `for` and `id` attributes  
    separate containers are used to display error messages for each input  
    
    This ensures good accessibility and allows clicking on the label to focus the input field.

---

2) Styling the input component  
    I added custom CSS styling to improve the look and usability of the component:
    
    the form is centered on the page  
    inputs are stacked vertically using flexbox  
    padding and border-radius are applied to inputs and buttons  
    background colors and borders are used to clearly define input fields  
    buttons are styled to look clickable and visually distinct  
    
    These styles make the component easier to read and interact with.

---

3) Input states handling  
    The inputs support multiple states:
    
    normal state when the page loads  
    focused state using the browser’s default focus behavior  
    error state when validation fails (red border)  
    valid state for the password input when all conditions are met (green border)  
    
    These visual states help users understand what action is required.

---

4) Validation logic (JavaScript)  
    I added JavaScript to handle form validation on submit:
    
    email and name fields are checked for empty values  
    password validation checks for:
    minimum length  
    at least one uppercase letter  
    at least one lowercase letter  
    at least one number  
    at least one special character  
    
    If validation fails:
    an error message is displayed below the input  
    the input border turns red  
    
    If validation passes:
    the password input border turns green  
    
    This simulates real-world form validation behavior.

---

5) Error and hint messages  
    Error messages are displayed directly below the related input field.
    This makes it clear which input needs correction and why.

---

6) Cross-browser behavior  
    The solution uses standard HTML, CSS, and JavaScript features,
    so it works consistently across modern browsers like Chrome, Firefox, and Safari.

---

## Tech Stack  
HTML  
CSS  
JavaScript  

---

## Notes / What I learned  
Text input components need both visual styling and behavioral logic.  
Adding custom styling improves usability and overall user experience.  
Associating labels with inputs improves accessibility.  
Clear validation feedback helps users fix errors quickly.
