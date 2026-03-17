import { useState, useEffect } from "react";

const initialPhases = [
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
      { text: "Launch Offers & Deals plan", done: false },
      { text: "Verify operating hours and delivery zones", done: false },
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
      { text: "Enable DoorDash Drive API Integration", done: false },
      { text: "Test Age Verification and Checkout", done: false },
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
      { text: "Produce weekly Reels", done: false },
      { text: "'Order Direct & Pay Less' campaign", done: false },
      { text: "Paid Ads targeting nearby ZIP codes", done: false },
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
      { text: "Analyze Website Conversion Rate", done: false },
      { text: "Review top-selling products", done: false },
      { text: "A/B Test product descriptions", done: false },
    ],
  },
];

const TOTAL_WEEKS = 24;

export default function Roadmap() {
  const [active, setActive] = useState(0);
  const [phases, setPhases] = useState(initialPhases);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("balport_roadmap_v2_progress");
    if (saved) {
      try { setPhases(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  const saveToStore = (newPhases) => {
    setPhases(newPhases);
    localStorage.setItem("balport_roadmap_v2_progress", JSON.stringify(newPhases));
  };

  const updateWeeks = (id, start, end) => {
    const newPhases = phases.map(p => {
      if (p.id === id) {
        const s = Math.max(1, parseInt(start) || 1);
        const e = Math.max(s, parseInt(end) || s);
        return { 
          ...p, 
          weeks: [s, e],
          duration: s === e ? `Week ${s}` : `Week ${s} → ${e}`
        };
      }
      return p;
    });
    saveToStore(newPhases);
  };

  const toggleTask = (phaseId, taskIndex) => {
    const newPhases = phases.map(p => {
      if (p.id === phaseId) {
        const newTasks = p.tasks.map((t, i) => i === taskIndex ? { ...t, done: !t.done } : t);
        return { ...p, tasks: newTasks };
      }
      return p;
    });
    saveToStore(newPhases);
  };

  const phase = phases[active];
  const barLeft = (w) => ((w - 1) / TOTAL_WEEKS) * 100;
  const barWidth = (s, e) => ((e - s + 1) / TOTAL_WEEKS) * 100;

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", fontFamily: "sans-serif", color: "#e2e8f0", padding: "20px" }}>
      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <h1 style={{ fontSize: "24px", margin: "0 0 10px", background: "linear-gradient(to right, #f59e0b, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Bal-Port Growth Roadmap
        </h1>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          style={{ background: isEditing ? "#ef4444" : "#3b82f6", color: "white", border: "none", padding: "8px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold", cursor: "pointer" }}
        >
          {isEditing ? "💾 Save Changes" : "⚙️ Edit Schedule"}
        </button>
      </div>

      {/* Gantt Bar View */}
      <div style={{ background: "#111827", borderRadius: "16px", padding: "20px", marginBottom: "24px", border: "1px solid #1e293b", overflowX: "auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "400px" }}>
          {phases.map((p) => (
            <div key={p.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "70px", fontSize: "10px", color: p.color, fontWeight: "bold" }}>{p.label}</div>
              <div style={{ flex: 1, height: "24px", background: "#1e293b", borderRadius: "4px", position: "relative" }}>
                <div style={{ 
                  position: "absolute", 
                  left: `${barLeft(p.weeks[0])}%`, 
                  width: `${barWidth(p.weeks[0], p.weeks[1])}%`, 
                  height: "100%", 
                  background: active === p.id ? p.color : `${p.color}33`,
                  borderRadius: "4px",
                  transition: "all 0.3s",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "9px", color: "#fff", fontWeight: "bold",
                  border: active === p.id ? "1px solid white" : "none"
                }}>
                  {p.weeks[0]}-{p.weeks[1]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Phase Selection Tabs */}
      <div style={{ display: "flex", gap: "8px", overflowX: "auto", marginBottom: "20px", paddingBottom: "10px" }}>
        {phases.map((p) => (
          <button key={p.id} onClick={() => setActive(p.id)} style={{ 
            background: active === p.id ? `${p.color}22` : "#111827",
            border: `1px solid ${active === p.id ? p.color : "#1e293b"}`,
            borderRadius: "12px", padding: "12px", cursor: "pointer", minWidth: "120px", textAlign: "left"
          }}>
            <div style={{ fontSize: "10px", color: "#64748b" }}>{p.duration}</div>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: active === p.id ? p.color : "white" }}>{p.icon} {p.title}</div>
          </button>
        ))}
      </div>

      {/* Active Phase Editor/Viewer */}
      <div style={{ background: "#111827", borderRadius: "16px", padding: "20px", border: `1px solid ${phase.color}66` }}>
        <div style={{ marginBottom: "20px" }}>
          <span style={{ fontSize: "12px", color: phase.color, fontWeight: "bold" }}>{phase.label}</span>
          <h2 style={{ margin: "5px 0", fontSize: "20px" }}>{phase.icon} {phase.title}</h2>
          
          {isEditing && (
            <div style={{ display: "flex", gap: "10px", marginTop: "15px", background: "#1e293b", padding: "10px", borderRadius: "8px" }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: "10px", color: "#64748b", display: "block" }}>Start Week</label>
                <input type="number" value={phase.weeks[0]} onChange={(e) => updateWeeks(phase.id, e.target.value, phase.weeks[1])} style={{ width: "100%", background: "#0a0a0f", border: "1px solid #334155", color: "white", padding: "5px", borderRadius: "4px" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: "10px", color: "#64748b", display: "block" }}>End Week</label>
                <input type="number" value={phase.weeks[1]} onChange={(e) => updateWeeks(phase.id, phase.weeks[0], e.target.value)} style={{ width: "100%", background: "#0a0a0f", border: "1px solid #334155", color: "white", padding: "5px", borderRadius: "4px" }} />
              </div>
            </div>
          )}
        </div>

        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#64748b", marginBottom: "10px" }}>Tasks</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {phase.tasks.map((t, i) => (
            <div key={i} onClick={() => toggleTask(phase.id, i)} style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", padding: "10px", background: t.done ? "transparent" : "#1e293b44", borderRadius: "8px", border: "1px solid transparent" }}>
              <div style={{ width: "20px", height: "20px", borderRadius: "5px", border: `2px solid ${phase.color}`, background: t.done ? phase.color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {t.done && <span style={{ color: "#000", fontWeight: "bold" }}>✓</span>}
              </div>
              <span style={{ fontSize: "14px", color: t.done ? "#64748b" : "white", textDecoration: t.done ? "line-through" : "none" }}>{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
