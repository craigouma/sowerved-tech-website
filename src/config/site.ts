// Central config. Update these values before launch.
// Never ship a live link that points to "#", omit any destination left unknown.

export const GOOGLE_CALENDAR_BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3GZDwyOCskY5XkgocM-oukWutcTSPkY9-ZolrzZd3TCLOSsfBan1qj8M7oxpUAVngUZH2hJPZs";

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
  { label: "Start a project", href: "/contact" },
] as const;

export const FOOTER_DESCRIPTION =
  "Software, websites, data systems, and machine learning for businesses and healthcare organizations.";
