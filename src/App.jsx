import { useState } from "react";

const phases = [
  {
    id: 0,
    label: "Phase 0",
    title: "Price Book Optimization",
    status: "active",
    duration: "Week 1 → 3",
    weeks: [1, 3],
    color: "#f59e0b",
    icon: "📦",
    tasks: [
      { text: "Connect API for UPC database (upc-lookup, etc.)", done: true },
      { text: "Match Product Name + Size + Flavor with UPC code", done: true },
      { text: "Write professional descriptions for each product", done: false },
      { text: "Add one or two high-quality images per product", done: false },
      { text: "Final review and audit of the price book", done: false },
    ],
    suggestions: [],
  },
  {
    id: 1,
    label: "Phase 1",
    title: "Platform Upload + Deals",
    status: "upcoming",
    duration: "Week 4 → 5",
    weeks: [4, 5],
    color: "#3b82f6",
    icon: "🚀",
    tasks: [
      { text: "Upload optimized price book to DoorDash and Uber Eats", done: false },
      { text: "Update store images and categories on both platforms", done: false },
      { text: "Launch Offers & Deals plan (Bundle deals, Free delivery threshold)", done: false },
      { text: "Verify operating hours, delivery zones, and minimum order", done: false },
    ],
    suggestions: [
      "Create online-exclusive Bundle deals (e.g., Buy 2 + Free delivery)",
      "Enable 'Pickup discount' on DoorDash to encourage self-collection and reduce commission",
    ],
  },
  {
    id: 2,
    label: "Phase 2",
    title: "Website Launch",
    status: "upcoming",
    duration: "Week 5 → 6",
    weeks: [5, 6],
    color: "#8b5cf6",
    icon: "🌐",
    tasks: [
      { text: "Officially launch the Full Stack website", done: false },
      { text: "Enable DoorDash Drive On-Demand API Integration", done: false },
      { text: "Test Age Verification Flow and Checkout page", done: false },
      { text: "Add Google Analytics + Meta Pixel for tracking", done: false },
      { text: "Link Google Business Profile to the website", done: false },
    ],
    suggestions: [
      "Add SMS/Email capture at first order to build a customer database for retargeting",
      "Create an 'Order Direct & Save' page explaining the price difference vs DoorDash",
    ],
  },
  {
    id: 3,
    label: "Phase 3",
    title: "Instagram Campaigns",
    status: "upcoming",
    duration: "Week 7 → 12",
    weeks: [7, 12],
    color: "#ec4899",
    icon: "📱",
    tasks: [
      { text: "Produce weekly Reels (featured product, offer, behind the scenes)", done: false },
      { text: "'Order Direct & Pay Less' campaign targeting Newport Beach", done: false },
      { text: "Instagram Stories with limited-time offers (Flash deals)", done: false },
      { text: "Paid Ads targeting nearby ZIP codes (92663, 92657, 92625...)", done: false },
      { text: "Reply to every comment and Message within 24 hours", done: false },
    ],
    suggestions: [
      "Use UGC (User Generated Content) — ask customers to film their orders for a discount",
      "Collaborate with local businesses or influencers in Orange County (OC)",
    ],
  },
  {
    id: 4,
    label: "Phase 4",
    title: "Measurement & Optimization",
    status: "upcoming",
    duration: "Month 3 → 6",
    weeks: [13, 24],
    color: "#10b981",
    icon: "📊",
    tasks: [
      { text: "Analyze Website Conversion Rate vs DoorDash/Uber Eats", done: false },
      { text: "Review top-selling products and boost their visibility", done: false },
      { text: "A/B Test product images and descriptions", done: false },
      { text: "Compare ROAS for each Instagram campaign and refine targeting", done: false },
      { text: "Add Loyalty Program (points, discount codes for repeat customers)", done: false },
    ],
    suggestions: [
      "Start Local SEO: write light blog posts like 'best wine delivery Newport Beach'",
      "Consider Google Ads for search terms like 'liquor delivery near me' in OC",
    ],
  },
];

const TOTAL_WEEKS = 24;

