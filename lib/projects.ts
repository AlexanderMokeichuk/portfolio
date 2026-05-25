export type ProjectStatus = "production" | "in-development";

export type Project = {
  slug: string;
  index: string;
  period: string;
  status: ProjectStatus;
  company: string;
  title: string;
  tagline: string;
  role: {
    label: string;
    context: string;
  };
  stack: string[];
  highlights: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
  hasCaseStudy?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "shoro-crm",
    index: "01",
    period: "2024 — now",
    status: "production",
    company: "Shoro",
    title: "Shoro CRM",
    tagline:
      "Enterprise sales & operations platform. Real-time call-to-customer matching, two-way sync with a partner ordering app, telephony-driven workflow for the call center.",
    role: {
      label: "Frontend, end-to-end",
      context:
        "Joined as junior. Earned ownership through delivery. Now sole frontend engineer running technical coordination across the stack — specs, integration calls, code review.",
    },
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "shadcn/ui",
      "WebSocket",
      "Axios",
      "Docker",
    ],
    highlights: [
      "Real-time incoming-call detection: Asterisk → backend lookup → WebSocket push → operator sees the customer card before the call connects",
      "Two-way integration with a partner ordering app — operators approve incoming orders; status updates flow back to the partner in real time",
      "Feature-based architecture across 17+ business modules (clients, sales, inventory, complaints, forwarders, regions, analytics)",
      "Migrated from plain Redux Toolkit to RTK Query for caching, interval polling, and request deduplication",
      "Zero production incidents under load through the full ownership period",
    ],
    metrics: [
      { label: "Daily orders", value: "~3K" },
      { label: "Client records", value: "32K+" },
      { label: "Business modules", value: "17+" },
    ],
    featured: true,
    hasCaseStudy: true,
  },
  {
    slug: "shoro-eje-rating",
    index: "02",
    period: "2025 — now",
    status: "production",
    company: "Shoro",
    title: "Shoro Sellers Platform",
    tagline:
      "Admin platform for managing Shoro's street-vendor network. CRUD over vendor profiles, QR-driven customer ratings, complaint routing, and analytics. Rebuilt a legacy PHP MVC admin end-to-end on a modern stack.",
    role: {
      label: "Full-stack, solo",
      context:
        "Owned the admin platform end-to-end: REST API, SPA, and the email-alert worker. The customer-facing rating app is built by a separate team — I integrate with it, not own it.",
    },
    stack: [
      "React 19",
      "TypeScript",
      "Express",
      "Prisma",
      "MySQL",
      "Zustand",
      "TanStack Query",
      "Ant Design",
      "Docker",
    ],
    highlights: [
      "Rebuilt a legacy PHP MVC admin as a REST API + SPA — chosen so I could own and extend it going forward",
      "Reproduced the full existing feature set, then improved UX: search, filtering, cleaner workflows",
      "Email-alert worker routes negative ratings straight to the complaints department",
      "Generates downloadable per-vendor QR codes that link to the customer rating app",
    ],
  },
  {
    slug: "voda-dispatcher",
    index: "03",
    period: "2024 — now",
    status: "production",
    company: "Shoro",
    title: "Field Delivery App",
    tagline:
      "Mobile app for field couriers. Replaced paper delivery sheets with a live order queue, drag-and-drop sorting, status sync, and on-route sales. Backed by the same CRM server.",
    role: {
      label: "Mobile, solo",
      context:
        "Designed and shipped the React Native app end-to-end. The backend is the existing CRM API; the customer-facing ordering app is a separate team's product.",
    },
    stack: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "React Query"],
    highlights: [
      "Replaced paper delivery sheets — couriers get a live daily order queue with drag-and-drop reordering",
      "Order statuses sync in real time to the CRM, and onward to 1C; customers see progress in the partner ordering app",
      "Grew with real usage: couriers started selling on routes, so I added client search by region/address and two sale flows — instant (completed on the spot) and request (lands in CRM for operator review)",
      "In daily production with ~30 couriers",
    ],
  },
  {
    slug: "shoro-field-ops",
    index: "04",
    period: "2026 — in development",
    status: "in-development",
    company: "Shoro",
    title: "Field Operations App",
    tagline:
      "Mobile platform for field managers servicing Shoro's vendor network — shift management, inventory hand-off, and end-of-day sales reporting. Replacing a paper-and-1C workflow. Built end-to-end: my schema, my API, my app.",
    role: {
      label: "Full-stack, solo",
      context:
        "Sole engineer from requirements to schema to UI. NestJS API, PostgreSQL via Prisma, React Native client. 1C remains the source of truth — I designed the exchange contract against it.",
    },
    stack: [
      "React Native",
      "Expo SDK 54",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "Redux Toolkit",
    ],
    highlights: [
      "Managers open shifts per vendor, track inventory hand-off through the day, and submit end-of-day reports — replacing paper sheets and manual 1C entry for ~50 managers across 501 vendors",
      "Designed a versioning system end-to-end: a min/max version table, build-time version signing, and a periodic check that returns OK / SOFT_UPDATE / FORCE_UPDATE — soft shows an update banner, force blocks the app until updated",
      "Built versioning deliberately after hitting forced-update pain on an earlier app without backend control — this time I own the backend, so I solved it properly",
      "1C is the source of truth for managers, points, products, and vendors; I designed the exchange contract and am integrating against it",
    ],
  },
];
