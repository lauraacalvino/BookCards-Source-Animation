# 📚 Nexus Library — Interactive Book Cards UI Resource

A **reusable front-end UI resource** for interactive book cards featuring animated statistics and 3D flip effects.  
Built to showcase literary collections through micro-interactions, perspective-driven layouts, and dynamic data visualization.

*This is intended as a UI pattern / reusable resource, not a complete product.*


## ✨ Features

* **3D Flip Interaction**: Double-sided card system (Front: Content / Back: Stats) with smooth CSS transforms.
* **Animated Statistics**: Dynamic progress bars that animate using precise timelines when the card is flipped.
* **Staggered Entrance**: Hero section with sequenced animations for the title and card deck on page load.
* **Contextual Data**: Custom `data-*` attributes to manage different metrics (Speed, Popularity, Sales) for each book.
* **Modern UI Aesthetics**: Clean interface using Google Sans Flex, mesh gradients, and sophisticated shadows.
* **Responsive Grid**: Flexbox-based layout that adapts the card deck to different screen sizes.


## 🛠 Technologies

* **HTML5** (Semantic structure and data-attributes)
* **CSS3** (Custom properties, 3D transforms, `clamp()` for responsiveness, and radial gradients)
* **JavaScript (ES6+)** (DOM manipulation and event handling)
* **Anime.js** (Timeline sequencing and easing-based animations)


## 🌱 What I Learned

While creating this UI resource, I improved my understanding of:

* **3D Transform Management**: Coordinating `preserve-3d` and `backface-visibility` to create seamless card-flip mechanics.
* **Animation Sequencing**: Using `anime.timeline()` to create a professional "entrance" effect for the entire interface.
* **Dynamic Width Transitions**: Synchronizing JavaScript data-fetching with Anime.js to fill progress bars with specific delays.
* **Interaction Design**: Implementing "Volver" (Return) logic to ensure a fluid user journey between information and metrics.
* **Visual Hierarchy**: Crafting a "Hero" experience where typography and motion guide the user's attention.
* **Reusable UI Patterns**: Designing components where the logic (JS) is decoupled from the specific style (CSS) for easy scaling.


## 📍 The Process

This resource was built as a **library-style UI component** to:

1.  **Engage Readers**: Move beyond static book covers by adding a layer of interactive "ratings" and stats.
2.  **Optimize Motion**: Using `cubic-bezier` curves for the flip effect to give the cards a "weighted" and premium feel.
3.  **Ensure Clarity**: Keeping the back of the card minimal to focus entirely on the data visualization (Progress bars).
4.  **Refine Typography**: Leveraging modern variable fonts (Google Sans Flex) to ensure readability across all card states.


## 🚀 Author

Developed with 💙 by **Laura Calviño**.

* **GitHub**: [github.com/lauraacalvino](https://github.com/lauraacalvino)
* **Project**: Nexus Library UI Pattern


## 📺 Demo do Proxecto




https://github.com/user-attachments/assets/9acd48a2-67aa-4659-a4fd-179b3000e674