export default function Roadmap() {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  const barLeft = (w) => ((w - 1) / TOTAL_WEEKS) * 100;
  const barWidth = (s, e) => ((e - s + 1) / TOTAL_WEEKS) * 100;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        fontFamily: "'Segoe UI', Tahoma, sans-serif",
        color: "#e2e8f0",
        padding: "32px 24px",
        direction: "ltr",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div
          style={{
            fontSize: 13,
            letterSpacing: 3,
            color: "#64748b",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Online Sales Growth Roadmap
        </div>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 800,
            margin: 0,
            background: "linear-gradient(135deg, #f59e0b, #ec4899, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Bal-Port Liquors — Online Growth Roadmap
        </h1>
        <div style={{ fontSize: 13, color: "#475569", marginTop: 8 }}>
          Newport Beach, CA • 6 Months • 24 Weeks
        </div>
      </div>

      {/* Gantt Bar - Hidden on small screens or scrollable */}
      <div
        style={{
          background: "#111827",
          borderRadius: 16,
          padding: "20px 24px",
          marginBottom: 32,
          border: "1px solid #1e293b",
          overflowX: "auto",
        }}
      >
        <div
          style={{
            fontSize: 12,
            color: "#64748b",
            marginBottom: 16,
            display: "flex",
            justifyContent: "space-between",
            minWidth: "400px",
          }}
        >
          <span>Week 1</span>
          <span>Month 3</span>
          <span>Week 24</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: "400px" }}>
          {phases.map((p) => (
            <div
              key={p.id}
              onClick={() => setActive(p.id)}
              style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
            >
              <div
                style={{
                  width: 80,
                  fontSize: 11,
                  color: p.color,
                  fontWeight: 700,
                  flexShrink: 0,
                  textAlign: "left",
                }}
              >
                {p.icon} {p.label}
              </div>
              <div
                style={{
                  flex: 1,
                  height: 28,
                  background: "#1e293b",
                  borderRadius: 6,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: `${barLeft(p.weeks[0])}%`,
                    width: `${barWidth(p.weeks[0], p.weeks[1])}%`,
                    height: "100%",
                    background:
                      active === p.id
                        ? `linear-gradient(90deg, ${p.color}cc, ${p.color})`
                        : `${p.color}55`,
                    borderRadius: 6,
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#fff",
                      whiteSpace: "nowrap",
                      paddingLeft: 6,
                    }}
                  >
                    {p.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Phase Detail - Stacked on mobile */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginBottom: 28,
        }}
      >
        {/* Phase selector - Horizontal scroll on mobile */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            gap: 10,
            paddingBottom: 10,
            scrollbarWidth: "none",
          }}
        >
          {phases.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              style={{
                background: active === p.id ? `${p.color}22` : "#111827",
                border: `1px solid ${active === p.id ? p.color : "#1e293b"}`,
                borderRadius: 12,
                padding: "10px 16px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexShrink: 0,
                minWidth: "140px",
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, color: "#64748b" }}>{p.duration}</div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: active === p.id ? p.color : "#e2e8f0",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.icon} {p.title}
                </div>
              </div>
              {p.status === "active" && (
                <span
                  style={{
                    fontSize: 10,
                    background: "#f59e0b22",
                    color: "#f59e0b",
                    border: "1px solid #f59e0b55",
                    borderRadius: 20,
                    padding: "2px 8px",
                  }}
                >
                  Active
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div
          style={{
            background: "#111827",
            borderRadius: 16,
            padding: 20,
            border: `1px solid ${phase.color}44`,
          }}
        >
          <div style={{ fontSize: 11, color: phase.color, fontWeight: 700, marginBottom: 4 }}>
            {phase.label} • {phase.duration}
          </div>
          <h2 style={{ margin: "0 0 20px", fontSize: 18, color: "#f1f5f9" }}>
            {phase.icon} {phase.title}
          </h2>

          <div style={{ fontSize: 13, fontWeight: 700, color: "#64748b", marginBottom: 10 }}>
            Tasks
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
            {phase.tasks.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 5,
                    flexShrink: 0,
                    background: t.done ? `${phase.color}33` : "#1e293b",
                    border: `1.5px solid ${t.done ? phase.color : "#334155"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 1,
                  }}
                >
                  {t.done && <span style={{ fontSize: 10, color: phase.color }}>✓</span>}
                </div>
                <span
                  style={{
                    fontSize: 14,
                    color: t.done ? "#64748b" : "#cbd5e1",
                    lineHeight: 1.4,
                    textDecoration: t.done ? "line-through" : "none",
                  }}
                >
                  {t.text}
                </span>
              </div>
            ))}
          </div>

          {phase.suggestions.length > 0 && (
            <>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#64748b", marginBottom: 10 }}>
                💡 Additional Suggestions
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {phase.suggestions.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      background: `${phase.color}11`,
                      border: `1px solid ${phase.color}33`,
                      borderRadius: 8,
                      padding: "10px 14px",
                      fontSize: 12,
                      color: "#94a3b8",
                      lineHeight: 1.6,
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Extra recommendations - Stacked on mobile */}
      <div
        style={{
          background: "#111827",
          borderRadius: 16,
          padding: 20,
          border: "1px solid #1e293b",
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 700, color: "#f1f5f9", marginBottom: 16 }}>
          🎯 Strategic Recommendations
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            {
              icon: "🗺️",
              title: "Local SEO",
              text: "Optimize Google Business Profile. Add fresh photos and update hours. Target keywords like 'liquor delivery Newport Beach'.",
            },
            {
              icon: "💬",
              title: "SMS Marketing",
              text: "Collect customer numbers at pickup. Send weekly flash deals. Costs are significantly lower than paid ads.",
            },
            {
              icon: "⭐",
              title: "Reviews Strategy",
              text: "Ask every satisfied customer for a Google Review. 10+ positive reviews boost your local search ranking.",
            },
            {
              icon: "🎁",
              title: "Loyalty Program",
              text: "Earn points on every website order. Increases retention and motivates direct ordering over DoorDash.",
            },
            {
              icon: "📦",
              title: "Bundle Deals",
              text: "Design online-only bundles not available on DoorDash. Makes price comparison harder and increases AOV.",
            },
            {
              icon: "📈",
              title: "Weekly Reporting",
              text: "Track daily: Order count, AOV, and best-selling items. Make decisions based on data, not guesswork.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#0f172a",
                borderRadius: 10,
                padding: "16px",
                border: "1px solid #1e293b",
              }}
            >
              <div style={{ fontSize: 22, marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>
                {item.title}
              </div>
              <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 24, fontSize: 11, color: "#334155" }}>
        Priority: Direct website saves commission (~15-30% per DoorDash order) — Every website order = pure extra profit.
      </div>
    </div>
  );
}
