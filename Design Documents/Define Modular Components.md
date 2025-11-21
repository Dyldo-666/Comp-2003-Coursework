1. Reusable Components Plan (Global UI Library)

These components belong in:

/src/components/


They are pure UI, not tied to any feature. Reusable across pages and modules.

🔷 Global Layout Components
Component	Purpose
Navbar	Top navigation, includes links, logo, dropdowns.
Footer	Global footer with links, socials, copyright.
LayoutWrapper	Root wrapper for pages — handles spacing, max-width grid, etc.
SectionWrapper	Used to standardize padding, spacing, alignment for all sections.
🔷 Global UI Elements
Component	Purpose
Button	Primary, secondary, ghost, icon-only.
Input	Text input, textarea, password, search input.
Select	Dropdown using React Aria semantics.
Modal	Reusable popup modal with animations.
Card	Generic card wrapper for content, used across features.
Badge	Small tag indicators (new, beta, category).
Spinner / Loader	Global loading animation.
🔷 Data Display Components
Component	Purpose
Carousel	Reusable image or content slider (wrapper for Swiper).
Accordion	FAQ sections, collapsible lists.
Tabs	Switch between tab contents.
StatsGrid	Display metrics (numbers, icons, labels).
🔷 Form Components
Component	Purpose
FormField	Wrapper for label + error text.
Checkbox	Checkboxes with form integration.
RadioGroup	Multiple-choice selections.
SubmitButton	Button with loading state for forms.
🔷 Feedback Components
Component	Purpose
ToastProvider	Wrapper for react-hot-toast.
Alert	Success / error banners.
EmptyState	Displayed when lists are empty.
Component Folder Structure (Reusable UI)
src/components/
  layout/
    Navbar.tsx
    Footer.tsx
    LayoutWrapper.tsx
    SectionWrapper.tsx
  ui/
    Button.tsx
    Card.tsx
    Input.tsx
    Select.tsx
    Spinner.tsx
    Badge.tsx
  display/
    Carousel.tsx
    Tabs.tsx
    Accordion.tsx
    StatsGrid.tsx
  form/
    FormField.tsx
    Checkbox.tsx
    RadioGroup.tsx
    SubmitButton.tsx
  feedback/
    Alert.tsx
    EmptyState.tsx

2. Modular Component Structure (Feature-Based Architecture)

You will define separate modules for each feature or page.

Example:

/src/modules/
  home/
  auth/
  contact/
  pricing/
  about/
  blog/


Each module has its own isolated components, hooks, API handlers, etc.

Module Structure Template

Each module has:

module/
  components/   <-- UI pieces only this module uses
  api/          <-- axios fetchers for this module
  hooks/        <-- logic unique to this module
  utils/        <-- small helpers
  types/        <-- type definitions
  index.ts      <-- exports for clean importing

🔷 Example: Home Module
src/modules/home/
  components/
    Hero.tsx
    Features.tsx
    Testimonials.tsx
    CTASection.tsx
  api/
    getHomeStats.ts
  hooks/
    useHeroAnimations.ts
  utils/
    transformHomeData.ts
  types/
    HomeStats.ts
  index.ts

Page usage:

pages/index.tsx

import MainLayout from "@/components/layout/LayoutWrapper";
import { Hero, Features, Testimonials } from "@/modules/home";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Testimonials />
    </MainLayout>
  );
}

🔷 Example: Auth Module
src/modules/auth/
  components/
    LoginForm.tsx
    RegisterForm.tsx
  api/
    login.ts
    register.ts
  hooks/
    useAuth.ts
  types/
    AuthResponse.ts
  index.ts

🔷 Example: Contact Module
src/modules/contact/
  components/
    ContactForm.tsx
    ContactInfo.tsx
  api/
    sendContactMessage.ts
  hooks/
    useContactForm.ts
  utils/
    validateContactForm.ts
  index.ts

3. Final Complete Architecture
/src
  /components      # Global reusable UI
    /layout
    /ui
    /display
    /form
    /feedback
  /modules         # Feature-based components
    /home
    /auth
    /contact
    /pricing
  /layouts         # Page-level wrappers
  /services        # API clients, axios setup
  /store           # Redux store + slices
  /hooks           # Global hooks
  /utils           # Pure helper functions
  /types           # Global TS types
  /pages           # Next.js page routes