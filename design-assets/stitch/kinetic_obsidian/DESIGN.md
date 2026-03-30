```markdown
# Design System Specification: High-Performance Automotive Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Kinetic Monolith"**

This design system is engineered to evoke the tension between raw mechanical power and surgical digital precision. Inspired by the aerodynamic silhouettes of Lamborghini and the minimalist interior interfaces of Tesla, the system rejects "standard" web layouts in favor of an editorial, high-end experience.

We break the "template" look through **Kinetic Asymmetry**. Elements are not always centered; they are weighted to feel like they are in motion. We utilize extreme typographic scales—where massive `display-lg` headlines dwarf functional `label-sm` metadata—to create an authoritative, luxury-tier hierarchy. This is not just a UI; it is a cockpit.

---

## 2. Colors & Surface Philosophy
The palette is rooted in absolute depth, using `#050505` (Surface Lowest) as the foundation to make the "Cyber Lime" accents feel radioactive and high-energy.

### Surface Hierarchy & Nesting
We strictly follow a **Tonal Layering** approach. Depth is not created by shadows, but by the physical stacking of increasingly "bright" dark tones.
- **Base Layer:** `surface` (#0e0e0e)
- **Sectioning:** Use `surface_container_low` (#131313) to define large content areas.
- **Interaction/Cards:** Use `surface_container_highest` (#262626) for nested elements.

### The Rules of Engagement
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined solely through background color shifts.
*   **The "Glass & Gradient" Rule:** Floating elements (Modals, Navigation Bars) must use `surface_variant` at 60% opacity with a `backdrop-blur` of 20px. 
*   **Signature Textures:** Main CTAs must use a linear gradient from `primary` (#9cff93) to `primary_container` (#00fc40) at a 135-degree angle to simulate the glow of an LED instrument cluster.

---

## 3. Typography
We utilize **Inter** as the sole typeface to maintain a tech-forward, engineered aesthetic. The hierarchy is designed to feel like a high-end automotive magazine.

*   **Display Scale (`display-lg` / 3.5rem):** Reserved for hero product names or performance stats. Letter-spacing should be set to -0.04em to feel "compressed" and aggressive.
*   **Headline Scale (`headline-md` / 1.75rem):** Used for feature section titles. Always paired with a `label-md` uppercase sub-header for an editorial feel.
*   **Functional Text (`body-md` / 0.875rem):** Optimized for readability on dark backgrounds. Use `on_surface_variant` (#adaaaa) for secondary descriptions to reduce eye fatigue.

---

## 4. Elevation & Depth
In this system, "Up" means "Brighter," not "Shadowier."

*   **The Layering Principle:** To lift a card, move it from `surface_container` to `surface_bright`. The contrast in HEX value provides all the separation necessary.
*   **Ambient Shadows:** If an element must float (e.g., a configurator drawer), use an ultra-diffused shadow: `box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5)`. Never use harsh, tight shadows.
*   **The "Ghost Border" Fallback:** For interactive inputs, use the `outline_variant` (#494847) at 20% opacity. This creates a "razor-thin" edge that feels like machined carbon fiber rather than a digital box.
*   **Glowing States:** For `primary` elements, add a subtle outer glow using a drop-shadow of the primary color at 30% opacity to simulate light emission.

---

## 5. Components

### Buttons: The "Ignition" Variants
*   **Primary:** Gradient fill (`primary` to `primary_container`). Large radius (`xl` / 3rem). On hover: scale 1.02 with a `primary` outer glow.
*   **Secondary:** Ghost style. `Ghost Border` (20% opacity) with `on_surface` text. Backdrop-blur enabled.
*   **Tertiary:** Text only, uppercase `label-md` with an animated underline that expands from the center on hover.

### Cards & Lists: The "Unified Surface"
*   **Forbid Dividers:** Do not use lines to separate list items. Use a `3.5rem` (`spacing-10`) vertical gap or a slight `surface` shift.
*   **Cards:** Use `lg` (2rem) corner radius. Content should be padded with `spacing-6` (2rem) to allow the "breathable luxury" feel.

### Input Fields: The "Telemetry" Style
*   **Default:** `surface_container_highest` background, no border, `sm` (0.5rem) radius.
*   **Active:** A 1px `Ghost Border` appears using `secondary` (#00e3fd), and the label shifts to the `secondary` color.

### Additional Components:
*   **Performance Gauges:** Use `secondary` (#00e3fd) for data visualization and progress bars to contrast against the `primary` "Cyber Lime" action color.
*   **Glass Modals:** Always 80% `surface_container_lowest` with a heavy backdrop blur to keep the user grounded in the background context.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use extreme white space. High-end brands aren't afraid of "empty" black space; it signifies premium exclusivity.
*   **Do** use asymmetrical image cropping. Let a car hood bleed off the edge of the screen.
*   **Do** use `secondary_fixed` (#26e6ff) for technical data (top speed, 0-60) to differentiate from user actions.

### Don't:
*   **Don't** use 100% white text for long body copy. Use `on_surface_variant` (#adaaaa) to maintain the "Dark Mode" premium feel.
*   **Don't** use sharp corners. Everything should feel sculpted and ergonomic (minimum `1rem` radius).
*   **Don't** use standard "blue" for links. If it's a link, it's either an intentional CTA or an editorialized text element. No "default" web styling allowed.
*   **Don't** use generic icons. Every icon must be minimalist line-art (0.75px or 1px stroke weight) to match the Inter typeface weight.```