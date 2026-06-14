/**
 * INTRASOMNIA - VISUAL DESIGN SYSTEM DOCUMENTATION
 * 
 * A comprehensive design system for a contemporary independent record label,
 * art practice, and cultural institution.
 * 
 * Core Principles:
 * - Material Discipline: Restraint, consistency, and intentional structure
 * - Emotional Intelligence: Clarity, hierarchy, and respectful communication
 * 
 * The system prioritizes:
 * - Typography-driven design
 * - Clear hierarchy and structure
 * - Accessibility and legibility
 * - Performance and scalability
 * - Dark mode aesthetic (contemporary gallery standard)
 */

/* ============================================
   DESIGN PRINCIPLES
   ============================================ */

/**
 * 1. MATERIAL DISCIPLINE
 * 
 * Structure and restraint communicate respect for the audience's time and
 * attention. Every element has a clear function and hierarchy.
 * 
 * Guidelines:
 * - Use color consistently and sparingly
 * - Establish clear visual hierarchy through typography and spacing
 * - Maintain proportional relationships
 * - Avoid decorative elements that don't serve function
 * - Use white space to define relationships and create breathing room
 */

/**
 * 2. EMOTIONAL INTELLIGENCE
 * 
 * The design anticipates user needs and creates clear, respectful
 * communication patterns. Motion, interaction, and feedback should feel
 * purposeful rather than playful.
 * 
 * Guidelines:
 * - Provide clear affordances for interactive elements
 * - Use transitions that aid comprehension (fade in, scale in)
 * - Respect user preferences (prefers-reduced-motion, prefers-contrast)
 * - Ensure high contrast for legibility
 * - Make focus states obvious for keyboard navigation
 */

/* ============================================
   COLOR SYSTEM
   ============================================ */

/**
 * Color Palette
 * 
 * Primary: Black, White, Greys
 * - Used for all UI surfaces, text, and borders
 * - Greys are used for secondary and tertiary text
 * - No bright accent colors (avoids trend-driven design)
 * 
 * Usage:
 * - --color-black: Primary background
 * - --color-white: Primary text, buttons
 * - --color-grey-*: Hierarchy and contrast
 * 
 * Examples:
 * .btn-primary { background: #ffffff; color: #000000; }
 * .text-secondary { color: rgba(255, 255, 255, 0.75); }
 */

/* ============================================
   TYPOGRAPHY SYSTEM
   ============================================ */

/**
 * Font Family
 * 
 * Sans-serif system fonts for legibility and performance
 * - No web fonts (faster loading)
 * - Monospace fonts for code/technical content
 * 
 * Usage:
 * body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
 */

/**
 * Type Scale
 * 
 * Modular scale (1.125 ratio) for harmony and readability:
 * 
 * Display / Hero:        5.5rem - 4.5rem
 * Page Title (h1):       3.5rem - 2.5rem
 * Section Header (h2):   2rem - 1.75rem
 * Subsection (h3):       1.5rem - 1.25rem
 * Label (h5):            1rem - 0.875rem
 * Body:                  1rem
 * Small:                 0.875rem
 * Tiny:                  0.75rem
 * 
 * All headings use fluid typography (clamp) to scale smoothly across devices:
 * font-size: clamp(min, ideal, max);
 * 
 * Usage:
 * h1 { font-size: clamp(2.5rem, 6vw, 5.5rem); }
 */

/**
 * Font Weight
 * 
 * 300 - Light (rarely used)
 * 400 - Regular (body text, default)
 * 500 - Medium (headings, emphasis)
 * 600 - Semibold (labels, strong text)
 * 700 - Bold (rarely used, only when 600 insufficient)
 * 
 * Principle: Use weight for hierarchy, not as a default style
 */

/**
 * Line Height
 * 
 * 1.2  - Tight (headings)
 * 1.5  - Normal (forms, UI)
 * 1.75 - Relaxed (body paragraphs)
 * 2    - Loose (rarely used)
 * 
 * Larger line-height improves readability for long form content
 */

/**
 * Letter Spacing
 * 
 * -0.02em - Tight (headings)
 * 0       - Normal (default)
 * 0.02em  - Wide (labels, emphasis)
 * 0.05em  - Wider (small caps, all-caps)
 * 0.1em   - Widest (rare, decorative headings)
 */

/* ============================================
   SPACING SYSTEM
   ============================================ */

