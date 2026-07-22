// Central config. Update these values before launch.
// Never ship a live link that points to "#", omit any destination left unknown.

export const GOOGLE_CALENDAR_BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3GZDwyOCskY5XkgocM-oukWutcTSPkY9-ZolrzZd3TCLOSsfBan1qj8M7oxpUAVngUZH2hJPZs";

export const GA4_MEASUREMENT_ID = "G-3J2WBB10P6";

export const CONTACT_EMAIL = "craig@sowerved.tech";

export const PHONE = "+254 710 410 793";
export const PHONE_HREF = "+254710410793";

export const SITE_URL = "https://sowerved.tech";
export const SITE_NAME = "Sowerved Tech";
export const SITE_DESCRIPTION =
  "Sowerved Tech is a small senior software, web, data, and machine learning studio based in Nairobi, Kenya.";

// Social links. Omit any entry that does not have a known destination
// rather than linking to "#".
export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/107002177/",
  github: "https://github.com/craigouma",
  // TODO: confirm the X/Twitter handle.
  twitter: "",
  // TODO: confirm the Facebook page.
  facebook: "",
  // TODO: confirm the Instagram handle.
  instagram: "",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/studio" },
  { label: "Research", href: "/research" },
  { label: "Start a project", href: "/contact" },
] as const;

export const FOOTER_DESCRIPTION =
  "Software, websites, data systems, and machine learning for businesses and healthcare organizations.";

export const GITHUB_USER = "craigouma";
export const FOUNDER_NAME = "Craig Carlos Ouma";
export const FOUNDER_LINKEDIN = "https://linkedin.com/in/craig-carlos-ouma";
export const SCHOLAR_URL = "https://scholar.google.com/citations?user=hI6OXwsAAAAJ&hl=en";

// Ordered newest first. Only Paper, Code, or Project links with a real URL render.
export const RESEARCH_PAPERS = [
  {
    title:
      "Explainable Credit Default Prediction for Microfinance: A Gradient Boosting and SHAP Study on Consumer Credit Data",
    summary:
      "Three classifiers on 150,000 borrowers, with SHAP showing that revolving utilisation and delinquency history carry most of the signal, and all tree models calibrating poorly, a result with direct lending implications.",
    meta: "Preprint, 2026",
    paper: "https://craigouma.github.io/credit-default/credit_default_shap.pdf",
    code: "https://github.com/craigouma/credit-default",
    project: "https://craigouma.github.io/credit-default/",
  },
  {
    title:
      "Compact 1D Residual Networks for Efficient 12-Lead ECG Classification: A PTB-XL Benchmarking Study",
    summary:
      "A compact 1D ResNet at 1M parameters and 4 MB matches a full-scale model on PTB-XL diagnostic superclass classification, reaching a macro AUROC of 0.9253 at 8.65 times fewer parameters, small enough for edge deployment.",
    meta: "Preprint, 2026",
    paper: "https://craigouma.github.io/ptbxl-ecg-paper/ptbxl_efficient_ecg.pdf",
    code: "https://github.com/craigouma/ptbxl-ecg-paper",
    project: "https://craigouma.github.io/ptbxl-ecg-paper/",
  },
  {
    title:
      "Self-Supervised Early Warning of Critical Cardiorespiratory Events in Neonatal Vital-Sign Telemetry: A Pilot Feasibility Study",
    summary:
      "Self-supervised prediction of imminent desaturation from continuous neonatal telemetry, where a GRU reaches an AUROC of 0.70 to 0.96 across held-out patients with a median warning lead time of 80 seconds.",
    meta: "Preprint, 2026",
    paper: "https://craigouma.github.io/neonatal-paper/Neonatal-Pilot.pdf",
    code: "https://github.com/craigouma/neonatal-paper",
    project: "https://craigouma.github.io/neonatal-paper/",
  },
] as const;

// Four to six one-line entries. linkLabel/linkHref are optional, omit both when there
// is no real public URL to point to.
export const SELECTED_WORK = [
  {
    description:
      "A secure, self hosted file sharing platform for a pan-African health association network.",
  },
  {
    description:
      "Goal prediction machine learning models for a continental football analytics challenge.",
  },
  {
    description:
      "A multi-tenant analytics platform on BigQuery with automated data pipelines and interactive dashboards.",
  },
  {
    description:
      "Neonatal early warning models that predict deterioration from vital sign time series.",
    linkLabel: "Paper",
    linkHref: "https://craigouma.github.io/neonatal-paper/Neonatal-Pilot.pdf",
  },
  {
    description:
      "ECG classification with a one dimensional residual network on the PTB-XL dataset.",
    linkLabel: "Paper",
    linkHref: "https://craigouma.github.io/ptbxl-ecg-paper/ptbxl_efficient_ecg.pdf",
  },
] as const;
