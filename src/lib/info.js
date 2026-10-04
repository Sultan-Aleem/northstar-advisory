import HomeSlide from "../Components/HomeSlide";
import LetterSlide from "../Components/LetterSlide";
import StandSlide from "../Components/StandSlide";
import HorizonSlide from "../Components/HorizonSlide";

const slides = [
  { component: HomeSlide, section: "cover", design: "Linden", title: "Home" },
  {
    component: LetterSlide,
    section: "EXECUTIVE SUMMARY",
    design: "Hare",
    title: "Our Letter",
    description: "Three-year strategic plan for the period...",
  },
  {
    component: StandSlide,
    section: "Exhibit I",
    design: "Linden & Hare",
    title: "Where We Stand",
    description: "A letter from the partnership.",
  },
  {
    component: HorizonSlide,
    section: "THE THREE HORIZON",
    design: "Linden & Hare",
    title: "The Three Horizons",
    description: "Current-state analysis.",
  },
];

const standList = [
  {
    number: "I.",
    name: "Profitability is healthy.",
    info: "Revenue per partner up 52% over the planning horizon. Margins steady at 28%.",
  },
  {
    number: "II.",
    name: "Headcount is constrained.",
    info: "Senior associate ranks have thinned. Three partners approach retirement before MMXXVIII.",
  },
  {
    number: "III.",
    name: "Sector concentration is rising.",
    info: "Financial services now represents 62% of fee income. Higher than we are comfortable with.",
  },
  {
    number: "I",
    name: "Brand strength has compounded.",
    info: "Inbound mandate inquiries up 41% year-on-year. Client retention remains above 94%.",
  },
];

const standRev = [
  {
    value: "$2.1M",
    year: "MMXXI",
  },
  {
    value: "$2.4M",
    year: "MMXXII",
  },
  {
    value: "$2.6M",
    year: "MMXXIII",
  },
  {
    value: "$2.9M",
    year: "MMXXIV",
  },
  {
    value: "$3.2M",
    year: "MMXXV",
  },
];

const horizonSlideInfo = [
  {
    number: "I.",
    year: "MMXXVI",
    name: "Consolidate the core.",
    info: "The year we cease activities that do not earn their place. Practice review, partner alignment, internal systems audit.",
    list: [
      "Practice portfolio review",
      "Senior associate hiring (six positions)",
      "Knowledge platform RFP",
      "Exit non-core advisory lines",
    ],
    price: "$4.2M",
  },
  {
    number: "II.",
    year: "MMXXVII",
    name: "Diversify the book.",
    info: "Reduce financial-services concentration toward a target of 45%. Build out the industrial and energy practice groups.",
    list: [
      "Industrial sector lead hire",
      "Energy transition practice launch",
      "Two lateral partner additions",
      "European office feasibility study",
    ],
    price: "$6.8M",
  },
  {
    number: "III.",
    year: "MMXXVIII",
    name: "Plan the succession.",
    info: "Three partner retirements scheduled. New partner class promoted. Operational handover complete by Q4.",
    list: [
      "Partner class of MMXXVIII promoted",
      "Retirement transitions for three principals",
      "Knowledge platform fully deployed",
      "Five-year plan refresh begins",
    ],
    price: "$3.6M",
  },
];

export { slides, standList, standRev, horizonSlideInfo };