/**
 * Base Unit: 8px
 * 
 * All spacing uses multiples of 8px for consistency and alignment
 * 
 * Scale:
 * 4px   (--space-1)
 * 8px   (--space-2)
 * 12px  (--space-3)
 * 16px  (--space-4)
 * 20px  (--space-5)
 * 24px  (--space-6)
 * 32px  (--space-8)
 * 40px  (--space-10)
 * 48px  (--space-12)
 * ... up to 128px
 * 
 * Usage:
 * .component { padding: var(--space-6); }
 * .section { margin-bottom: var(--space-12); }
 */

/**
 * Vertical Rhythm
 * 
 * - Section padding: var(--space-16) to var(--space-24)
 * - Component spacing: var(--space-4) to var(--space-12)
 * - Text spacing: var(--space-2) to var(--space-6)
 * 
 * Create consistency by linking all spacing to the 8px grid
 */

/* ============================================
   GRID SYSTEM
   ============================================ */

/**
 * Responsive Grid Classes
 * 
 * .grid-1  - Single column (mobile)
 * .grid-2  - Two columns
 * .grid-3  - Three columns
 * .grid-4  - Four columns
 * .grid-6  - Six columns
 * .grid-12 - Twelve columns
 * .grid-auto - Responsive auto-fit
 * 
 * Usage:
 * <div class="grid grid-auto gap-lg">
 *   <div class="card">...</div>
 *   <div class="card">...</div>
 * </div>
 * 
 * Gap options: grid-gap-xs, grid-gap-sm, grid-gap-md, grid-gap-lg, grid-gap-xl
 */

/**
 * Layout Patterns
 * 
 * .container - Centered, max-width constrained container
 * .stack - Vertical flex layout (column)
 * .flex - Flex layout
 * .flex-center - Centered flex
 * .flex-between - Space-between flex
 */

/* ============================================
   BREAKPOINTS
   ============================================ */

/**
 * Mobile First Approach
 * 
 * 480px  - Small mobile
 * 768px  - Tablet
 * 1024px - Laptop
 * 1280px - Desktop
 * 1536px - Large desktop
 * 
 * Default styles apply to mobile, then enhance with media queries
 * 
 * Usage:
 * @media (min-width: 768px) {
 *   .grid { grid-template-columns: repeat(2, 1fr); }
 * }
 */

/* ============================================
   CONTAINER WIDTHS
   ============================================ */

/**
 * Content Containers
 * 
 * .container adapts based on breakpoint:
 * 
 * Mobile:    384px (20rem)
 * Tablet:    768px (48rem)
 * Laptop:    1024px (64rem)
 * Desktop:   1280px (80rem)
 * 
 * Padding: 24px-40px depending on screen size
 */

/* ============================================
   COMPONENT SYSTEM
   ============================================ */

/**
 * BUTTONS
 * 
 * Variants:
 * - .btn-primary:   Solid white on black (CTA)
 * - .btn-secondary: Outlined white (secondary action)
 * - .btn-tertiary:  Ghost (lowest priority)
 * 
 * Sizes:
 * - .btn-xs:  Extra small (12px text)
 * - .btn-sm:  Small (14px text)
 * - .btn-base: Default (16px text)
 * - .btn-lg:  Large (18px text)
 * - .btn-xl:  Extra large (20px text)
 * 
 * Special:
 * - .btn-block: Full width
 * - .btn-icon:  Icon-only button
 * 
 * Hover States:
 * - Primary: Lighter grey background
 * - Secondary: Subtle background + border
 * - Tertiary: Reduced opacity
 * 
 * Usage:
 * <button class="btn btn-primary btn-lg">Click Me</button>
 * <a href="#" class="btn btn-secondary">Link</a>
 */

/**
 * CARDS
 * 
 * Variants:
 * - .card: Standard card
 * - .card-compact: Less padding
 * - .card-large: More padding
 * 
 * Structure:
 * .card-header - Title area with bottom border
 * .card-body - Main content
 * .card-footer - Actions/metadata
 * 
 * Hover State:
 * - Border becomes more visible
 * - Subtle shadow appears
 * - Slight upward movement (2px)
 * 
 * Usage:
 * <div class="card">
 *   <div class="card-header"><h3>Title</h3></div>
 *   <div class="card-body">Content</div>
 *   <div class="card-footer">Actions</div>
 * </div>
 */

