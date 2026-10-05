export const privacyContent = {
  slug: "privacy-policy",
  eyebrow: "Compliance & Trust",
  title: "Privacy Policy",
  accent: "Policy.",
  summary:
    "GymXBook is committed to protecting your privacy. We collect only the data necessary to deliver our Gym Management Software services. We never sell your personal information to third parties. This policy explains exactly what we collect and why.",
  footerNote:
    "Last modified: March 2026. This Privacy Policy is governed by the Information Technology Act, 2000, the SPDI Rules, applicable laws of India, and where applicable, GDPR.",
  sections: [
    {
      id: "introduction",
      number: "01",
      title: "Introduction",
      blocks: [
        {
          type: "p",
          text: "Welcome to GymXBook (\"we,\" \"our,\" or \"us\"). GymXBook is India's leading Gym Management Software — a comprehensive SaaS platform purpose-built for gyms, fitness centers, fitness studios, and personal trainers. Our platform covers attendance tracking, membership management, payment collection, trainer management, and advanced reporting.",
        },
        {
          type: "p",
          text: "This Privacy Policy explains how GymXBook collects, uses, stores, shares, and protects information obtained through our website at gymxbook.com and our Gym Management Software application (collectively, the \"Services\"). This policy applies to all users, including gym owners, gym administrators, gym members, personal trainers, and visitors to our website.",
        },
        {
          type: "p",
          text: "By accessing or using GymXBook's Services — including during the 7-Day Free Trial — you agree to the collection and use of information described in this policy. Please read it carefully before using our platform. If you disagree with any part of this policy, please discontinue use of our Services.",
        },
      ],
    },
    {
      id: "information-we-collect",
      number: "02",
      title: "Information We Collect",
      intro:
        "GymXBook collects information necessary to provide, improve, and secure our Gym Management Software and Fitness Management Software services.",
      subsections: [
        {
          title: "2.1 Information You Provide Directly",
          blocks: [
            {
              type: "bullets",
              items: [
                "Name, email address, phone number, and profile photo when creating an account",
                "Business name, address, GSTIN, and gym details provided during onboarding",
                "Billing and subscription information for paid plan upgrades",
                "Communications sent to our support team via email, chat, or phone",
                "Feedback, survey responses, and feature requests submitted voluntarily",
              ],
            },
          ],
        },
        {
          title: "2.2 Information We Collect Automatically",
          blocks: [
            {
              type: "bullets",
              items: [
                "Device identifiers, IP address, browser type, and operating system",
                "Pages visited, features used, session duration, and click patterns",
                "Referral sources, search queries, and navigation paths within the app",
                "Login timestamps, session tokens, and authentication logs",
                "Error logs and crash reports to diagnose and fix software issues",
              ],
            },
          ],
        },
        {
          title: "2.3 Information from Third Parties",
          blocks: [
            {
              type: "bullets",
              items: [
                "Payment confirmation data from payment gateway partners (Razorpay, PayU, etc.)",
                "Authentication data when you use Google Single Sign-On (SSO)",
                "Analytics data from Google Analytics about website visitor behaviour",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "member-data",
      number: "03",
      title: "Member Data Collection",
      blocks: [
        {
          type: "p",
          text: "Gym owners and administrators use GymXBook's Gym Membership Management module to record and manage data about their gym members. As a data processor, GymXBook collects and stores this member data strictly on behalf of and at the direction of the gym operator (the data controller).",
        },
      ],
      subsections: [
        {
          title: "3.1 What Member Data Is Collected",
          blocks: [
            {
              type: "bullets",
              items: [
                "Full name, date of birth, gender, and profile photograph",
                "Contact details: phone number, email address, and emergency contact",
                "Membership plan details, start date, expiry date, and renewal history",
                "Attendance records including check-in and check-out timestamps",
                "Health and fitness data optionally entered by gym staff (weight, height, body measurements)",
                "Payment history, outstanding dues, and receipts for membership fees",
                "Assigned trainer details and workout plan associations",
                "Member-generated documents such as medical clearance forms or signed contracts",
              ],
            },
          ],
        },
        {
          title: "3.2 Member Data Responsibility",
          blocks: [
            {
              type: "p",
              text: "The gym, fitness center, or personal trainer who subscribes to GymXBook is responsible for obtaining appropriate consent from their members before entering member data into the platform. GymXBook processes member data only as instructed by the subscribing gym business. Gym members seeking access to, correction of, or deletion of their personal data should contact their gym directly.",
            },
          ],
        },
        {
          title: "3.3 Biometric Data",
          blocks: [
            {
              type: "p",
              text: "If a gym integrates biometric attendance devices (e.g., fingerprint scanners) with GymXBook, biometric template data is stored and processed on-device or by the third-party device provider. GymXBook does not directly store raw biometric identifiers on its servers unless a specific integration module is enabled and consented to by both the gym operator and the member.",
            },
          ],
        },
      ],
    },
    {
      id: "gym-owner-data",
      number: "04",
      title: "Gym Owner Data Collection",
      blocks: [
        {
          type: "p",
          text: "Gym owners, fitness center managers, and personal trainers who subscribe to GymXBook are our direct customers. We collect and process the following data related to their business and account activity:",
        },
        {
          type: "bullets",
          items: [
            "Full name and designation of the account owner and sub-administrators",
            "Business name, registered address, and contact details of the gym",
            "GSTIN or tax identification number where applicable for invoice generation",
            "Number of branches, staff count, and operational details configured in the platform",
            "Subscription plan, billing cycle, purchase history, and invoice records",
            "Platform usage metrics such as features accessed, reports generated, and login frequency",
            "Support tickets raised, feedback provided, and communication history with GymXBook",
            "Staff and trainer accounts created under the owner's subscription",
          ],
        },
        {
          type: "p",
          text: "This data is used to administer your GymXBook account, provide customer support, issue invoices and GST-compliant receipts, improve the platform, and communicate important product updates. We treat gym owner data as confidential business information and do not share it with unauthorized third parties.",
        },
      ],
    },
    {
      id: "payment-information",
      number: "05",
      title: "Payment Information",
      blocks: [
        {
          type: "p",
          text: "GymXBook uses PCI-DSS compliant, RBI-authorised third-party payment gateways to process all subscription payments and in-platform transactions. We do not store full credit/debit card numbers, CVV codes, or net banking credentials on our servers.",
        },
      ],
      subsections: [
        {
          title: "5.1 What Payment Data GymXBook Stores",
          blocks: [
            {
              type: "bullets",
              items: [
                "Transaction reference IDs and order IDs returned by the payment gateway",
                "Payment status (success, failed, pending), amount, and currency",
                "Last four digits of the card used (for display purposes on invoices only)",
                "UPI Virtual Payment Address (VPA) if UPI payment method is used",
                "Invoice and billing records for GST compliance and accounting purposes",
              ],
            },
          ],
        },
        {
          title: "5.2 Member Payment Records",
          blocks: [
            {
              type: "p",
              text: "When gyms use GymXBook's Gym Membership Management module to record member fee payments — including cash payments, UPI transfers, or card transactions — these records are stored as part of the gym's business data. The gym operator is responsible for obtaining member consent for storing payment records.",
            },
          ],
        },
        {
          title: "5.3 7-Day Free Trial",
          blocks: [
            {
              type: "callout",
              text: "🎯 Free Trial — No Payment Required",
            },
            {
              type: "p",
              text: "GymXBook provides a 7-Day Free Trial for new customers. During the trial period, users may access selected platform features before purchasing a paid subscription. No credit card or payment information is required to activate the free trial. If you choose to upgrade to a paid plan after the trial, payment will be collected at that time, and this payment policy will apply.",
            },
          ],
        },
      ],
    },
    {
      id: "cookies-and-tracking",
      number: "06",
      title: "Cookies and Tracking Technologies",
      blocks: [
        {
          type: "p",
          text: "GymXBook uses cookies and similar tracking technologies to provide a seamless experience across our website and application. You can control cookie preferences through your browser settings; however, disabling certain cookies may limit platform functionality.",
        },
      ],
      subsections: [
        {
          title: "6.1 Types of Cookies We Use",
          blocks: [
            {
              type: "terms",
              items: [
                {
                  term: "Essential Cookies",
                  description:
                    "Required for authentication, session management, and core platform security. These cannot be disabled without breaking the service.",
                },
                {
                  term: "Functional Cookies",
                  description:
                    "Remember your preferences such as language settings, timezone, and dashboard layout configurations.",
                },
                {
                  term: "Analytics Cookies",
                  description:
                    "Collect anonymised data about how users navigate the platform to help us improve features and performance.",
                },
                {
                  term: "Marketing Cookies",
                  description:
                    "Used on our public website (not inside the app) to measure the effectiveness of our advertising campaigns on Google Ads and Meta Ads platforms.",
                },
              ],
            },
          ],
        },
        {
          title: "6.2 Third-Party Tracking",
          blocks: [
            {
              type: "p",
              text: "Our public website uses Google Analytics 4, Meta Pixel, and Google Tag Manager to understand visitor behaviour and optimise our marketing. These services may set their own cookies governed by their respective privacy policies. We do not use tracking cookies inside the secured GymXBook application dashboard.",
            },
          ],
        },
        {
          title: "6.3 Managing Cookies",
          blocks: [
            {
              type: "p",
              text: "You can manage or delete cookies via your browser settings. For detailed guidance, visit aboutcookies.org. You may also opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.",
            },
          ],
        },
      ],
    },
    {
      id: "how-we-use-information",
      number: "07",
      title: "How We Use Information",
      blocks: [
        {
          type: "p",
          text: "GymXBook uses the information we collect for the following purposes:",
        },
      ],
      subsections: [
        {
          title: "7.1 Service Delivery",
          blocks: [
            {
              type: "bullets",
              items: [
                "Provisioning and operating your GymXBook Gym Management Software account",
                "Processing payments, generating invoices, and managing subscription billing",
                "Enabling attendance tracking, membership management, and reporting features",
                "Providing the 7-Day Free Trial and managing trial-to-paid conversion workflows",
              ],
            },
          ],
        },
        {
          title: "7.2 Platform Improvement",
          blocks: [
            {
              type: "bullets",
              items: [
                "Analysing usage patterns to identify bugs, bottlenecks, and improvement opportunities",
                "A/B testing new features and measuring their impact on user productivity",
                "Building aggregate, anonymised industry benchmarks for gym performance insights",
              ],
            },
          ],
        },
        {
          title: "7.3 Communication",
          blocks: [
            {
              type: "bullets",
              items: [
                "Sending transactional emails: account creation, password reset, payment receipts",
                "Delivering product update notifications, feature announcements, and changelog emails",
                "Providing customer support responses and follow-ups",
                "Sending marketing communications (only with your consent; unsubscribe at any time)",
              ],
            },
          ],
        },
        {
          title: "7.4 Legal and Security",
          blocks: [
            {
              type: "bullets",
              items: [
                "Detecting, investigating, and preventing fraudulent or unauthorised account activity",
                "Complying with applicable Indian laws, court orders, and regulatory obligations",
                "Enforcing our Terms of Service and other platform policies",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "data-security",
      number: "08",
      title: "Data Security",
      blocks: [
        {
          type: "p",
          text: "Protecting the data of gym owners, their staff, and gym members is a top priority for GymXBook. We implement industry-standard security measures appropriate for a Fitness Management Software platform handling sensitive business and personal data.",
        },
        {
          type: "p",
          text: "Despite these measures, no method of transmission over the internet or electronic storage is 100% secure. If you discover a security vulnerability in GymXBook, please report it responsibly to security@gymxbook.com. We take all such reports seriously and will respond promptly.",
        },
      ],
    },
    {
      id: "data-retention",
      number: "09",
      title: "Data Retention",
      blocks: [
        {
          type: "p",
          text: "GymXBook retains personal data for as long as necessary to provide our Services and meet our legal obligations. Retention periods vary by data type:",
        },
        {
          type: "terms",
          items: [
            {
              term: "Active Account Data",
              description:
                "Retained for the duration of your active subscription, including any free trial period.",
            },
            {
              term: "Member & Attendance Records",
              description:
                "Retained while the subscribing gym's account is active. Gym owners may export or delete member records at any time via the platform.",
            },
            {
              term: "Payment & Invoice Records",
              description:
                "Retained for a minimum of 7 years to comply with GST and Income Tax requirements under Indian law.",
            },
            {
              term: "Support Tickets & Communications",
              description:
                "Retained for 3 years from the date of the last interaction.",
            },
            {
              term: "Analytics & Log Data",
              description:
                "Anonymised after 12 months; raw server logs purged after 90 days.",
            },
            {
              term: "Deleted Account Data",
              description:
                "Personal data is permanently deleted within 90 days of account closure, except where legal retention obligations apply.",
            },
            {
              term: "7-Day Free Trial Data",
              description:
                "If a trial account is not converted to a paid subscription and no further action is taken, all trial account data is purged 30 days after trial expiry.",
            },
          ],
        },
      ],
    },
    {
      id: "third-party-services",
      number: "10",
      title: "Third-Party Services",
      blocks: [
        {
          type: "p",
          text: "GymXBook integrates with carefully vetted third-party service providers to deliver specific functionality. Each provider is bound by a data processing agreement and is permitted to use your data only to perform services on our behalf.",
        },
        {
          type: "table",
          headers: ["Provider", "Purpose", "Data Shared"],
          rows: [
            ["Razorpay / PayU", "Payment processing", "Transaction amount, order ID"],
            ["Google Analytics 4", "Website traffic analysis", "Anonymised visitor behaviour"],
            ["Meta Pixel", "Ad campaign measurement", "Anonymised conversion events"],
            ["AWS / Cloud Host", "Infrastructure & storage", "All platform data (encrypted)"],
            ["Twilio / MSG91", "SMS & WhatsApp notifications", "Phone number, message content"],
            ["SendGrid / SMTP", "Transactional emails", "Email address, message content"],
            ["Google Workspace", "Business communications", "Support email content"],
            ["Intercom / Freshdesk", "Customer support chat", "Name, email, support history"],
          ],
        },
        {
          type: "p",
          text: "GymXBook does not sell, rent, or trade your personal information to third-party advertisers or data brokers. We disclose information to third parties only as described in this policy or with your explicit consent.",
        },
      ],
    },
    {
      id: "analytics-usage",
      number: "11",
      title: "Analytics Usage",
      blocks: [
        {
          type: "p",
          text: "GymXBook uses analytics tools at two levels: marketing analytics on our public website, and product analytics within the application.",
        },
      ],
      subsections: [
        {
          title: "11.1 Website Analytics",
          blocks: [
            {
              type: "p",
              text: "We use Google Analytics 4 with IP anonymisation enabled to understand how visitors discover and navigate our marketing website. This helps us improve our content and conversion funnels. The data collected is aggregated and does not personally identify individual visitors.",
            },
          ],
        },
        {
          title: "11.2 In-App Product Analytics",
          blocks: [
            {
              type: "p",
              text: "Inside the GymXBook dashboard, we collect anonymised event-level data (e.g., attendance report viewed, member added, invoice downloaded) to understand which features are most valuable and where users encounter friction. This data is tied to an anonymised account identifier, not to your personal identity.",
            },
          ],
        },
        {
          title: "11.3 Aggregate Business Insights",
          blocks: [
            {
              type: "p",
              text: "GymXBook may publish aggregated, anonymised industry benchmarks (e.g., average member retention rates across Indian gyms) derived from platform data. These aggregations cannot be used to identify individual gyms or their members.",
            },
          ],
        },
      ],
    },
    {
      id: "email-and-notifications",
      number: "12",
      title: "Email and Notification Services",
      subsections: [
        {
          title: "12.1 Transactional Notifications",
          blocks: [
            {
              type: "p",
              text: "GymXBook sends essential transactional communications required to operate your account. These cannot be opted out of while your account is active and include:",
            },
            {
              type: "bullets",
              items: [
                "Account registration and email verification messages",
                "Password reset and account security alerts",
                "Subscription payment confirmations, invoices, and renewal reminders",
                "Critical system and security notifications",
              ],
            },
          ],
        },
        {
          title: "12.2 Gym-to-Member Notifications",
          blocks: [
            {
              type: "p",
              text: "Gym owners can configure GymXBook to send automated notifications to their gym members via SMS, WhatsApp, or email. These messages include membership expiry reminders, payment due alerts, and attendance confirmations. The gym owner is responsible for obtaining member consent for such communications.",
            },
          ],
        },
        {
          title: "12.3 Marketing Communications",
          blocks: [
            {
              type: "p",
              text: "With your consent, GymXBook may send product newsletters, feature announcements, promotional offers, and webinar invitations. You can unsubscribe from marketing emails at any time by clicking the Unsubscribe link in any email, or by updating notification preferences in your account settings. Unsubscribing from marketing emails does not affect transactional notifications.",
            },
          ],
        },
      ],
    },
    {
      id: "user-rights",
      number: "13",
      title: "User Rights",
      blocks: [
        {
          type: "p",
          text: "GymXBook respects your rights over your personal data. Subject to applicable law, you have the following rights:",
        },
        {
          type: "terms",
          items: [
            { term: "Right of Access", description: "Request a copy of the personal data GymXBook holds about you." },
            { term: "Right to Rectification", description: "Correct inaccurate or incomplete personal data in your account." },
            { term: "Right to Erasure", description: "Request deletion of your personal data, subject to legal retention obligations." },
            { term: "Right to Portability", description: "Export your data in a machine-readable format (CSV/JSON) from the platform." },
            { term: "Right to Restrict", description: "Limit how we process your data in certain circumstances." },
            { term: "Right to Object", description: "Object to processing of your data for marketing purposes at any time." },
          ],
        },
        {
          type: "p",
          text: "To exercise any of these rights, contact us at privacy@gymxbook.com. We will respond within 30 days. For complex requests, we may require identity verification before processing your request.",
        },
        {
          type: "p",
          text: "Note for Gym Members: If you are a member of a gym that uses GymXBook, your primary contact for data requests should be your gym directly. GymXBook processes member data on behalf of gym operators and will refer member data requests to the relevant gym.",
        },
      ],
    },
    {
      id: "account-deletion",
      number: "14",
      title: "Account Deletion Policy",
      blocks: [
        {
          type: "p",
          text: "You have the right to close your GymXBook account and request deletion of your personal data at any time.",
        },
      ],
      subsections: [
        {
          title: "14.1 How to Delete Your Account",
          blocks: [
            {
              type: "bullets",
              items: [
                "Log in to your GymXBook dashboard and navigate to Settings → Account → Delete Account",
                "Alternatively, email support@gymxbook.com with subject Account Deletion Request",
                "Identity verification (OTP or password confirmation) required.",
              ],
            },
          ],
        },
        {
          title: "14.2 What Happens After Deletion",
          blocks: [
            {
              type: "bullets",
              items: [
                "Your account and login credentials are immediately deactivated upon confirmation",
                "All personal profile data, member records, attendance logs, and gym configurations are queued for permanent deletion within 90 days",
                "Financial records (invoices, payment history) are retained for 7 years as required by Indian tax law",
                "Active subscriptions are cancelled; no refunds issued.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "childrens-privacy",
      number: "15",
      title: "Children's Privacy",
      blocks: [
        {
          type: "p",
          text: "GymXBook's Gym Management Software is designed for use by businesses — gym owners, fitness centers, personal trainers, and their adult staff. Our Services are not directed at children under the age of 18.",
        },
      ],
    },
    {
      id: "international-transfers",
      number: "16",
      title: "International Data Transfers",
      blocks: [
        {
          type: "p",
          text: "GymXBook is an India-based SaaS company. Our primary data processing and storage infrastructure is located within India or in data centres that comply with Indian data protection requirements.",
        },
      ],
    },
    {
      id: "changes-to-policy",
      number: "17",
      title: "Changes to This Privacy Policy",
      blocks: [
        {
          type: "p",
          text: "GymXBook may update this Privacy Policy from time to time. We will notify you of material changes before they take effect.",
        },
      ],
    },
  ],
};

export const termsContent = {
  slug: "terms-and-conditions",
  eyebrow: "Legal Agreement",
  title: "Terms & Conditions",
  accent: "Conditions.",
  summary:
    "By using GymXBook, you agree to these Terms & Conditions. They govern your access to our Gym Management Software, including the 7-Day Free Trial, paid subscriptions, data you enter, and your obligations as a user. Please read them carefully — they are a binding legal agreement between you and GymXBook (Softovita).",
  footerNote:
    "Last modified: March 2026. These Terms are governed by the Information Technology Act, 2000, the Consumer Protection Act, 2019, and other applicable laws of India.",
  sections: [
    {
      id: "introduction",
      number: "01",
      title: "Introduction",
      blocks: [
        {
          type: "p",
          text: "Welcome to GymXBook, operated by Softovita (\"we,\" \"our,\" or \"us\"). GymXBook is India's leading Gym Management Software — a comprehensive SaaS platform purpose-built for gyms, fitness centers, fitness studios, and personal trainers. Our platform covers attendance tracking, membership management, payment collection, trainer management, and advanced reporting.",
        },
        {
          type: "p",
          text: "These Terms & Conditions (\"Terms\") govern your access to and use of the GymXBook website at gymxbook.com and all related software applications, features, and services (collectively, the \"Services\"). These Terms apply to all users including gym owners, gym administrators, staff members, personal trainers, and website visitors.",
        },
        {
          type: "p",
          text: "By registering an account, starting a 7-Day Free Trial, or otherwise accessing the Services, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are accepting these Terms on behalf of a business entity, you represent that you have the authority to bind that entity.",
        },
        {
          type: "p",
          text: "These Terms are governed by the Information Technology Act, 2000, the Consumer Protection Act, 2019, and other applicable laws of India. Users outside India are also subject to these Terms and any additional local laws that may apply.",
        },
      ],
    },
    {
      id: "acceptance",
      number: "02",
      title: "Acceptance of Terms",
      blocks: [
        {
          type: "p",
          text: "Your access to and use of GymXBook constitutes your acceptance of these Terms. You must be at least 18 years of age to create an account or use the Services. By accepting these Terms, you represent and warrant that:",
        },
        {
          type: "bullets",
          items: [
            "You are at least 18 years old and have the legal capacity to enter into a binding agreement",
            "If registering on behalf of a business, you have the authority to bind that business to these Terms",
            "All information you provide during registration is accurate, current, and complete",
            "Your use of the Services complies with all applicable local, national, and international laws and regulations",
            "You have read and agree to our Privacy Policy, which is incorporated into these Terms by reference",
          ],
        },
        {
          type: "p",
          text: "If you do not agree to any part of these Terms, you must immediately discontinue use of the Services and close your account. Continued use of GymXBook after any update to these Terms constitutes your acceptance of the revised Terms.",
        },
      ],
    },
    {
      id: "description",
      number: "03",
      title: "Description of Services",
      blocks: [
        {
          type: "p",
          text: "GymXBook is a cloud-based Gym Management Software platform that provides tools for gym operators to manage and grow their fitness businesses. The Services include, but are not limited to:",
        },
        {
          type: "bullets",
          items: [
            "Gym membership management including member registration, plan assignment, and renewal tracking",
            "Attendance tracking via manual check-in or biometric device integration",
            "Payment collection, receipt generation, and fee-due reminders",
            "Trainer management, scheduling, and assignment to members",
            "Business reporting and analytics dashboards",
            "Automated SMS, WhatsApp, and email notifications to gym members",
            "Multi-branch management for gym chains and franchise operators",
          ],
        },
      ],
      subsections: [
        {
          title: "3.2 Service Availability",
          blocks: [
            {
              type: "p",
              text: "GymXBook aims to maintain 99.5% uptime for its Services. We reserve the right to perform scheduled maintenance, which we will communicate in advance where practicable. We are not liable for temporary unavailability due to circumstances beyond our reasonable control, including force majeure events or third-party infrastructure failures.",
            },
          ],
        },
        {
          title: "3.3 Feature Updates",
          blocks: [
            {
              type: "p",
              text: "GymXBook continuously improves its platform. We may add, modify, or remove features at any time. Material changes that affect core functionality will be communicated to subscribers in advance. Access to new or premium features may require a plan upgrade.",
            },
          ],
        },
      ],
    },
    {
      id: "accounts",
      number: "04",
      title: "User Accounts",
      subsections: [
        {
          title: "4.1 Account Registration",
          blocks: [
            {
              type: "p",
              text: "To access GymXBook's Services, you must create an account by providing a valid email address, phone number, business name, and other required details. You are responsible for ensuring that all registration information is accurate and kept up to date.",
            },
          ],
        },
        {
          title: "4.2 Account Security",
          blocks: [
            {
              type: "bullets",
              items: [
                "You are responsible for maintaining the confidentiality of your account credentials, including your password",
                "You must not share your account credentials with any unauthorised third party",
                "You are responsible for all activity that occurs under your account, whether or not authorised by you",
                "You must notify GymXBook immediately at support@gymxbook.com if you suspect any unauthorised access to your account",
                "GymXBook recommends enabling two-factor authentication (2FA) for added account security",
              ],
            },
          ],
        },
        {
          title: "4.3 Sub-User Accounts",
          blocks: [
            {
              type: "p",
              text: "The primary account holder (gym owner/admin) may create sub-user accounts for staff members and trainers. The primary account holder is fully responsible for the actions of all sub-users operating under their subscription. GymXBook is not liable for any damage arising from sub-user misuse.",
            },
          ],
        },
        {
          title: "4.4 One Account Per Business",
          blocks: [
            {
              type: "p",
              text: "Each gym business is permitted one primary owner account per subscription. Multi-branch businesses may manage additional branches from a single account using GymXBook's multi-branch management feature, subject to the applicable subscription plan.",
            },
          ],
        },
      ],
    },
    {
      id: "trial",
      number: "05",
      title: "Free Trial",
      blocks: [
        { type: "callout", text: "🎯 7-Day Free Trial — No Credit Card Required" },
        {
          type: "p",
          text: "New customers are eligible for a 7-Day Free Trial of GymXBook's Gym Management Software. No credit card or payment information is required to activate the trial.",
        },
      ],
      subsections: [
        {
          title: "5.1 Trial Eligibility",
          blocks: [
            {
              type: "p",
              text: "The 7-Day Free Trial is available to first-time users only. Each business entity is entitled to one free trial. GymXBook reserves the right to refuse or revoke trial access if it suspects misuse, multiple trial accounts by the same entity, or fraudulent registration.",
            },
          ],
        },
        {
          title: "5.2 Trial Limitations",
          blocks: [
            {
              type: "bullets",
              items: [
                "During the trial, certain advanced features or integrations may be restricted and available only on paid plans",
                "GymXBook reserves the right to apply fair-use data limits during the trial period",
                "Trial accounts are subject to all other provisions of these Terms",
              ],
            },
          ],
        },
        {
          title: "5.3 Trial Expiry",
          blocks: [
            {
              type: "p",
              text: "At the end of the 7-Day Free Trial, access to the Services will be suspended unless you upgrade to a paid subscription. Trial data is retained for 30 days after expiry, giving you the opportunity to export your data or convert to a paid plan. After 30 days, all trial data is permanently deleted.",
            },
          ],
        },
        {
          title: "5.4 Conversion to Paid Plan",
          blocks: [
            {
              type: "p",
              text: "Upgrading to a paid plan before or at the end of the trial period will immediately unlock full platform access. All data entered during the trial is carried forward to the paid account. Billing will begin from the date of upgrade.",
            },
          ],
        },
      ],
    },
    {
      id: "billing",
      number: "06",
      title: "Subscriptions & Billing",
      subsections: [
        {
          title: "6.1 Subscription Plans",
          blocks: [
            {
              type: "p",
              text: "GymXBook offers subscription plans on monthly or annual billing cycles. Plan details, features, and current pricing are published on our pricing page and may be updated from time to time. All prices are listed in Indian Rupees (INR) and are inclusive of applicable GST unless stated otherwise.",
            },
          ],
        },
        {
          title: "6.2 Payment",
          blocks: [
            {
              type: "bullets",
              items: [
                "Payments are processed securely via PCI-DSS compliant, RBI-authorised payment gateways including Razorpay and PayU",
                "Accepted payment methods include credit/debit cards, UPI, net banking, and wallets",
                "GymXBook does not store full card details on its servers",
                "A GST-compliant tax invoice is generated and emailed to you for every successful payment",
              ],
            },
          ],
        },
        {
          title: "6.3 Renewals",
          blocks: [
            {
              type: "p",
              text: "Subscriptions do not auto-renew by default unless you have explicitly enabled auto-renewal. You will receive renewal reminder notifications before your subscription expires. It is your responsibility to renew your subscription to avoid service interruption.",
            },
          ],
        },
        {
          title: "6.4 Refund Policy",
          blocks: [
            {
              type: "p",
              text: "All subscription fees are non-refundable except where required by applicable Indian consumer protection laws. If you believe you have been charged in error, contact billing@gymxbook.com within 7 days of the transaction for review. GymXBook may, at its sole discretion, offer credits or partial refunds in exceptional circumstances.",
            },
          ],
        },
        {
          title: "6.5 Price Changes",
          blocks: [
            {
              type: "p",
              text: "GymXBook reserves the right to change subscription pricing. Any price changes will be communicated at least 30 days in advance and will take effect at the start of your next billing cycle.",
            },
          ],
        },
      ],
    },
    {
      id: "acceptable-use",
      number: "07",
      title: "Acceptable Use Policy",
      blocks: [
        {
          type: "p",
          text: "You agree to use GymXBook only for lawful purposes and in accordance with these Terms. The following uses are expressly prohibited:",
        },
        {
          type: "bullets",
          items: [
            "Using the Services for any unlawful purpose or in violation of any applicable law or regulation",
            "Attempting to gain unauthorised access to any part of the platform, other user accounts, or GymXBook's infrastructure",
            "Uploading or transmitting malware, viruses, or any malicious code",
            "Scraping, crawling, or data-mining any part of the platform without prior written consent",
            "Reverse engineering, decompiling, or disassembling the GymXBook software",
            "Reselling, sublicensing, or otherwise commercialising access to GymXBook without authorisation",
            "Entering false, misleading, or fraudulent data about gym members or business operations",
            "Using the platform to send unsolicited bulk communications (spam) to gym members",
            "Interfering with or disrupting the integrity or performance of the Services or related systems",
          ],
        },
        {
          type: "p",
          text: "GymXBook reserves the right to investigate violations of this policy. Upon finding a violation, we may suspend or permanently terminate your account without notice and without liability to you, and we may report the activity to relevant law enforcement authorities.",
        },
      ],
    },
    {
      id: "ip",
      number: "08",
      title: "Intellectual Property",
      subsections: [
        {
          title: "8.1 GymXBook's Intellectual Property",
          blocks: [
            {
              type: "p",
              text: "All intellectual property rights in and to the GymXBook platform — including the software, code, design, graphics, logos, trademarks, user interface, documentation, and all content produced by GymXBook — are owned exclusively by Softovita. These are protected under Indian copyright, trademark, and trade secret laws.",
            },
            {
              type: "p",
              text: "Nothing in these Terms grants you any ownership rights in GymXBook's intellectual property. Your subscription grants you a limited, non-exclusive, non-transferable, revocable licence to access and use the Services solely for your own internal business purposes.",
            },
          ],
        },
        {
          title: "8.2 Restrictions",
          blocks: [
            {
              type: "bullets",
              items: [
                "You may not copy, reproduce, distribute, or create derivative works of any GymXBook-owned content",
                "You may not use GymXBook's trademarks, logos, or branding without prior written permission",
                "You may not remove or alter any copyright, trademark, or proprietary rights notices from any part of the platform",
              ],
            },
          ],
        },
        {
          title: "8.3 Feedback",
          blocks: [
            {
              type: "p",
              text: "If you submit ideas, suggestions, or feedback about GymXBook (\"Feedback\"), you grant Softovita a non-exclusive, royalty-free, perpetual, irrevocable licence to use, adapt, and incorporate that Feedback into the platform without any obligation of compensation or attribution.",
            },
          ],
        },
      ],
    },
    {
      id: "user-data",
      number: "09",
      title: "User Content & Data",
      subsections: [
        {
          title: "9.1 Your Data Ownership",
          blocks: [
            {
              type: "p",
              text: "You retain full ownership of all data you enter into the GymXBook platform, including member profiles, attendance records, payment records, and business configurations (\"Your Data\"). GymXBook does not claim any ownership rights over Your Data.",
            },
          ],
        },
        {
          title: "9.2 Licence to GymXBook",
          blocks: [
            {
              type: "p",
              text: "By using the Services, you grant GymXBook a limited, non-exclusive, worldwide licence to store, process, and use Your Data solely for the purposes of providing and improving the Services as described in our Privacy Policy.",
            },
          ],
        },
        {
          title: "9.3 Your Responsibilities",
          blocks: [
            {
              type: "bullets",
              items: [
                "You are solely responsible for the accuracy, legality, and completeness of all data you enter into GymXBook",
                "You must obtain all necessary consents from your gym members before entering their personal data into the platform",
                "You must ensure that your use of GymXBook to process member data complies with applicable data protection laws",
                "You must not upload any data that infringes third-party intellectual property rights or is otherwise unlawful",
              ],
            },
          ],
        },
        {
          title: "9.4 Data Export",
          blocks: [
            {
              type: "p",
              text: "GymXBook provides data export functionality so you can retrieve Your Data at any time. We strongly recommend maintaining your own backups of critical business data. GymXBook's backup systems are provided for platform continuity and are not a substitute for your own data management practices.",
            },
          ],
        },
      ],
    },
    {
      id: "third-parties",
      number: "10",
      title: "Third-Party Services",
      blocks: [
        {
          type: "p",
          text: "GymXBook integrates with third-party service providers such as payment gateways, SMS/WhatsApp services, and cloud infrastructure to deliver its Services. Your use of these integrated services is subject to their respective terms and privacy policies.",
        },
        {
          type: "bullets",
          items: [
            "GymXBook is not responsible for the availability, accuracy, or practices of any third-party service",
            "Any disputes arising from your use of a third-party service must be resolved directly with that provider",
            "GymXBook's platform may contain links to third-party websites. These links are provided for convenience only and do not imply endorsement of the linked site or its content",
            "GymXBook shall not be liable for any loss or damage arising from your use of or reliance on third-party services or linked websites",
          ],
        },
        {
          type: "p",
          text: "GymXBook carefully selects its third-party partners and requires them to maintain data protection standards consistent with our obligations. However, once data leaves GymXBook's direct control and is processed by a third party, that third party's terms and policies govern that processing.",
        },
      ],
    },
    {
      id: "disclaimers",
      number: "11",
      title: "Disclaimers",
      blocks: [
        {
          type: "p",
          text: "GymXBook's Services are provided on an \"as is\" and \"as available\" basis without warranties of any kind, either express or implied, to the maximum extent permitted by applicable law.",
        },
        {
          type: "terms",
          items: [
            {
              term: "No Warranty of Fitness",
              description:
                "GymXBook does not warrant that the Services will meet your specific business requirements or that the platform is fit for any particular purpose beyond its described features.",
            },
            {
              term: "No Warranty of Uninterrupted Service",
              description:
                "We do not guarantee that the Services will be error-free, uninterrupted, or free from security vulnerabilities, though we make commercially reasonable efforts to ensure these standards.",
            },
            {
              term: "No Business Outcome Guarantee",
              description:
                "GymXBook is a software tool. We make no warranty that use of the platform will result in specific business outcomes, increased membership, revenue, or any other commercial benefit.",
            },
            {
              term: "Data Accuracy",
              description:
                "The accuracy of reports, analytics, and dashboards depends entirely on the accuracy of data entered by you or your staff. GymXBook disclaims responsibility for reports generated from inaccurate or incomplete input data.",
            },
          ],
        },
      ],
    },
    {
      id: "liability",
      number: "12",
      title: "Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: "To the maximum extent permitted by applicable Indian law, Softovita (GymXBook) and its directors, employees, and agents shall not be liable for:",
        },
        {
          type: "bullets",
          items: [
            "Any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Services",
            "Loss of profits, revenue, data, business opportunities, or goodwill",
            "Damages arising from unauthorised access to or alteration of your data where GymXBook has taken reasonable security precautions",
            "Damages arising from the actions or omissions of third-party service providers integrated with GymXBook",
            "Loss or corruption of data resulting from circumstances beyond GymXBook's reasonable control",
          ],
        },
        {
          type: "p",
          text: "In any event, GymXBook's total aggregate liability to you for all claims arising under these Terms shall not exceed the total subscription fees paid by you to GymXBook in the three (3) months immediately preceding the event giving rise to the claim.",
        },
        {
          type: "p",
          text: "Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded under applicable law.",
        },
      ],
    },
    {
      id: "indemnification",
      number: "13",
      title: "Indemnification",
      blocks: [
        {
          type: "p",
          text: "You agree to indemnify, defend, and hold harmless Softovita, its affiliates, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or related to:",
        },
        {
          type: "bullets",
          items: [
            "Your use of the Services in violation of these Terms",
            "Your violation of any applicable law or regulation",
            "Your failure to obtain proper consents from gym members before entering their data into the platform",
            "Any third-party claim arising from data you entered, uploaded, or processed using GymXBook",
            "Any misrepresentation made by you in connection with your use of the Services",
          ],
        },
        {
          type: "p",
          text: "GymXBook reserves the right to assume exclusive control of the defence of any matter subject to indemnification by you, at your expense. You agree to cooperate with our defence of such claims.",
        },
      ],
    },
    {
      id: "termination",
      number: "14",
      title: "Termination",
      subsections: [
        {
          title: "14.1 Termination by You",
          blocks: [
            {
              type: "p",
              text: "You may terminate your GymXBook account at any time by navigating to Settings → Account → Delete Account, or by contacting support@gymxbook.com. Termination does not entitle you to a refund of any prepaid subscription fees. Upon termination, your access to the Services will cease immediately.",
            },
          ],
        },
        {
          title: "14.2 Termination by GymXBook",
          blocks: [
            {
              type: "p",
              text: "GymXBook reserves the right to suspend or terminate your account and access to the Services at any time, with or without prior notice, if:",
            },
            {
              type: "bullets",
              items: [
                "You breach any provision of these Terms",
                "You fail to pay applicable subscription fees",
                "We reasonably believe your account is being used for fraudulent, illegal, or harmful activity",
                "Continuation of the Services to you creates legal, security, or reputational risk for GymXBook",
                "We cease to offer the Services or a particular feature you subscribed for",
              ],
            },
          ],
        },
        {
          title: "14.3 Effect of Termination",
          blocks: [
            {
              type: "p",
              text: "Upon termination, your right to use the Services immediately ceases. Your data will be retained for 90 days post-termination, during which you may request an export. After 90 days, data is permanently deleted, except for financial records retained for statutory compliance. Sections 8, 11, 12, 13, 15, and 16 of these Terms survive termination.",
            },
          ],
        },
      ],
    },
    {
      id: "governing-law",
      number: "15",
      title: "Governing Law",
      blocks: [
        {
          type: "p",
          text: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Specifically, these Terms are subject to:",
        },
        {
          type: "bullets",
          items: [
            "The Information Technology Act, 2000 and its amendments",
            "The Contract Act, 1872",
            "The Consumer Protection Act, 2019",
            "The Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021",
            "Any other applicable laws of India as amended from time to time",
          ],
        },
        {
          type: "p",
          text: "If you access or use GymXBook from outside India, you are responsible for compliance with the laws of your jurisdiction in addition to these Terms. GymXBook makes no representation that the Services are appropriate or available in all locations.",
        },
      ],
    },
    {
      id: "disputes",
      number: "16",
      title: "Dispute Resolution",
      subsections: [
        {
          title: "16.1 Informal Resolution",
          blocks: [
            {
              type: "p",
              text: "Before pursuing formal dispute resolution, we encourage you to contact us at legal@gymxbook.com to attempt to resolve any dispute informally. Most concerns can be resolved quickly and amicably through direct communication. GymXBook will endeavour to respond to all such queries within 15 business days.",
            },
          ],
        },
        {
          title: "16.2 Arbitration",
          blocks: [
            {
              type: "p",
              text: "If a dispute cannot be resolved informally within 30 days, it shall be submitted to binding arbitration under the Arbitration and Conciliation Act, 1996 of India. The arbitration shall be conducted by a sole arbitrator mutually agreed upon by the parties, or as appointed by a competent court. The seat and venue of arbitration shall be India, and the language of proceedings shall be English.",
            },
          ],
        },
        {
          title: "16.3 Jurisdiction",
          blocks: [
            {
              type: "p",
              text: "For any dispute not subject to arbitration, or for interim injunctive relief, the courts of India shall have exclusive jurisdiction. By using GymXBook, you consent to the personal jurisdiction of such courts and waive any objection to the exercise of such jurisdiction.",
            },
          ],
        },
        {
          title: "16.4 Class Action Waiver",
          blocks: [
            {
              type: "p",
              text: "All disputes must be brought on an individual basis. You waive any right to bring or participate in a class action, collective action, or representative proceeding against GymXBook to the extent permitted by applicable law.",
            },
          ],
        },
      ],
    },
    {
      id: "changes",
      number: "17",
      title: "Changes to These Terms",
      blocks: [
        {
          type: "p",
          text: "GymXBook may revise these Terms from time to time to reflect changes in the law, our business practices, or the Services we offer. We are committed to notifying you of material changes before they take effect.",
        },
      ],
      subsections: [
        {
          title: "17.1 How We Notify You",
          blocks: [
            {
              type: "terms",
              items: [
                {
                  term: "In-App Banner",
                  description:
                    "A prominent notice will appear in your GymXBook dashboard for at least 14 days before material changes take effect.",
                },
                {
                  term: "Email Notification",
                  description:
                    "We will send an email to your registered account address at least 7 days before significant changes take effect.",
                },
                {
                  term: 'Updated "Last Modified" Date',
                  description:
                    "The date at the top of this page reflects when the Terms were most recently updated.",
                },
              ],
            },
          ],
        },
        {
          title: "17.2 Your Continued Use",
          blocks: [
            {
              type: "p",
              text: "Your continued use of GymXBook after the effective date of updated Terms constitutes your acceptance of the revised Terms. If you disagree with any changes, you must discontinue use of the Services and close your account before the updated Terms take effect.",
            },
            {
              type: "p",
              text: "We encourage you to review these Terms periodically and to keep your contact details up to date so that you do not miss important notifications.",
            },
          ],
        },
      ],
    },
  ],
};
