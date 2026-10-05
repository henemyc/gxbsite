/* GymXBook — content sourced from gymxbook.com + the Google Play listing.
   No invented features, numbers, testimonials, or pricing. */

export const LINKS = {
  register: "https://app.gymxbook.com/register",
  playStore: "https://play.google.com/store/apps/details?id=com.gymxbook.app",
};

export const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#app", label: "The app" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const FOOTER_LINKS = [
  { href: "#/privacy-policy", label: "Privacy Policy" },
  { href: "#/terms-and-conditions", label: "Terms & Conditions" },
];

export const SEO_CITY_LINKS = [
  { href: "/gym-management-software-in-gorakhpur", label: "Gym management software in Gorakhpur" },
  { href: "/gym-management-software-in-deoria", label: "Gym management software in Deoria" },
];

export const STATS = [
  { value: 10000, suffix: "+", label: "Members managed", decimals: 0 },
  { value: 500, suffix: "+", label: "Gyms onboarded", decimals: 0 },
  { value: 99.9, suffix: "%", label: "Uptime SLA", decimals: 1 },
  { value: 4.9, suffix: "★", label: "Average rating", decimals: 1 },
];

export const INCLUDED = [
  "Unlimited members",
  "Member management",
  "Attendance tracking",
  "Billing & invoices",
  "Razorpay integration",
  "Renewal reminders (WhatsApp)",
  "Reports & analytics",
  "Receptionist access",
  "Multi-trainer access",
  "Advanced expense tracking",
  "Custom branded invoices",
  "Priority support",
];

export const PLANS = [
  {
    id: "trial",
    name: "7 Days Free Trial",
    price: 0,
    per: "",
    blurb: "Try every premium feature free. Experience the complete platform before subscribing.",
    cta: "Start 7 days free",
    tag: null,
    save: null,
  },
  {
    id: "monthly",
    name: "1 Month",
    price: 599,
    per: "per month",
    blurb: "Affordable monthly plan with full access to all GymXBook features.",
    cta: "Get started",
    tag: null,
    save: null,
  },
  {
    id: "quarterly",
    name: "3 Months",
    price: 1599,
    per: "per quarter",
    blurb: "Better value with uninterrupted access for the quarter.",
    cta: "Choose plan",
    tag: "Most popular",
    save: "Save ₹198 vs monthly",
  },
  {
    id: "annual",
    name: "12 Months",
    price: 5999,
    per: "per year",
    blurb: "Maximum savings with a full year of uninterrupted access.",
    cta: "Choose plan",
    tag: "Best value",
    save: "Save ₹1,189 vs monthly",
  },
];

export const AUDIENCES = [
  {
    title: "Small gyms",
    body: "Powerful tools that help small gym owners automate daily operations, cut paperwork, and focus on training members.",
  },
  {
    title: "Fitness centers",
    body: "Multiple trainers, membership tiers, and automated billing — all from one centralized platform.",
  },
  {
    title: "Personal trainers",
    body: "Track client progress, manage renewals, and process payments to grow your client roster with ease.",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Create account",
    body: "Sign up with your email and gym details. Your secure dashboard is ready instantly — no installation.",
  },
  {
    n: "02",
    title: "Set up plans",
    body: "Configure membership tiers, pricing, and durations in a few simple clicks.",
  },
  {
    n: "03",
    title: "Add members",
    body: "Import existing members in bulk or add them one by one. Assign plans, record payments — you're live.",
  },
  {
    n: "04",
    title: "Runs on autopilot",
    body: "Focus on training your members while reminders, invoices, and tracking run themselves.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Before GymXBook, I was tracking everything in three different WhatsApp groups and two notebooks. Now my entire gym runs from my phone. The renewal reminders alone recovered ₹40,000 in dues I would have lost.",
    initials: "RK",
    name: "Rajesh Kumar",
    role: "Owner, Iron Temple Gym — Lucknow",
  },
  {
    quote:
      "The attendance and billing features are exceptional. I can see exactly who came in today, who owes fees, and how my revenue is trending — all in one beautiful dashboard. Setup took less than 20 minutes.",
    initials: "PS",
    name: "Priya Sharma",
    role: "Founder, FitForce Studio — Mumbai",
  },
  {
    quote:
      "As a personal trainer with 80+ clients, managing renewals was a nightmare. GymXBook automated all my reminders and clients pay instantly via Razorpay. My revenue grew 35% in 6 months.",
    initials: "AM",
    name: "Arjun Menon",
    role: "Personal Trainer — Bengaluru",
  },
  {
    quote:
      "I was skeptical about moving from our old system, but the migration was seamless. The support team helped us import 400+ member records in under two hours.",
    initials: "SG",
    name: "Sunita Gupta",
    role: "Manager, PowerHouse Fitness — Delhi",
  },
  {
    quote:
      "The expense tracking module is brilliant — I can see the P&L for each of my three locations separately. It genuinely feels like enterprise software built for the Indian market.",
    initials: "VN",
    name: "Vikram Nair",
    role: "Director, FitLife Chain — Pune",
  },
  {
    quote:
      "Real humans who actually understand gym businesses. The WhatsApp renewal reminders cut our member dropout rate in half. Worth every rupee, no question.",
    initials: "KR",
    name: "Kavitha Rajan",
    role: "Owner, Flex Fitness Academy — Chennai",
  },
];

export const FAQS = [
  {
    q: "Do I need any technical knowledge to use GymXBook?",
    a: "Absolutely not. GymXBook is designed for gym owners, not software engineers. If you can use WhatsApp, you can use GymXBook — and our onboarding team will guide you through the full setup.",
  },
  {
    q: "Can I import my existing member data?",
    a: "Yes. Import members from Excel or CSV files, or our support team will migrate you from your existing system. Most gyms are fully migrated within 2–4 hours with zero data loss.",
  },
  {
    q: "Does it work on mobile?",
    a: "Yes — GymXBook is built mobile-first. Owners and members use the Android app, and the dashboard works seamlessly on smartphones, tablets, and desktops.",
  },
  {
    q: "How do online payments work?",
    a: "Connect your Razorpay account in settings. Members then pay via UPI, cards, or net banking, and every payment lands automatically in your GymXBook ledger with an invoice generated instantly.",
  },
  {
    q: "Is my gym's data secure?",
    a: "GymXBook uses bank-grade 256-bit SSL encryption, is hosted on AWS infrastructure with daily automated backups, and is fully GDPR and IT Act compliant. Your data is never shared or sold.",
  },
  {
    q: "Can my receptionist or trainers have limited access?",
    a: "Yes — role-based access control. Your receptionist gets a login limited to check-ins, member lookup, and payments, without access to financial reports or sensitive settings.",
  },
  {
    q: "What happens to my data if my plan expires?",
    a: "We remind you well before expiry. If you don't renew, data stays safely archived for 90 days and can be exported anytime; after that it is permanently deleted per our retention policy.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — 7 days with full access to every feature, no credit card required. Upgrade to a paid plan anytime during or after the trial.",
  },
];

/* Sample UI data (illustrative demo content for mockups) */
export const DEMO = {
  gym: "Iron Temple Gym",
  checkins: [
    { name: "Priya S.", time: "07:42", plan: "Annual" },
    { name: "Ravi K.", time: "07:51", plan: "Quarterly" },
    { name: "Amit V.", time: "08:03", plan: "Monthly" },
  ],
  renewals: [
    { name: "Suresh R.", left: "2 days" },
    { name: "Meena D.", left: "5 days" },
    { name: "Karan P.", left: "7 days" },
  ],
};
