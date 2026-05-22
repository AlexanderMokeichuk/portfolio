import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/lib/projects";
import { Badge } from "@/components/ui/Badge";
import { CaseStudyHero } from "./_components/CaseStudyHero";
import { CaseStudySection } from "./_components/CaseStudySection";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.filter((p) => p.hasCaseStudy === true).map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project || !project.hasCaseStudy) {
    return {};
  }

  return {
    title: `${project.title} — Alexander Mokeichuk`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project || !project.hasCaseStudy) {
    notFound();
  }

  if (slug === "shoro-crm") {
    return <ShoroCrmCaseStudy project={project} />;
  }

  return (
    <>
      <CaseStudyHero project={project} />
      <CaseStudySection label="01 / Context" title="Case study coming soon">
        <p className="text-ink-2 leading-relaxed">Deep dive for this project is being written.</p>
      </CaseStudySection>
    </>
  );
}

function ShoroCrmCaseStudy({
  project,
}: {
  project: NonNullable<ReturnType<typeof PROJECTS.find>>;
}) {
  return (
    <>
      <CaseStudyHero project={project} />

      <CaseStudySection label="01 / Context" title="What Shoro CRM is, and where I joined.">
        <div className="text-ink-2 space-y-5 leading-relaxed">
          <p>
            <span className="text-ink font-medium">Shoro</span> is one of the largest beverage
            producers in Kyrgyzstan — national drinks, water, snacks — distributed through a dense
            network of street vendors and direct-delivery clients across Bishkek.
          </p>
          <p>
            The CRM is the daily operating system for the sales department. Operators field calls,
            create and edit orders, manage client cards, track inventory, sync with field couriers.
            The platform handles <span className="text-ink font-medium">~3,000 orders per day</span>{" "}
            against a client base of <span className="text-ink font-medium">32K+ records</span>.
          </p>
          <p>
            When I joined as a junior, the backend was half-finished — built by an external agency
            that hadn&apos;t delivered. There was no frontend. Direction came from management until
            I earned the latitude to make implementation calls myself. By the time the original team
            disbanded, I was the only frontend engineer left.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection label="02 / My role" title="Junior to sole frontend owner.">
        <div className="text-ink-2 space-y-5 leading-relaxed">
          <p>
            I started under a senior engineer&apos;s direction. As trust accumulated, I took
            implementation decisions: which patterns to use, how to model state, when to push back
            on backend contracts that didn&apos;t fit the UI.
          </p>
          <p>
            The team started as four — two backend (Java), two frontend. The other frontend engineer
            left. Two juniors joined for a stretch; I onboarded them, gave tasks, ran code review,
            helped the backend junior too even when it wasn&apos;t my work.
          </p>
          <p>
            New management came in and budget cuts followed. The juniors were let go. The remaining
            backend engineer eventually left of his own. Replacement hasn&apos;t landed — so my
            scope expanded into new full-stack territory (Node.js) for adjacent product work, while
            I keep the CRM running.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection
        label="03 / Architecture"
        title="Decisions that survived contact with production."
      >
        <div className="space-y-12">
          <ArchDecision
            title="Feature-based architecture"
            why="The CRM has 17+ distinct business modules — clients, sales, inventory, complaints, regions, forwarders, agents, analytics, and so on. Splitting by feature instead of by type (components/hooks/services) keeps every concern isolated."
            tradeoff="Some duplication early on. Worth it: when I refactor one feature, nothing else moves."
          />
          <ArchDecision
            title="Redux Toolkit → RTK Query migration"
            why="Plain RTK was fine for local state, but every fetch was hand-written and uncached. RTK Query gave me declarative endpoints, automatic caching, interval polling for the dashboard widgets, and request deduplication for free."
            tradeoff="Migration was incremental, module by module. Both lived in the codebase for a few months."
          />
          <ArchDecision
            title="WebSocket-first for real-time"
            why="Two flows need sub-second latency: incoming-call detection, and order status sync with the partner ordering app. Polling at the frequencies we needed would have hammered the backend."
            tradeoff="Connection lifecycle management, reconnect logic, auth on upgrade — these took real time to get right. See section 05."
          />
          <ArchDecision
            title="Shadcn/ui over a heavy component library"
            why="We needed custom UX for the order builder, the customer card, the operator dashboard. Pre-styled component libraries fought us. Shadcn gives the primitives, Tailwind handles the rest."
            tradeoff="More design work per component. Faster iteration once the system stabilized."
          />
        </div>
      </CaseStudySection>

      <CaseStudySection
        label="04 / Real-time call matching"
        title="The operator sees the customer before saying hello."
      >
        <div className="text-ink-2 space-y-6 leading-relaxed">
          <p>
            Operators handle thousands of calls daily. Each call carries seconds of overhead if the
            operator has to look up the customer manually. We removed that overhead entirely.
          </p>

          <div className="border-line/60 bg-surface my-8 border p-6 md:p-8">
            <p className="text-ink-3 mb-4 font-mono text-[10px] tracking-[0.2em] uppercase">Flow</p>
            <ol className="text-ink-2 space-y-3 text-sm leading-relaxed">
              <li className="flex gap-4">
                <span className="text-accent font-mono">01</span>
                <span>
                  Telephony layer detects an incoming call and sends the caller&apos;s phone number
                  to the backend.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-mono">02</span>
                <span>Backend looks up the number across 32K+ client records.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-mono">03</span>
                <span>
                  Match is pushed over WebSocket to the assigned operator&apos;s open session.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-mono">04</span>
                <span>
                  The operator&apos;s screen opens the customer card — orders, complaints, notes,
                  balance — before the call connects.
                </span>
              </li>
            </ol>
          </div>

          <p>
            The frontend side: a WebSocket subscription on app load, a handler that hydrates RTK
            Query cache with the matched customer, and a route push to the customer view. Total
            visible latency: under a second.
          </p>
          <p>
            On the backend, the telephony integration itself was written by a separate PHP engineer
            responsible for the Asterisk layer — I built the consumer side and the contract between
            us.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection label="05 / Technical story" title="A week on a one-line auth issue.">
        <div className="text-ink-2 space-y-6 leading-relaxed">
          <p>
            The WebSocket layer wouldn&apos;t connect from the CRM frontend. Locally, it worked on
            the backend developer&apos;s machine; in production, it never handshook. Reports came
            in: real-time features were silent.
          </p>

          <div className="border-line/60 bg-surface my-8 border p-6 md:p-8">
            <p className="text-ink-3 mb-4 font-mono text-[10px] tracking-[0.2em] uppercase">
              Symptoms
            </p>
            <ul className="text-ink-2 space-y-2 text-sm leading-relaxed">
              <li className="relative pl-5 before:absolute before:left-0 before:content-['→']">
                Frontend handshake silently dropped — no obvious error in browser dev tools
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:content-['→']">
                Backend logs showed the upgrade request arriving — and then nothing
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:content-['→']">
                Local-dev backend (different middleware order) worked. Production didn&apos;t.
              </li>
            </ul>
          </div>

          <p>
            I asked for backend read access. Forked the repo, ran it locally with production
            middleware order. Pulled in a Java engineer from the adjacent product team for a second
            pair of eyes.
          </p>
          <p>
            The auth middleware was guarding the WebSocket upgrade endpoint. WebSocket upgrades
            don&apos;t carry standard <span className="font-mono text-sm">Authorization</span>{" "}
            headers — the middleware was rejecting the upgrade before the handshake could complete.
          </p>
          <p>
            Fix: separate the WS endpoint from HTTP auth, validate the token in the WebSocket
            handler via query param or first-message auth instead.
          </p>

          <div className="border-accent/30 bg-accent-soft my-8 border p-6 md:p-8">
            <p className="text-accent mb-3 font-mono text-[10px] tracking-[0.2em] uppercase">
              Lesson
            </p>
            <p className="text-ink leading-relaxed">
              When local works and production doesn&apos;t, the difference is almost always in
              middleware order or config. Get read access to the unfamiliar side fast — don&apos;t
              debug a system through someone else&apos;s description of it.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection
        label="06 / Partner integration"
        title="Two-way sync without owning either end."
      >
        <div className="text-ink-2 space-y-5 leading-relaxed">
          <p>
            A separate company runs a consumer-facing ordering app — the one that lets end customers
            create orders without talking to anyone. Their orders land in our backend through a
            contract that pre-dates me.
          </p>
          <p>
            On the CRM side: a queue of incoming orders that operators must{" "}
            <span className="text-ink font-medium">approve or edit</span> before they become real
            orders in the sales pipeline. The approval state syncs back to the partner app — the end
            customer sees{" "}
            <span className="font-mono text-sm">processing → confirmed → out for delivery</span>{" "}
            without us touching their interface.
          </p>
          <p>
            I didn&apos;t own either end of the integration. My job was to make the operator
            workflow obvious in five seconds, hide the partner-side details, and never lose an order
            to a UI mistake.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection label="07 / Stack" title="What runs the CRM.">
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge variant="default">{tech}</Badge>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection label="08 / Outcome" title="Where it stands today.">
        <div className="text-ink-2 space-y-5 leading-relaxed">
          <p>
            Shoro CRM has been the daily operating system for the sales department for over a year.
            Zero production incidents from the frontend layer through the full ownership period.
          </p>
          <p>
            The team I started with is no longer there. The system they helped start is still
            running.
          </p>
        </div>
      </CaseStudySection>
    </>
  );
}

type ArchDecisionProps = {
  title: string;
  why: string;
  tradeoff: string;
};

function ArchDecision({ title, why, tradeoff }: ArchDecisionProps) {
  return (
    <div className="border-line/60 border-l-2 pl-6 md:pl-8">
      <h3 className="text-ink font-serif text-2xl leading-tight tracking-tight md:text-3xl">
        {title}
      </h3>
      <div className="mt-4 space-y-3">
        <div>
          <p className="text-accent font-mono text-[10px] tracking-[0.2em] uppercase">Why</p>
          <p className="text-ink-2 mt-2 leading-relaxed">{why}</p>
        </div>
        <div className="mt-4">
          <p className="text-ink-3 font-mono text-[10px] tracking-[0.2em] uppercase">Tradeoff</p>
          <p className="text-ink-2 mt-2 text-sm leading-relaxed">{tradeoff}</p>
        </div>
      </div>
    </div>
  );
}