/**
 * NAVIGATION
 * 
 * Horizontal or vertical nav links
 * 
 * States:
 * - Default: Full opacity
 * - Hover: Reduced opacity + underline appears
 * - Active: Full opacity + underline visible
 * 
 * Usage:
 * <nav class="nav nav-horizontal">
 *   <a href="#" class="nav-link active">Active</a>
 *   <a href="#" class="nav-link">Link</a>
 * </nav>
 */

/**
 * FORM ELEMENTS
 * 
 * Inputs, selects, textareas follow consistent styling:
 * - Border: 1px solid rgba(255, 255, 255, 0.1)
 * - Background: rgba(255, 255, 255, 0.02)
 * - Padding: 12px 16px
 * 
 * Focus State:
 * - Border becomes more visible
 * - Box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1)
 * - Background slightly lighter
 * 
 * Usage:
 * <div class="form-group">
 *   <label class="label" for="email">Email</label>
 *   <input type="email" id="email" class="input" required>
 * </div>
 */

/* ============================================
   INTERACTION & HOVER STATES
   ============================================ */

/**
 * Hover Guidelines
 * 
 * Apply one or more of these strategies:
 * 
 * 1. Opacity Change
 *    opacity: 0.85 on hover
 *    Appropriate for images, icons, text
 * 
 * 2. Background Change
 *    background-color: rgba(255, 255, 255, 0.05)
 *    Appropriate for interactive containers
 * 
 * 3. Underline
 *    width: 0% -> 100% on hover
 *    Appropriate for links, nav items
 * 
 * 4. Lift Effect
 *    transform: translateY(-4px)
 *    box-shadow: var(--shadow-lg)
 *    Appropriate for cards, CTAs
 * 
 * 5. Scale
 *    transform: scale(0.98) on active
 *    Appropriate for buttons
 * 
 * Timing:
 * - Hover transitions should be 200ms
 * - Use cubic-bezier(0.4, 0, 0.2, 1) easing
 * 
 * Do NOT:
 * - Use bright colors or heavy shadows
 * - Apply more than 2-3 effects simultaneously
 * - Animate on hover alone (combine with focus state)
 */

/**
 * Focus States (Keyboard Navigation)
 * 
 * All interactive elements must have visible focus states:
 * 
 * Default: outline: 2px solid #ffffff; outline-offset: 2px;
 * 
 * This applies to:
 * - Links
 * - Buttons
 * - Form inputs
 * - Navigation items
 * 
 * Override default browser outline (never remove without replacement)
 */

/* ============================================
   MOTION & ANIMATION GUIDELINES
   ============================================ */

/**
 * General Motion Principles
 * 
 * - Animations should be purposeful, not decorative
 * - Duration: 200-300ms for most interactions
 * - Easing: cubic-bezier(0.4, 0, 0.2, 1) (ease-in-out)
 * - Avoid heavy parallax or complex animations
 * - Respect prefers-reduced-motion user preference
 * 
 * Pre-built Animations:
 * 
 * .animate-fade-in
 * Fade from 0% to 100% opacity over 300ms
 * Use for: New content appearing, modals, overlays
 * 
 * .animate-slide-up
 * Slide up 16px with fade over 300ms
 * Use for: Page transitions, modal entry
 * 
 * .animate-scale-in
 * Scale from 95% with fade over 300ms
 * Use for: Expandable content, tooltips
 * 
 * Timing Classes:
 * - var(--transition-fast): 150ms
 * - var(--transition-base): 200ms (most common)
 * - var(--transition-slow): 300ms
 * - var(--transition-slower): 500ms
 * 
 * Easing Functions:
 * - var(--easing-linear): linear
 * - var(--easing-in): 0.4, 0, 1, 1 (fast start)
 * - var(--easing-out): 0, 0, 0.2, 1 (smooth end)
 * - var(--easing-in-out): 0.4, 0, 0.2, 1 (natural feel)
 */

/**
 * Reducing Motion
 * 
 * @media (prefers-reduced-motion: reduce) respects user preferences
 * All animations and transitions become 0.01ms (instant)
 * Scroll behavior becomes auto (no smooth scroll)
 * 
 * This is automatically handled by the design system
 */

/* ============================================
   ACCESSIBILITY
   ============================================ */

