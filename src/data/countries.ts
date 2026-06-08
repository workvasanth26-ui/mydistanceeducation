export type Country = {
  slug: string;
  name: string;
  code: string; // ISO 3166-1 alpha-2 lowercase, used for flag images
  flag: string; // emoji fallback
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  highlights: string[];
  popularCourses: string[];
  whyStudy: string[];
};

const mk = (
  slug: string,
  name: string,
  code: string,
  flag: string,
  tagline: string,
  highlights: string[],
  popularCourses: string[],
  whyStudy: string[],
): Country => ({
  slug,
  name,
  code,
  flag,
  tagline,
  metaTitle: `Study in ${name} | Counselling & Admission Guidance Chennai`,
  metaDescription: `Get expert study in ${name} counselling — university selection, course guidance, eligibility, SOP, scholarships and visa process. Free consultation in Chennai.`,
  highlights,
  popularCourses,
  whyStudy,
});

export const COUNTRIES: Country[] = [
  mk("study-in-uk", "United Kingdom", "gb", "🇬🇧", "World-class universities with 1-year master's options.",
    ["Globally recognised degrees", "1-year master's programs", "Post-study work visa available", "Rich academic heritage"],
    ["MBA", "MSc Data Science", "MSc Computer Science", "MA International Business", "LLM"],
    ["Top-ranked universities", "Diverse student community", "Strong industry links", "Scholarship opportunities"]),
  mk("study-in-usa", "United States of America", "us", "🇺🇸", "Largest higher education ecosystem with world-leading research.",
    ["Top global universities", "STEM OPT extension", "Research opportunities", "Flexible curriculum"],
    ["MS Computer Science", "MBA", "MS Data Science", "MS Engineering", "MS Business Analytics"],
    ["Cutting-edge research", "Career-focused programs", "Wide scholarship options", "Global industry exposure"]),
  mk("study-in-canada", "Canada", "ca", "🇨🇦", "Affordable quality education with strong post-study work pathways.",
    ["PGWP up to 3 years", "Affordable tuition", "Safe and welcoming country", "Pathway to PR"],
    ["MBA", "MS Computer Science", "Data Analytics", "Engineering", "Hospitality Management"],
    ["High quality education", "Multicultural environment", "Strong job market", "PR friendly policies"]),
  mk("study-in-australia", "Australia", "au", "🇦🇺", "Innovative universities and lifestyle-friendly campuses.",
    ["Group of Eight universities", "Post-study work visa", "Quality lifestyle", "Industry-aligned courses"],
    ["MBA", "Information Technology", "Engineering", "Nursing", "Accounting"],
    ["High living standards", "Strong research output", "Multicultural cities", "Skilled migration options"]),
  mk("study-in-new-zealand", "New Zealand", "nz", "🇳🇿", "Quality education in a safe, scenic environment.",
    ["8 government universities", "Post-study work rights", "Safe environment", "Scholarship support"],
    ["IT", "Business Management", "Engineering", "Hospitality", "Agriculture"],
    ["High quality of life", "Welcoming to international students", "Strong academic standards", "Beautiful campuses"]),
  mk("study-in-germany", "Germany", "de", "🇩🇪", "Tuition-free public universities with engineering excellence.",
    ["No/low tuition at public universities", "Strong engineering reputation", "18-month job seeker visa", "Affordable living"],
    ["MS Mechanical Engineering", "MS Automotive", "MS Computer Science", "MBA", "MS Renewable Energy"],
    ["Globally respected degrees", "Strong economy and job market", "Affordable education", "Innovation hub"]),
  mk("study-in-france", "France", "fr", "🇫🇷", "World leader in business, fashion and culinary arts.",
    ["Top business schools", "Affordable public universities", "Post-study work options", "Cultural capital"],
    ["MBA", "MS Management", "Luxury Brand Management", "Fashion", "Culinary Arts"],
    ["Globally ranked schools", "Rich culture", "Scholarship opportunities", "Gateway to Europe"]),
  mk("study-in-ireland", "Ireland", "ie", "🇮🇪", "Tech hub of Europe with strong post-study work options.",
    ["2-year stay-back option", "Home to top tech companies", "English-speaking country", "Welcoming community"],
    ["MS Data Analytics", "MS Computer Science", "MBA", "MS Finance", "Pharmaceuticals"],
    ["Strong tech ecosystem", "Friendly culture", "Quality education", "Gateway to EU"]),
  mk("study-in-italy", "Italy", "it", "🇮🇹", "Affordable European education with rich heritage.",
    ["Affordable tuition", "Scholarship friendly", "Rich heritage", "English-taught programs"],
    ["Fashion", "Design", "Architecture", "MBA", "Engineering"],
    ["Globally recognised universities", "Affordable living", "Cultural exposure", "Schengen access"]),
  mk("study-in-netherlands", "Netherlands", "nl", "🇳🇱", "English-taught programs with strong international outlook.",
    ["Many English-taught programs", "Research-focused universities", "Post-study orientation year", "Bicycle-friendly cities"],
    ["MS Business Analytics", "MS Computer Science", "MBA", "Engineering", "Logistics"],
    ["Innovative teaching", "Multinational job market", "High English proficiency", "Great quality of life"]),
  mk("study-in-singapore", "Singapore", "sg", "🇸🇬", "Asia's premier education and business hub.",
    ["Globally ranked universities", "Safe and clean city", "Strong job market", "Gateway to Asia"],
    ["MBA", "Finance", "Data Science", "Hospitality", "Engineering"],
    ["Top universities", "Multicultural environment", "Excellent career opportunities", "Strategic location"]),
  mk("study-in-malaysia", "Malaysia", "my", "🇲🇾", "Affordable global education with branch campuses.",
    ["Affordable tuition and living", "Branch campuses of UK/AUS universities", "Multicultural", "English-friendly"],
    ["MBA", "Engineering", "Hospitality", "Computer Science", "Medicine"],
    ["Quality affordable education", "Cultural diversity", "Friendly environment", "Strategic Asia location"]),
  mk("study-in-dubai-uae", "Dubai / UAE", "ae", "🇦🇪", "Global business hub with international branch campuses.",
    ["Tax-free environment", "Global business hub", "Branch campuses of top universities", "Strong job market"],
    ["MBA", "Hospitality Management", "Finance", "Engineering", "Aviation"],
    ["International exposure", "Excellent infrastructure", "Diverse opportunities", "Close to home"]),
];

export const getCountry = (slug: string) => COUNTRIES.find((c) => c.slug === slug);

export const flagUrl = (code: string, size: "w80" | "w160" | "w320" = "w160") =>
  `https://flagcdn.com/${size}/${code}.png`;
