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
  screenshot: {
    src: string | null;
    alt: string;
  };
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
    screenshot: {
      src: null,
      alt: "Shoro CRM operator dashboard",
    },
  },

  // TODO: refine with real context — placeholder copy below
  {
    slug: "shoro-eje-rating",
    index: "02",
    period: "2025 — now",
    status: "production",
    company: "Shoro",
    title: "Shoro Sellers Platform",
    tagline:
      "Admin platform for managing street-vendor profiles, QR-driven customer ratings, and review analytics. Replaced a legacy PHP MVC system end-to-end.",
    role: {
      label: "Full-stack, solo",
      context:
        "Schema, REST API, admin SPA, mobile bio view, integrations. Built the new stack on top of the existing database without breaking the legacy consumer-facing flow.",
    },
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Express",
      "Prisma",
      "MySQL",
      "Zustand",
      "TanStack Query",
      "Ant Design",
      "Docker",
    ],
    highlights: [
      "Migrated a legacy PHP MVC admin to a modern stack while preserving the public-facing rating flow",
      "Background worker monitors negative reviews and notifies managers within minutes",
      "Zero post-release issues since launch",
    ],
    metrics: [
      { label: "Migration scope", value: "PHP → JS" },
      { label: "Post-release bugs", value: "0" },
    ],
    screenshot: {
      src: null,
      alt: "Shoro Sellers admin dashboard",
    },
  },

  // TODO: refine with real context — placeholder copy below
  {
    slug: "voda-dispatcher",
    index: "03",
    period: "2024",
    status: "production",
    company: "Shoro",
    title: "Dispatcher Mobile App",
    tagline:
      "Cross-platform mobile app for delivery dispatchers. Drag-and-drop order queue, real-time status sync with the customer-facing platform.",
    role: {
      label: "Mobile, solo",
      context: "Designed and shipped from requirements to release. Single-handed delivery.",
    },
    stack: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "React Query", "AsyncStorage"],
    highlights: [
      "Drag-and-drop queue UI optimized for one-handed mobile use",
      "Real-time status synchronization with the partner customer app",
      "Daily production use by the delivery team",
    ],
    screenshot: {
      src: null,
      alt: "Dispatcher mobile app screens",
    },
  },

  // TODO: refine with real context — placeholder copy below
  {
    slug: "shoro-field-ops",
    index: "04",
    period: "2026 — in development",
    status: "in-development",
    company: "Shoro",
    title: "Field Operations Mobile App",
    tagline:
      "Mobile-first operations platform for field managers. Shift wizards, route planning, QR-based inventory, offline-first auth. Designed end-to-end from requirements to schema to UI.",
    role: {
      label: "Full-stack, solo",
      context:
        "Requirements gathering, Prisma schema, NestJS API, React Native UI. Designed the integration contract with the legacy 1C system as a single GET endpoint.",
    },
    stack: [
      "React Native",
      "Expo SDK 54",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "NativeWind",
      "Zustand",
    ],
    highlights: [
      "Integration contract with legacy 1C — single GET endpoint, minimal partner workload",
      "Custom 4-step shift wizards with haptic feedback and gesture controls",
      "All UI components built from scratch — no UI library dependency",
      "Offline-first auth with secure storage and hydration gates",
    ],
    screenshot: {
      src: null,
      alt: "Field operations mobile app",
    },
  },
];
