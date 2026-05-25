import type { Profile } from "./types";

export const profileEn: Profile = {
  locale: "en",
  name: "Shuang Ji",
  nameAlt: "JI Shuang",
  role: "Senior Antenna Engineer",
  affiliation: "Antenna Engineering Lab · Central Hardware Engineering Institute · 2012 LABS · Huawei Technologies",
  tagline:
    "Antenna design, computational electromagnetics, and robust engineering delivery.",
  about: {
    heading: "From millimeter-wave research to base-station engineering",
    summary:
      "I focus on wireless infrastructure antenna systems with strengths in MoM-based modeling, HFSS/CST full-wave simulation, and end-to-end prototype validation. My doctoral work centered on fast wideband design of high-gain waveguide slot arrays, and I now translate that rigor into industrial deployment.",
    highlights: [
      "Led high-isolation FDD MIMO and U6G massive-MIMO antenna initiatives.",
      "Worked across simulation, hardware tuning, measurement, and delivery alignment.",
      "Published continuously in IEEE/IEICE venues while driving product outcomes.",
    ],
    skillTags: [
      "Antenna Design",
      "Computational EM",
      "EM Simulation",
      "HFSS / CST",
      "MIMO Decoupling",
      "MATLAB / Python",
      "RF Testing",
      "Near/Far-Field Measurement",
      "Prototype Tuning",
      "Cross-Team Delivery",
      "Chinese / English / Japanese",
    ],
    portraitAlt: "Shuang Ji at graduation ceremony in Tokyo Institute of Technology",
    stats: [
      { label: "Publications", value: "10+" },
      { label: "Core Projects", value: "5+" },
      { label: "Industry Years", value: "8+" },
    ],
  },
  education: [
    {
      id: "edu-phd",
      period: "2018.09 - 2022.03",
      degree: "Ph.D., Electrical and Electronic Engineering",
      school: "Tokyo Institute of Technology",
      location: "Tokyo, Japan",
      detail: "Jiro Hirokawa Lab (IEEE Fellow), sponsored by CSC.",
    },
    {
      id: "edu-ms",
      period: "2015.09 - 2018.06",
      degree: "M.S., Information and Communication Engineering",
      school: "Nanjing University of Science and Technology",
      location: "Nanjing, China",
      detail: "School of Electronic and Optical Engineering.",
    },
    {
      id: "edu-bs",
      period: "2011.09 - 2015.06",
      degree: "B.S., Information Countermeasure Technology",
      school: "Nanjing University of Science and Technology",
      location: "Nanjing, China",
    },
  ],
  work: [
    {
      id: "work-huawei",
      period: "2022.06 - 2026.05",
      role: "Senior Antenna Engineer",
      organization: "Huawei Technologies Co., Ltd.",
      location: "Shenzhen, China",
      summary:
        "Driving multi-band base-station antenna development with emphasis on isolation, integration quality, and robust delivery.",
      bullets: [
        "Delivered high-isolation TX/RX-separated MIMO antenna architecture for FDD systems.",
        "Advanced U6G TDD passive MIMO design under complex system constraints.",
        "Contributed to Sub-3G passive modules in full-band massive-MIMO platforms.",
      ],
    },
  ],
  projects: [
    {
      id: "project-fdd",
      title: "High-Isolation FDD MIMO Array",
      role: "Architecture & EM lead",
      summary:
        "Built high-isolation array topology and decoupling paths for TX/RX-separated systems under tight product constraints.",
      outcomes: [
        "Significant isolation uplift",
        "Closed prototype-measurement loop",
        "Reusable internal design playbook",
      ],
    },
    {
      id: "project-u6g",
      title: "U6G TDD Massive-MIMO Antenna",
      role: "Core antenna engineer",
      summary:
        "Optimized radiating elements and feed strategy under complex engineering constraints to improve consistency at scale.",
      outcomes: [
        "Met RF targets under engineering constraints",
        "Reduced tuning effort",
        "Shortened iteration cycles",
      ],
    },
    {
      id: "project-mmwave",
      title: "Wideband Millimeter-Wave Slot Arrays",
      role: "Doctoral research lead",
      summary:
        "Combined MoM fast analysis with optimization methods to deliver high-gain waveguide slot arrays from theory to validation.",
      outcomes: [
        "Published in IEEE TAP / IEEE Access",
        "Established fast analysis workflow",
        "Improved wideband design efficiency",
      ],
    },
  ],
  publicationsPatents: [
    {
      id: "pub-2023-1",
      year: "2023",
      type: "期刊",
      title:
        "X-band grating-loaded parallel-plate slot array antenna with low reflection",
      venue: "IEICE Communications Express, 12(6):277-281",
      contributors: "S. Ji, J. Hirokawa, T. Tomura",
      tags: ["X-band", "low reflection"],
      featured: true,
    },
    {
      id: "pub-2022-1",
      year: "2022",
      type: "期刊",
      title:
        "A Wideband and High-Gain All-Metallic Perpendicular-Corporate-Fed Multi-Layered Parallel-Plate Slot Array Antenna",
      venue: "IEEE Access, 10:38000-38011",
      contributors: "S. Ji, J. Hirokawa, T. Tomura",
      tags: ["wideband", "high gain"],
    },
    {
      id: "pub-2022-2",
      year: "2022",
      type: "期刊",
      title:
        "Fast Analysis and Wideband Design of a Parallel-Plate Slot Array with Perpendicular-Corporate Feed by the Method of Moments",
      venue: "IEEE Transactions on Antennas and Propagation, 70(4):2645-2655",
      contributors: "S. Ji, T. Tomura, J. Hirokawa",
      tags: ["MoM", "IEEE AP-S Japan Student Award"],
      featured: true,
    },
    {
      id: "conf-2020-isap-osaka",
      year: "2020",
      type: "会议",
      title:
        "Efficient Optimization for Bandwidth of the Element in a Multilayer Parallel-plate Slot Array",
      venue: "ISAP, Osaka",
      contributors: "S. Ji, T. Tomura, J. Hirokawa",
      tags: ["student paper award", "array optimization"],
    },
    {
      id: "conf-2020-ieice-society",
      year: "2020",
      type: "会议",
      title: "Efficient Analysis and Wideband Design of a Triple-Layer 2x2-Slot Array",
      venue: "IEICE Society Conference",
      contributors: "S. Ji, T. Tomura, J. Hirokawa",
      tags: ["triple-layer array", "wideband"],
    },
    {
      id: "conf-2020-ieice-general",
      year: "2020",
      type: "会议",
      title:
        "Wideband Design of a Parallel-Plate Slot Array Antenna with Hollow Waveguide Perpendicular-Corporate Feeding Network",
      venue: "IEICE General Conference",
      contributors: "S. Ji, T. Tomura, J. Hirokawa",
      tags: ["waveguide feed", "wideband"],
    },
    {
      id: "conf-2020-aps-ursi",
      year: "2020",
      type: "会议",
      title:
        "Wideband Design of a Two-Layer Parallel-Plate Slot Array Antenna with Hollow Waveguide Corporate Feeding Network",
      venue: "IEEE AP-S/URSI, Montreal",
      contributors: "S. Ji, T. Tomura, J. Hirokawa",
      tags: ["two-layer array", "corporate feed"],
    },
    {
      id: "conf-2019-isap-xian",
      year: "2019",
      type: "会议",
      title:
        "Analysis of 2x2 Radiating Slots with Parallel-Plate Perpendicular-Corporate Feed Based on Method of Moments",
      venue: "ISAP, Xi'an",
      contributors: "S. Ji, T. Tomura, J. Hirokawa",
      tags: ["MoM", "radiating slots"],
    },
    {
      id: "conf-2019-ieice-general",
      year: "2019",
      type: "会议",
      title:
        "Analysis of the 2x2 Radiating Slots with the Perpendicular Corporate-feed Based on Method of Moments",
      venue: "IEICE General Conference",
      contributors: "S. Ji, T. Tomura, J. Hirokawa",
      tags: ["MoM", "corporate feed"],
    },
    {
      id: "conf-2017-aces-suzhou",
      year: "2017",
      type: "会议",
      title:
        "Low side-lobe substrate integrated cavity antenna array using unequal microstrip-ridge gap waveguide feeding network at 94 GHz",
      venue: "ACES Symposium, Suzhou",
      contributors: "H. Wang, Y. Zheng, L. Qian, S. Ji",
      tags: ["94 GHz", "low side-lobe"],
    },
  ],
  serviceHonors: [
    {
      id: "honor-2025",
      year: "2025",
      title: "Keynote Session Chair",
      organization: "IEEE iWRF&AT, Shenzhen University",
      category: "Academic Service",
    },
    {
      id: "honor-2024",
      year: "2024",
      title: "2012 LABS Star Award · Expert Talk Series Lead",
      organization: "Huawei Antenna Engineering Lab",
      category: "Industry Recognition",
    },
    {
      id: "honor-2023",
      year: "2023",
      title: "Reviewer",
      organization: "IEEE Open Journal of Antennas and Propagation",
      category: "Academic Service",
    },
    {
      id: "honor-2023-industry",
      year: "2023",
      title: "Rising Star",
      organization: "Huawei Antenna Engineering Lab",
      category: "Industry Recognition",
    },
    {
      id: "honor-2022",
      year: "2022",
      title: "IEEE AP-S Japan Student Award",
      organization: "IEEE AP-S Tokyo Chapter",
      category: "Academic Honor",
    },
  ],
  links: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=PLACEHOLDER",
      note: "Citation and publication records",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/PLACEHOLDER",
      note: "Researcher identifier",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/PLACEHOLDER",
      note: "Professional profile",
    },
  ],
  navItems: [
    { id: "关于我", label: "关于我" },
    { id: "教育背景", label: "教育背景" },
    { id: "工作经历", label: "工作经历" },
    { id: "项目经历", label: "项目经历" },
    { id: "论文成果", label: "论文成果" },
    { id: "服务与荣誉", label: "服务与荣誉" },
    { id: "学术链接", label: "学术链接" },
  ],
  footer: "Academic Portfolio · Built with React + TypeScript",
};
