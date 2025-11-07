# 🧱 Component Mapping – Legacy → Rebuild (Group 33)

| Legacy Path | Purpose | New Target (modern-site) | Notes |
|---|---|---|---|
| `src/pages/index.tsx` | Homepage | `app/(public-pages)/page.tsx` + split into `components/marketing/*` | Extract Hero, Testimonials/Carousel, Feature Icons, CTA, Footer blocks |
| `src/pages/our-story.tsx` | About / Story | `app/(public-pages)/our-story/page.tsx` | Reuse marketing blocks; ensure mobile-first |
| `src/pages/pricing/index.tsx` | Pricing grid | `app/(public-pages)/pricing/page.tsx` | Add responsive cards; a11y focus |
| `src/pages/pricing/payment.tsx` | Payment page | `app/(public-pages)/pricing/payment/page.tsx` + `components/layout/PaymentLayout.tsx` | Review `creditCard.ts`, validation with `react-hook-form` |
| `src/pages/pricing/prototype.tsx` | Prototype view | `app/(public-pages)/pricing/prototype/page.tsx` | Optional: remove if obsolete |
| `src/pages/blog/index.tsx` | Blog list | `app/(public-pages)/blog/page.tsx` | Consider fetching posts via lib/api client |
| `src/pages/blog/[id].tsx` | Blog detail | `app/(public-pages)/blog/[id]/page.tsx` | Dynamic route in App Router |
| `src/pages/privacy.tsx` | Privacy page | `app/privacy/page.tsx` | Static route |
| `src/pages/_app.tsx` | Legacy app shell | `app/layout.tsx` | App Router replaces `_app` |
| `src/pages/api/hello.ts` | Sample API | `app/api/health/route.ts` | Convert to App Router route handlers |

### Shared Components
| Legacy | New | Notes |
|---|---|---|
| `components/Layout/Layout.tsx` | `components/layout/SiteLayout.tsx` | Global layout wrapper (App Router `layout.tsx` handles outer shell) |
| `components/Header/Navbar.tsx`, `Hamburger.tsx`, `GoogleTag.ts` | `components/header/*` | Keep GA but update to GA4 or alt analytics |
| `components/Footer/*` | `components/footer/*` | Keep structure; improve a11y landmarks |
| `components/Form/*` | `components/forms/*` | Ensure ARIA, labels, error text, keyboard nav |
| `components/Modal/Modal.tsx` | `components/ui/Modal.tsx` | Focus trap, ESC close, labeledby/aria-hidden |
| `components/Slideshow/*` | `components/marketing/Carousel.tsx` | Replace with accessible carousel if needed |
| `components/StyledContainer/*` | `components/marketing/*` | Consolidate naming; dedupe `HowItWork/HowWork` |

### Utilities & Hooks
| Legacy | New | Notes |
|---|---|---|
| `hooks/useMediaQuery.tsx` | `hooks/useMediaQuery.ts` | Keep; ensure SSR safety |
| `utils/creditCard.ts` | `lib/payments/creditCard.ts` | Strengthen validation; unit tests |
| `utils/filterClassNames.ts` | `lib/style/cn.ts` | Tailwind class combiner |