/**
 * WCAG 2.1 AA Compliance
 * 
 * Color Contrast:
 * - Text on background: 4.5:1 ratio minimum
 * - Large text: 3:1 ratio minimum
 * - White on black achieves AAA (7:1)
 * - Grey-500 on black: 4.6:1 (AA large)
 * 
 * Focus Indicators:
 * - All interactive elements must show focus state
 * - Outline: 2px solid white, 2px offset
 * - Never remove outline without replacement
 * 
 * Semantic HTML:
 * - Use <button>, <a>, <nav>, <main>, <section>
 * - Use <label> for form fields
 * - Use <h1>, <h2>, <h3> for hierarchy
 * 
 * ARIA Labels:
 * - Use aria-label for icon buttons
 * - Use aria-hidden="true" for decorative elements
 * - Use aria-current="page" for active nav
 * 
 * Keyboard Navigation:
 * - Tab through all interactive elements in logical order
 * - Focus trapping in modals
 * - Escape key to close modals
 * 
 * Reduced Motion:
 * - Respect prefers-reduced-motion setting
 * - All animations become instant
 * - Transitions become 0.01ms
 * 
 * Screen Readers:
 * - Use .sr-only for screen reader only text
 * - Provide skip links for main content
 * - Use semantic landmarks
 */

/**
 * Testing:
 * - Test with keyboard only (no mouse)
 * - Test with screen reader (NVDA, JAWS, VoiceOver)
 * - Test color contrast with WebAIM contrast checker
 * - Test focus visibility at 200% zoom
 */

/* ============================================
   IMPLEMENTATION GUIDE
   ============================================ */

/**
 * How to Use This System
 * 
 * 1. Import the design system CSS first
 *    <link rel="stylesheet" href="design-system.css">
 * 
 * 2. Use semantic HTML structure
 *    <div class="container">
 *      <section class="section">
 *        <h2 class="h2">Title</h2>
 *        <div class="grid grid-auto">
 *          <article class="card">...</article>
 *        </div>
 *      </section>
 *    </div>
 * 
 * 3. Apply component classes
 *    <button class="btn btn-primary btn-lg">Action</button>
 * 
 * 4. Use spacing utilities sparingly
 *    <div class="mt-8 mb-12">...</div>
 * 
 * 5. Create custom components as needed
 *    Use CSS custom properties (--color-*, --space-*, etc.)
 *    Extend rather than override
 * 
 * Example Custom Component:
 *    .hero {
 *      padding: var(--space-24);
 *      background-color: var(--color-bg-primary);
 *      border-bottom: 1px solid var(--color-border-primary);
 *    }
 */

/**
 * Common Patterns
 * 
 * HERO SECTION
 * <header class="hero">
 *   <div class="container">
 *     <h1 class="h1">Large Title</h1>
 *     <p class="text-lg">Subtitle</p>
 *   </div>
 * </header>
 * 
 * CARD GRID
 * <div class="grid grid-auto gap-lg">
 *   <article class="card">
 *     <div class="card-header"><h3>Title</h3></div>
 *     <div class="card-body">Content</div>
 *   </article>
 * </div>
 * 
 * BUTTON GROUP
 * <div class="flex gap-md">
 *   <button class="btn btn-primary">Primary</button>
 *   <button class="btn btn-secondary">Secondary</button>
 * </div>
 * 
 * FORM
 * <form>
 *   <div class="form-group">
 *     <label class="label">Field</label>
 *     <input type="text" class="input" required>
 *   </div>
 * </form>
 */

/**
 * Customization
 * 
 * To customize the system:
 * 
 * 1. Override CSS custom properties in your own CSS
 *    :root {
 *      --color-bg-primary: #111111;
 *    }
 * 
 * 2. Create new components that extend existing ones
 *    .card-highlighted {
 *      border: 2px solid var(--color-white);
 *    }
 * 
 * 3. Don't override base component classes
 *    (allows system updates without breaking code)
 */

/**
 * Performance Considerations
 * 
 * - System fonts loaded from system (no web font requests)
 * - Minimal CSS (no redundant code)
 * - CSS custom properties for maintainability
 * - Transitions use GPU-accelerated properties (transform, opacity)
 * - No unnecessary animations or hover effects
 * - Lazy load images with data-src attribute
 * 
 * Bundle size: ~15KB uncompressed, ~3KB gzipped
 */
