import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Note: In this environment, we use standard fonts. 
// We will focus on a clean, professional English layout.

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 30,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#f59e0b',
    paddingBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: '#64748b',
  },
  disclaimer: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#fff7ed',
    borderWidth: 1,
    borderColor: '#ffedd5',
    borderRadius: 5,
  },
  disclaimerText: {
    fontSize: 10,
    color: '#9a3412',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  phaseContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  phaseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    paddingBottom: 5,
  },
  phaseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  phaseDuration: {
    fontSize: 11,
    color: '#64748b',
    fontWeight: 'bold',
  },
  taskRow: {
    flexDirection: 'row',
    marginBottom: 4,
    paddingLeft: 10,
  },
  bullet: {
    width: 10,
    fontSize: 12,
    color: '#f59e0b',
  },
  taskText: {
    fontSize: 11,
    color: '#334155',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#64748b',
    marginTop: 10,
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  suggestionBox: {
    marginTop: 5,
    padding: 8,
    backgroundColor: '#f8fafc',
    borderRadius: 4,
  },
  suggestionText: {
    fontSize: 10,
    color: '#475569',
    lineHeight: 1.4,
  }
});

const phases = [
  {
    label: "Phase 0",
    title: "Price Book Optimization",
    duration: "Week 1 - 3",
    tasks: [
      "Connect API for UPC database lookup",
      "Match Product Name + Size + Flavor with UPC code",
      "Write professional descriptions for each product",
      "Add high-quality product images",
      "Final audit of the inventory data"
    ],
    suggestions: "Focus on top 20% velocity items first to ensure immediate ROI."
  },
  {
    label: "Phase 1",
    title: "Platform Upload & Offers",
    duration: "Week 4 - 5",
    tasks: [
      "Upload optimized catalog to DoorDash and Uber Eats",
      "Update store branding and categorization",
      "Launch Bundle deals and Free delivery threshold",
      "Verify delivery zones and operating hours"
    ],
    suggestions: "Bundles like 'Weekend Quick-Mix' increase Average Order Value (AOV)."
  },
  {
    label: "Phase 2",
    title: "Direct Website Launch",
    duration: "Week 5 - 6",
    tasks: [
      "Launch the full-stack transactional website",
      "Enable DoorDash Drive API for direct fulfillment",
      "Implement Age Verification and secure Checkout",
      "Setup Google Analytics and Meta Pixel tracking"
    ],
    suggestions: "Direct orders save 15-30% in platform commissions."
  },
  {
    label: "Phase 3",
    title: "Instagram & Digital Marketing",
    duration: "Week 7 - 12",
    tasks: [
      "Produce weekly Reels and promotional content",
      "Launch 'Order Direct' geo-targeted ad campaigns",
      "Use Instagram Stories for flash deals",
      "Engage with Newport Beach local community influencers"
    ],
    suggestions: "Targeting specific ZIP codes in Newport Beach ensures high-intent traffic."
  },
  {
    label: "Phase 4",
    title: "Growth & Optimization",
    duration: "Month 3 - 6",
    tasks: [
      "Analyze Conversion Rates across all platforms",
      "Implement A/B testing on product descriptions",
      "Launch Customer Loyalty and Rewards program",
      "Refine ad targeting based on ROAS data"
    ],
    suggestions: "Loyalty programs turn one-time buyers into recurring revenue."
  }
];

const RoadmapPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Bal-Port Liquors - Growth Roadmap</Text>
        <Text style={styles.subtitle}>Newport Beach, California • 6-Month Strategic Plan</Text>
        
        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerText}>
            IMPORTANT NOTICE: The dates and durations provided below are ESTIMATES for conceptual planning purposes only. 
            Final deadlines will be confirmed upon stabilization of Phase 0 and Phase 1 technical requirements.
          </Text>
        </View>
      </View>

      {phases.map((p, index) => (
        <View key={index} style={styles.phaseContainer} wrap={false}>
          <View style={styles.phaseHeader}>
            <Text style={styles.phaseTitle}>{p.label}: {p.title}</Text>
            <Text style={styles.phaseDuration}>{p.duration}</Text>
          </View>
          
          <Text style={styles.sectionTitle}>Key Tasks</Text>
          {p.tasks.map((task, i) => (
            <View key={i} style={styles.taskRow}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          ))}
          
          <Text style={styles.sectionTitle}>Strategic Focus</Text>
          <View style={styles.suggestionBox}>
            <Text style={styles.suggestionText}>{p.suggestions}</Text>
          </View>
        </View>
      ))}

      <View style={{ marginTop: 20, textAlign: 'center' }}>
        <Text style={{ fontSize: 9, color: '#94a3b8' }}>Generated for George Touhme • March 2026</Text>
      </View>
    </Page>
  </Document>
);

export default RoadmapPDF;
