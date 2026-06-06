export type Course = {
  slug: string;
  level: "ug" | "pg";
  name: string;
  short: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  whoCanApply: string[];
  eligibility: string;
  duration: string;
  subjects: string[];
  careers: string[];
  whyChoose: string[];
  faqs: { q: string; a: string }[];
  ctaLine: string;
};

export const COURSES: Course[] = [
  {
    slug: "online-ba",
    level: "ug",
    name: "Online BA",
    short: "BA",
    tagline: "Flexible undergraduate degree in arts and humanities.",
    metaTitle: "Online BA Admission Guidance in Chennai | My Distance Education",
    metaDescription:
      "Get guidance for Online BA admission, eligibility, subjects, universities and career options after 12th.",
    overview:
      "An Online BA is an undergraduate arts program suitable for students interested in humanities, languages, public administration, English, history, economics, sociology and political science. At My Distance Education we help students choose the right Online BA program based on interest and career goals.",
    whoCanApply: [
      "Students who completed 12th standard",
      "Students interested in humanities and social sciences",
      "Working students",
      "Students preparing for government exams",
      "Students with study gaps",
    ],
    eligibility: "12th pass from a recognised board. Eligibility may vary by university.",
    duration: "Usually 3 years.",
    subjects: ["English", "History", "Economics", "Political Science", "Sociology", "Public Administration", "Psychology", "Journalism"],
    careers: ["Content Writer", "Administrative Executive", "Teacher (with further qualification)", "Public Service Aspirant", "Social Sector Roles", "Research Assistant"],
    whyChoose: ["Flexible undergraduate option", "Suitable for government exam preparation", "Strong base for MA and higher studies", "Affordable and accessible"],
    faqs: [
      { q: "Can I do Online BA after 12th?", a: "Yes, students who completed 12th from a recognised board can apply." },
      { q: "Is Online BA useful for government jobs?", a: "Yes, a BA degree is a common eligibility for many government exams." },
      { q: "Which BA subject should I choose?", a: "Choose based on your interest and long-term career goal." },
    ],
    ctaLine: "Start your undergraduate journey with the right Online BA program.",
  },
  {
    slug: "online-bba",
    level: "ug",
    name: "Online BBA",
    short: "BBA",
    tagline: "Undergraduate business management program for future leaders.",
    metaTitle: "Online BBA Admission Guidance in Chennai | My Distance Education",
    metaDescription:
      "Get guidance for Online BBA admission, eligibility, universities, fees and career options after 12th.",
    overview:
      "An Online BBA is an undergraduate business management program suitable for students who want to start a career in business, management, marketing, HR, finance, sales, operations or entrepreneurship.",
    whoCanApply: ["Students who completed 12th standard", "Students interested in business and management", "Future entrepreneurs", "Students planning to do MBA later", "Working students"],
    eligibility: "12th pass from a recognised board. Eligibility may vary by university.",
    duration: "Usually 3 years.",
    subjects: ["Principles of Management", "Marketing Management", "Business Communication", "Financial Accounting", "Human Resource Management", "Business Economics", "Entrepreneurship", "Operations Management"],
    careers: ["Business Development Executive", "Marketing Executive", "HR Assistant", "Sales Executive", "Operations Coordinator", "Junior Business Analyst", "Entrepreneur"],
    whyChoose: ["Strong foundation for business career", "Ideal before MBA", "Flexible learning after 12th", "Builds management knowledge"],
    faqs: [
      { q: "Can I do Online BBA after 12th?", a: "Yes, students who completed 12th can apply." },
      { q: "Is Online BBA good before MBA?", a: "Yes, BBA gives a strong business foundation before MBA." },
      { q: "Who should choose BBA?", a: "Students interested in management, marketing, HR, sales or entrepreneurship." },
    ],
    ctaLine: "Start your management career with Online BBA. Get free counselling today.",
  },
  {
    slug: "online-bca",
    level: "ug",
    name: "Online BCA",
    short: "BCA",
    tagline: "Undergraduate computer applications degree for IT careers.",
    metaTitle: "Online BCA Admission Guidance in Chennai | My Distance Education",
    metaDescription:
      "Get guidance for Online BCA admission after 12th. Learn eligibility, fees, universities, subjects and career options.",
    overview:
      "An Online BCA is an undergraduate computer applications program suitable for students who want to start a career in IT, software development, web development, programming, app development, data or technology.",
    whoCanApply: ["Students who completed 12th standard", "Students interested in IT and computers", "Students interested in programming", "Students planning for MCA in future", "Working students"],
    eligibility: "12th pass from a recognised board. Some universities may prefer mathematics or computer science background.",
    duration: "Usually 3 years.",
    subjects: ["Programming", "Computer Fundamentals", "Database Management", "Web Development", "Data Structures", "Operating Systems", "Software Engineering", "Python", "Java"],
    careers: ["Junior Software Developer", "Web Developer", "IT Support Executive", "App Developer", "Technical Support Associate", "Junior Programmer"],
    whyChoose: ["Strong starting point for IT career", "Suitable for students interested in computers", "Flexible learning after 12th", "Useful before MCA"],
    faqs: [
      { q: "Can I do Online BCA after 12th?", a: "Yes, students who completed 12th from a recognised board can apply." },
      { q: "Is Online BCA suitable for IT jobs?", a: "Yes, BCA builds technical skills useful for entry-level IT roles." },
      { q: "What is the duration of Online BCA?", a: "Usually 3 years." },
    ],
    ctaLine: "Start your IT career with Online BCA. Talk to our counsellor today.",
  },
  {
    slug: "online-bcom",
    level: "ug",
    name: "Online B.Com",
    short: "B.Com",
    tagline: "Undergraduate commerce program for finance and accounting careers.",
    metaTitle: "Online B.Com Admission Guidance in Chennai | My Distance Education",
    metaDescription:
      "Get guidance for Online B.Com admission, eligibility, universities, subjects, fees and career options after 12th.",
    overview:
      "An Online B.Com is an undergraduate commerce program suitable for students interested in commerce, accounting, finance, taxation, banking and business.",
    whoCanApply: ["Students who completed 12th standard", "Students interested in commerce and finance", "Students planning M.Com or MBA later", "Working students"],
    eligibility: "12th pass from a recognised board. Eligibility may vary by university.",
    duration: "Usually 3 years.",
    subjects: ["Financial Accounting", "Business Law", "Taxation", "Banking", "Business Management", "Economics", "Corporate Accounting"],
    careers: ["Accountant", "Tax Assistant", "Banking Professional", "Audit Assistant", "Business Executive"],
    whyChoose: ["Strong foundation for commerce careers", "Useful before M.Com / MBA", "Flexible learning after 12th", "Wide career opportunities"],
    faqs: [
      { q: "Can I do Online B.Com after 12th?", a: "Yes, students from any 12th stream can typically apply." },
      { q: "Is Online B.Com useful for banking jobs?", a: "Yes, B.Com is a common eligibility for banking and finance roles." },
      { q: "Duration of Online B.Com?", a: "Usually 3 years." },
    ],
    ctaLine: "Build your commerce career with Online B.Com. Get free admission guidance.",
  },
  {
    slug: "online-mba",
    level: "pg",
    name: "Online MBA",
    short: "MBA",
    tagline: "Postgraduate management degree for working professionals.",
    metaTitle: "Online MBA Admission Guidance in Chennai | My Distance Education",
    metaDescription:
      "Get expert guidance for Online MBA admission. Compare universities, specializations, eligibility, fees and admission process with free counselling.",
    overview:
      "An Online MBA is a flexible postgraduate management program designed for graduates and working professionals who want to grow in business, management, leadership, marketing, finance, HR, analytics, operations or entrepreneurship.",
    whoCanApply: ["Graduates from any stream", "Working professionals", "Business owners", "Team leaders and managers", "Career changers", "Professionals looking for promotion"],
    eligibility: "Graduation from a recognised university. Eligibility may vary by university and specialization.",
    duration: "Usually 2 years.",
    subjects: ["Marketing Management", "Finance Management", "Human Resource Management", "Business Analytics", "Operations Management", "International Business", "Digital Marketing", "Healthcare Management"],
    careers: ["Marketing Executive", "HR Executive", "Business Development Manager", "Operations Executive", "Finance Executive", "Business Analyst", "Sales Manager", "Entrepreneur"],
    whyChoose: ["Flexible learning for working professionals", "Career growth opportunities", "Multiple specializations", "Suitable for promotion and skill improvement"],
    faqs: [
      { q: "Is Online MBA suitable for working professionals?", a: "Yes, Online MBA offers flexible learning ideal for working professionals." },
      { q: "Can I apply for Online MBA after any degree?", a: "Yes, graduates from many streams can apply. Eligibility varies by university." },
      { q: "How do I choose the right specialization?", a: "Choose based on your career goal, current role and future industry interest." },
    ],
    ctaLine: "Confused about which Online MBA university to choose? Talk to our counsellor today.",
  },
  {
    slug: "online-mca",
    level: "pg",
    name: "Online MCA",
    short: "MCA",
    tagline: "Postgraduate computer applications degree for IT growth.",
    metaTitle: "Online MCA Admission Guidance in Chennai | My Distance Education",
    metaDescription:
      "Get guidance for Online MCA admission, eligibility, universities, fees, career scope and specialization options.",
    overview:
      "An Online MCA is a postgraduate computer applications program suitable for those who want to build a career in IT, software development, data analytics, cloud computing, cybersecurity and technology.",
    whoCanApply: ["BCA graduates", "Computer science graduates", "Graduates with mathematics background", "Working IT professionals", "Career changers interested in IT"],
    eligibility: "Graduation from a recognised university. Some universities may require mathematics or CS background.",
    duration: "Usually 2 years.",
    subjects: ["Programming", "Database Management", "Software Engineering", "Web Technologies", "Cloud Computing", "Data Analytics", "Cybersecurity", "Artificial Intelligence"],
    careers: ["Software Developer", "Web Developer", "Data Analyst", "Cloud Support Associate", "Cybersecurity Associate", "IT Consultant"],
    whyChoose: ["Good for IT career growth", "Suitable for software roles", "Flexible learning", "Useful for working IT professionals"],
    faqs: [
      { q: "Is Online MCA good for IT jobs?", a: "Yes, Online MCA supports careers in software, IT, programming and data." },
      { q: "Can I apply for MCA without BCA?", a: "Some universities allow other graduates if math eligibility is met. Depends on rules." },
      { q: "Suitable for working professionals?", a: "Yes, the flexible mode is ideal for working professionals." },
    ],
    ctaLine: "Want to build your IT career with Online MCA? Speak to our counsellor today.",
  },
  {
    slug: "online-ma",
    level: "pg",
    name: "Online MA",
    short: "MA",
    tagline: "Postgraduate arts degree across humanities and social sciences.",
    metaTitle: "Online MA Admission Guidance in Chennai | My Distance Education",
    metaDescription:
      "Get guidance for Online MA admission, eligibility, subjects, universities, fees and career options.",
    overview:
      "An Online MA is a postgraduate arts program suitable for students who want advanced knowledge in humanities, social sciences, languages, public administration, economics, history, sociology, political science or psychology.",
    whoCanApply: ["Graduates from arts or eligible streams", "Working professionals", "Teachers and aspiring educators", "Students preparing for government exams"],
    eligibility: "Graduation from a recognised university. Subject eligibility may vary.",
    duration: "Usually 2 years.",
    subjects: ["English", "Tamil", "History", "Economics", "Political Science", "Public Administration", "Sociology", "Psychology", "Journalism"],
    careers: ["Teacher (with required qualification)", "Content Writer", "Research Assistant", "Administrative Executive", "Public Service Aspirant"],
    whyChoose: ["Flexible higher education option", "Useful for government exam preparation", "Useful for teaching and academic careers", "Builds subject expertise"],
    faqs: [
      { q: "Can I do Online MA after any degree?", a: "Many universities allow it, but eligibility depends on subject and university." },
      { q: "Which MA subject is best?", a: "Depends on your career goal, interest and future plan." },
      { q: "Useful for teaching?", a: "It can support teaching careers; additional qualifications may apply." },
    ],
    ctaLine: "Need help choosing the right Online MA subject? Talk to our academic counsellor.",
  },
  {
    slug: "online-mcom",
    level: "pg",
    name: "Online M.Com",
    short: "M.Com",
    tagline: "Postgraduate commerce degree for finance and accounting growth.",
    metaTitle: "Online M.Com Admission Guidance in Chennai | My Distance Education",
    metaDescription:
      "Get guidance for Online M.Com admission, eligibility, universities, fees, subjects and career opportunities.",
    overview:
      "An Online M.Com is a postgraduate commerce program suitable for students interested in finance, accounting, taxation, banking, business, economics and teaching-related careers.",
    whoCanApply: ["B.Com graduates", "Commerce graduates", "Finance and accounting professionals", "Working professionals", "Students preparing for banking careers"],
    eligibility: "Graduation from a recognised university. Commerce background may be preferred.",
    duration: "Usually 2 years.",
    subjects: ["Accounting", "Finance", "Taxation", "Business Management", "Economics", "Banking", "Corporate Accounting", "Financial Management"],
    careers: ["Accountant", "Finance Executive", "Tax Assistant", "Banking Professional", "Audit Assistant", "Commerce Teacher (with required qualification)"],
    whyChoose: ["Good option for commerce graduates", "Useful for finance and accounting roles", "Flexible learning mode", "Suitable for working professionals"],
    faqs: [
      { q: "Can I do Online M.Com after BBA?", a: "Some universities allow it; many prefer commerce background." },
      { q: "Useful for finance jobs?", a: "Yes, it supports careers in finance, accounting, taxation and banking." },
      { q: "Duration?", a: "Usually 2 years." },
    ],
    ctaLine: "Planning higher studies in commerce? Get Online M.Com admission guidance today.",
  },
];

export const getCourse = (slug: string) => COURSES.find((c) => c.slug === slug);
export const UG_COURSES = COURSES.filter((c) => c.level === "ug");
export const PG_COURSES = COURSES.filter((c) => c.level === "pg");
