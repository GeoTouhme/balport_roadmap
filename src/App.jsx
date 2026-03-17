import { useState } from "react";

const phases = [
  {
    id: 0,
    label: "المرحلة ٠",
    title: "تحسين Price Book",
    status: "active",
    duration: "الأسبوع ١ → ٣",
    weeks: [1, 3],
    color: "#f59e0b",
    icon: "📦",
    tasks: [
      { text: "ربط API لقاعدة بيانات UPC (upc-lookup وما شابه)", done: true },
      { text: "مطابقة اسم المنتج + الحجم + النكهة مع كود UPC", done: true },
      { text: "كتابة وصف احترافي لكل منتج", done: false },
      { text: "إضافة صورة أو اثنتين لكل منتج", done: false },
      { text: "مراجعة نهائية للـ price book وتدقيقه", done: false },
    ],
    suggestions: [],
  },
  {
    id: 1,
    label: "المرحلة ١",
    title: "رفع على المنصات + Deals",
    status: "upcoming",
    duration: "الأسبوع ٤ → ٥",
    weeks: [4, 5],
    color: "#3b82f6",
    icon: "🚀",
    tasks: [
      { text: "رفع الـ price book المحسّن على DoorDash و Uber Eats", done: false },
      { text: "تحديث صور وفئات المتجر على المنصتين", done: false },
      { text: "إطلاق خطة Offers & Deals (Bundle deals, Free delivery threshold)", done: false },
      { text: "التحقق من ساعات العمل، المنطقة، والـ minimum order", done: false },
    ],
    suggestions: [
      "اعمل Bundle deals خصيصاً للأوردر أونلاين (مثلاً: اشتري ٢ + ادفع ١ توصيل)",
      "فعّل 'Pickup discount' على DoorDash لتشجيع الاستلام الذاتي وتقليل العمولة",
    ],
  },
  {
    id: 2,
    label: "المرحلة ٢",
    title: "إطلاق الموقع الإلكتروني",
    status: "upcoming",
    duration: "الأسبوع ٥ → ٦",
    weeks: [5, 6],
    color: "#8b5cf6",
    icon: "🌐",
    tasks: [
      { text: "إطلاق الموقع الـ Full Stack رسمياً", done: false },
      { text: "تفعيل DoorDash Drive On-Demand API Integration", done: false },
      { text: "اختبار Age Verification Flow وصفحة الـ Checkout", done: false },
      { text: "إضافة Google Analytics + Meta Pixel للتتبع", done: false },
      { text: "ربط Google Business Profile بالموقع", done: false },
    ],
    suggestions: [
      "أضف SMS/Email capture عند أول أوردر لبناء قاعدة عملاء للـ retargeting",
      "اعمل صفحة 'اطلب مباشرة واوفّر' تشرح الفرق مقارنة بـ DoorDash للزبون",
    ],
  },
  {
    id: 3,
    label: "المرحلة ٣",
    title: "حملات Instagram",
    status: "upcoming",
    duration: "الأسبوع ٧ → ١٢",
    weeks: [7, 12],
    color: "#ec4899",
    icon: "📱",
    tasks: [
      { text: "إنتاج Reels أسبوعية (منتج مميز، عرض، behind the scenes)", done: false },
      { text: "حملة 'اطلب من موقعنا وادفع أقل' تستهدف Newport Beach", done: false },
      { text: "Instagram Stories بعروض محدودة الوقت (Flash deals)", done: false },
      { text: "Paid Ads تستهدف ZIP codes قريبة (92663, 92657, 92625...)", done: false },
      { text: "رد على كل تعليق وMessage خلال ٢٤ ساعة", done: false },
    ],
    suggestions: [
      "استخدم UGC (User Generated Content) — اطلب من الزبائن يصوروا طلباتهم مقابل discount",
      "اعمل Collab مع محلات أو influencers محليين في OC",
    ],
  },
  {
    id: 4,
    label: "المرحلة ٤",
    title: "قياس وتحسين",
    status: "upcoming",
    duration: "الشهر ٣ → ٦",
    weeks: [13, 24],
    color: "#10b981",
    icon: "📊",
    tasks: [
      { text: "تحليل Conversion Rate الموقع مقابل DoorDash/Uber Eats", done: false },
      { text: "مراجعة أكثر المنتجات مبيعاً وتعزيز ظهورها", done: false },
      { text: "A/B Test على صور المنتجات والـ description", done: false },
      { text: "مقارنة ROAS لكل حملة Instagram وتحسين الـ targeting", done: false },
      { text: "إضافة برنامج Loyalty (نقاط، كود خصم للعملاء المتكررين)", done: false },
    ],
    suggestions: [
      "ابدأ بـ Local SEO: اكتب blog posts خفيفة مثل 'best wine delivery Newport Beach'",
      "فكّر بـ Google Ads للـ search terms 'liquor delivery near me' في OC",
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
        direction: "rtl",
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
          خطة تطوير المبيعات الأونلاين
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
          Newport Beach, CA • ٦ أشهر • ٢٤ أسبوع
        </div>
      </div>

      {/* Gantt Bar */}
      <div
        style={{
          background: "#111827",
          borderRadius: 16,
          padding: "20px 24px",
          marginBottom: 32,
          border: "1px solid #1e293b",
        }}
      >
        <div
          style={{
            fontSize: 12,
            color: "#64748b",
            marginBottom: 16,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>الأسبوع ١</span>
          <span>الشهر ٣</span>
          <span>الأسبوع ٢٤</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
                  textAlign: "right",
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
                    right: `${barLeft(p.weeks[0])}%`,
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
                      paddingRight: 6,
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

      {/* Phase Detail */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }}>
        {/* Phase selector */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {phases.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              style={{
                background: active === p.id ? `${p.color}22` : "#111827",
                border: `1px solid ${active === p.id ? p.color : "#1e293b"}`,
                borderRadius: 12,
                padding: "12px 16px",
                cursor: "pointer",
                textAlign: "right",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: "#64748b" }}>{p.duration}</div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: active === p.id ? p.color : "#e2e8f0",
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
                  جاري الآن
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
            padding: 24,
            border: `1px solid ${phase.color}44`,
          }}
        >
          <div style={{ fontSize: 11, color: phase.color, fontWeight: 700, marginBottom: 4 }}>
            {phase.label} • {phase.duration}
          </div>
          <h2 style={{ margin: "0 0 20px", fontSize: 20, color: "#f1f5f9" }}>
            {phase.icon} {phase.title}
          </h2>

          <div style={{ fontSize: 13, fontWeight: 700, color: "#64748b", marginBottom: 10 }}>
            المهام
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
            {phase.tasks.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 4,
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
                    fontSize: 13,
                    color: t.done ? "#64748b" : "#cbd5e1",
                    lineHeight: 1.5,
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
                💡 اقتراحات إضافية
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {phase.suggestions.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      background: `${phase.color}11`,
                      border: `1px solid ${phase.color}33`,
                      borderRadius: 8,
                      padding: "8px 12px",
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

      {/* Extra recommendations */}
      <div
        style={{
          background: "#111827",
          borderRadius: 16,
          padding: 24,
          border: "1px solid #1e293b",
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 700, color: "#f1f5f9", marginBottom: 16 }}>
          🎯 توصيات استراتيجية شاملة
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {[
            {
              icon: "🗺️",
              title: "Local SEO",
              text: "حسّن Google Business Profile وأضف صور وساعات. استهدف كلمات مثل 'liquor delivery Newport Beach'",
            },
            {
              icon: "💬",
              title: "SMS Marketing",
              text: "اجمع أرقام الزبائن عند الاستلام. ارسل flash deals أسبوعية. التكلفة أقل بكثير من الإعلانات",
            },
            {
              icon: "⭐",
              title: "Reviews Strategy",
              text: "اطلب من كل زبون راضٍ يكتب Google Review. ١٠ reviews إيجابية ترفع ظهورك في الخريطة",
            },
            {
              icon: "🎁",
              title: "Loyalty Program",
              text: "نقاط على كل أوردر عبر الموقع. يرفع معدل التكرار ويحفز الطلب المباشر بدل DoorDash",
            },
            {
              icon: "📦",
              title: "Bundle Deals",
              text: "صمّم bundles خاصة بالأونلاين مش موجودة بـ DoorDash. يصعب المقارنة ويزيد Average Order Value",
            },
            {
              icon: "📈",
              title: "Weekly Reporting",
              text: "تابع يومياً: عدد الأوردرات، متوسط الطلب، وأكثر المنتجات مبيعاً. القرارات بالأرقام مش بالتخمين",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#0f172a",
                borderRadius: 10,
                padding: "14px 16px",
                border: "1px solid #1e293b",
              }}
            >
              <div style={{ fontSize: 20, marginBottom: 6 }}>{item.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>
                {item.title}
              </div>
              <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 24, fontSize: 11, color: "#334155" }}>
        الأولوية: الموقع المباشر يوفر العمولة (~١٥-٣٠٪ من كل أوردر على DoorDash) — كل أوردر على الموقع
        = ربح إضافي صافي
      </div>
    </div>
  );
}
