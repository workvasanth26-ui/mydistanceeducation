export type University = {
  name: string;
  short: string;
  about: string;
  programs: string[];
  accreditation: string;
};

export const UNIVERSITIES: University[] = [
  { name: "Amity University Online", short: "Amity", about: "One of India's leading private universities offering UGC-entitled online programs across management, IT, commerce and arts.", programs: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online B.Com", "Online MA"], accreditation: "UGC Entitled • NAAC A+" },
  { name: "Manipal University Online", short: "Manipal", about: "Globally recognised university with flexible online degree programs designed for working professionals.", programs: ["Online MBA", "Online MCA", "Online M.Com", "Online BBA", "Online BCA"], accreditation: "UGC Entitled • NAAC A+" },
  { name: "Jain (Deemed-to-be University) Online", short: "Jain", about: "Reputed deemed university with industry-aligned online UG and PG programs.", programs: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online B.Com"], accreditation: "UGC Entitled • NAAC A++" },
  { name: "UPES Online", short: "UPES", about: "Specialised university offering future-focused online MBA specializations in energy, logistics, analytics and more.", programs: ["Online MBA", "Online MCA", "Online BBA", "Online BCA"], accreditation: "UGC Entitled • NAAC A" },
  { name: "Chandigarh University Online", short: "CU", about: "Modern campus with strong online programs in management, IT and commerce.", programs: ["Online MBA", "Online MCA", "Online MA", "Online BBA", "Online BCA", "Online B.Com"], accreditation: "UGC Entitled • NAAC A+" },
  { name: "Lovely Professional University Online", short: "LPU", about: "Large multidisciplinary university with flexible online programs and global tie-ups.", programs: ["Online MBA", "Online MCA", "Online MA", "Online BBA", "Online BCA", "Online B.Com"], accreditation: "UGC Entitled • NAAC A++" },
  { name: "DY Patil University Online", short: "DY Patil", about: "Trusted name in higher education offering online MBA specializations and PG programs.", programs: ["Online MBA", "Online MCA"], accreditation: "UGC Entitled • NAAC A++" },
  { name: "NMIMS Global Access", short: "NMIMS", about: "One of India's premier B-schools offering online & distance MBA-equivalent and PG programs.", programs: ["Online MBA (PGDM)", "Online B.Com", "Online BBA"], accreditation: "UGC-DEB Approved" },
];
