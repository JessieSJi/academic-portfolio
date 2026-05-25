import type { Profile } from "./types";

export const profileZh: Profile = {
  locale: "zh",
  name: "季爽",
  nameAlt: "JI Shuang",
  role: "高级工程师",
  affiliation: "天线工程实验室 · 中央硬件工程院 · 2012 实验室 · 华为技术有限公司",
  tagline: "天线设计 × 计算电磁学 × 工程交付，兼顾研究深度与产业落地。",
  about: {
    heading: "从毫米波研究到基站工程",
    summary:
      "长期专注无线基础设施天线系统设计与优化，擅长矩量法（MoM）建模、HFSS/CST 全波仿真以及样机验证。博士阶段聚焦毫米波波导缝隙阵列宽带设计，进入产业后持续推进多频段、多制式和高隔离度天线方案落地。",
    highlights: [
      "主导 FDD MIMO 隔离设计、U6G MIMO 天线等关键课题。",
      "覆盖仿真建模、样机调试、测试验证到跨团队量产协同全链路。",
      "在 IEEE/IEICE 期刊与会议持续发表成果，兼顾学术与工程价值。",
    ],
    skillTags: [
      "天线设计",
      "计算电磁学",
      "电磁仿真",
      "HFSS / CST",
      "MIMO 解耦",
      "MATLAB / Python",
      "射频测试",
      "近远场测量",
      "样机调试",
      "跨团队交付",
      "中文 / 英语 / 日语",
    ],
    portraitAlt: "季爽在东京工业大学毕业典礼的照片",
    stats: [
      { label: "论文与会议", value: "10+" },
      { label: "核心项目", value: "5+" },
      { label: "行业经历", value: "8 年+" },
    ],
  },
  education: [
    {
      id: "edu-phd",
      period: "2018.09 - 2022.03",
      degree: "工学博士 · 电气与电子工程",
      school: "东京工业大学",
      location: "日本东京",
      detail: "广川二郎（IEEE Fellow）研究室，国家留学基金委公派资助。",
    },
    {
      id: "edu-ms",
      period: "2015.09 - 2018.06",
      degree: "工学硕士 · 信息与通信工程",
      school: "南京理工大学",
      location: "中国南京",
      detail: "电子工程与光电技术学院。",
    },
    {
      id: "edu-bs",
      period: "2011.09 - 2015.06",
      degree: "工学学士 · 信息对抗技术",
      school: "南京理工大学",
      location: "中国南京",
    },
  ],
  work: [
    {
      id: "work-huawei",
      period: "2022.06 - 2026.05",
      role: "高级工程师",
      organization: "华为技术有限公司",
      location: "中国深圳",
      summary:
        "在 2012 实验室负责多频段基站天线系统开发，聚焦高隔离度、高一致性与可制造性设计。",
      bullets: [
        "完成 FDD 收发分离高隔离度 MIMO 天线阵列方案，支撑多场景组网需求。",
        "推进 U6G TDD 无源 MIMO 天线方案优化，提升工程可交付性。",
        "参与单天面全频段 M-MIMO 架构中的 Sub-3G 模块设计与优化。",
      ],
    },
  ],
  projects: [
    {
      id: "project-fdd",
      title: "FDD 高隔离 MIMO 天线阵列",
      role: "架构与电磁方案负责人",
      summary:
        "面向收发分离系统，构建高隔离度阵列拓扑与解耦路径，兼顾效率和结构约束。",
      outcomes: ["隔离性能显著提升", "完成样机测试闭环", "形成可复用设计规范"],
    },
    {
      id: "project-u6g",
      title: "U6G TDD 大规模 MIMO 天线",
      role: "核心天线设计工程师",
      summary:
        "围绕系统约束优化辐射单元与馈电网络，提升高频段一致性与量产稳定性。",
      outcomes: ["支持复杂约束下性能达标", "降低调试成本", "缩短迭代周期"],
    },
    {
      id: "project-mmwave",
      title: "毫米波波导缝隙阵列宽带设计",
      role: "博士课题负责人",
      summary:
        "基于 MoM 快速分析与优化算法，完成高增益缝隙阵列从理论到实验验证。",
      outcomes: ["发表 IEEE TAP/IEEE Access 等成果", "建立快速求解流程", "提升宽带设计效率"],
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
      tags: ["X 波段", "低反射"],
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
      tags: ["宽带", "高增益"],
    },
    {
      id: "pub-2022-2",
      year: "2022",
      type: "期刊",
      title:
        "Fast Analysis and Wideband Design of a Parallel-Plate Slot Array with Perpendicular-Corporate Feed by the Method of Moments",
      venue: "IEEE Transactions on Antennas and Propagation, 70(4):2645-2655",
      contributors: "S. Ji, T. Tomura, J. Hirokawa",
      tags: ["MoM", "IEEE AP-S Japan 年度学生奖"],
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
      tags: ["学生论文奖", "阵列优化"],
    },
    {
      id: "conf-2020-ieice-society",
      year: "2020",
      type: "会议",
      title: "Efficient Analysis and Wideband Design of a Triple-Layer 2x2-Slot Array",
      venue: "IEICE Society Conference",
      contributors: "S. Ji, T. Tomura, J. Hirokawa",
      tags: ["三层阵列", "宽带设计"],
    },
    {
      id: "conf-2020-ieice-general",
      year: "2020",
      type: "会议",
      title:
        "Wideband Design of a Parallel-Plate Slot Array Antenna with Hollow Waveguide Perpendicular-Corporate Feeding Network",
      venue: "IEICE General Conference",
      contributors: "S. Ji, T. Tomura, J. Hirokawa",
      tags: ["波导馈电", "宽带设计"],
    },
    {
      id: "conf-2020-aps-ursi",
      year: "2020",
      type: "会议",
      title:
        "Wideband Design of a Two-Layer Parallel-Plate Slot Array Antenna with Hollow Waveguide Corporate Feeding Network",
      venue: "IEEE AP-S/URSI, Montreal",
      contributors: "S. Ji, T. Tomura, J. Hirokawa",
      tags: ["两层阵列", "企业馈电"],
    },
    {
      id: "conf-2019-isap-xian",
      year: "2019",
      type: "会议",
      title:
        "Analysis of 2x2 Radiating Slots with Parallel-Plate Perpendicular-Corporate Feed Based on Method of Moments",
      venue: "ISAP, Xi'an",
      contributors: "S. Ji, T. Tomura, J. Hirokawa",
      tags: ["MoM", "辐射缝隙"],
    },
    {
      id: "conf-2019-ieice-general",
      year: "2019",
      type: "会议",
      title:
        "Analysis of the 2x2 Radiating Slots with the Perpendicular Corporate-feed Based on Method of Moments",
      venue: "IEICE General Conference",
      contributors: "S. Ji, T. Tomura, J. Hirokawa",
      tags: ["MoM", "企业馈电"],
    },
    {
      id: "conf-2017-aces-suzhou",
      year: "2017",
      type: "会议",
      title:
        "Low side-lobe substrate integrated cavity antenna array using unequal microstrip-ridge gap waveguide feeding network at 94 GHz",
      venue: "ACES Symposium, Suzhou",
      contributors: "H. Wang, Y. Zheng, L. Qian, S. Ji",
      tags: ["94 GHz", "低旁瓣"],
    },
  ],
  serviceHonors: [
    {
      id: "honor-2025",
      year: "2025",
      title: "主旨演讲主席",
      organization: "IEEE iWRF&AT（深圳大学）",
      category: "学术服务",
    },
    {
      id: "honor-2024",
      year: "2024",
      title: "2012 之星 · 高校专家系列讲座负责人",
      organization: "华为天线工程实验室 & 科学家委员会",
      category: "行业荣誉",
    },
    {
      id: "honor-2023",
      year: "2023",
      title: "IEEE OJAP 审稿人",
      organization: "IEEE Open Journal of Antennas and Propagation",
      category: "学术服务",
    },
    {
      id: "honor-2023-industry",
      year: "2023",
      title: "明日之星",
      organization: "华为天线工程实验室",
      category: "行业荣誉",
    },
    {
      id: "honor-2022",
      year: "2022",
      title: "IEEE AP-S 日本学生奖",
      organization: "IEEE Antennas and Propagation Society",
      category: "学术荣誉",
    },
    {
      id: "honor-2021-isap-student-paper-award",
      year: "2021",
      title: "学生论文奖, ISAP Student Paper Award",
      organization:
        "国际天线与传播论坛（International Symposium on Antennas and Propagation, ISAP 2020）颁发",
      category: "学术荣誉",
    },
  ],
  links: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=PLACEHOLDER",
      note: "论文引用与学术影响力",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/PLACEHOLDER",
      note: "研究者身份与成果索引",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/PLACEHOLDER",
      note: "职业经历与合作联系",
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
