import {
  Home,
  MessageCircle,
  Paperclip,
  CurrencyIcon,
  PersonStanding,
  ListCheck,
  CodeXml,
  SortAsc,
  Binary,
  FormInput,
  Heart,
  Sliders,
  LetterText,
  List,
  Bolt
} from "lucide-react";

export const MENU_ROUTES = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  {
    name: "Nested Comments",
    path: "/nested-comments",
    icon: <MessageCircle size={20} />,
  },
  { name: "Blog Post", path: "/blog-post", icon: <Paperclip size={20} /> },
  {
    name: "CryptoRank Exchange",
    path: "/crypto-rank-exchange",
    icon: <CurrencyIcon size={20} />,
  },
  {
    name: "Employee Validation",
    path: "/employee-validation",
    icon: <PersonStanding size={20} />,
  },
  {
    name: "Item List Manager",
    path: "/item-list-manager",
    icon: <ListCheck size={20} />,
  },
  {
    name: "Code Review Feedback",
    path: "/code-review-feedback",
    icon: <CodeXml size={20} />,
  },
  {
    name: "Articles Sorting",
    path: "/articles-sorting",
    icon: <SortAsc size={20} />,
  },
  {
    name: "Algorithms",
    path: "/algorithms",
    icon: <Binary size={20} />,
  },
  {
    name: "Contact Form",
    path: "/contact-form",
    icon: <FormInput size={20} />,
  },
  {
    name: "Patient Medical Records",
    path: "/patient-medical-records",
    icon: <Heart size={20} />,
  },
  {
    name: "Slideshow",
    path: "/slideshow",
    icon: <Sliders size={20} />,
  },
  {
    name: "Word Omitter",
    path: "/word-omitter",
    icon: <LetterText size={20} />,
  },
  {
    name: "Tanstack Form",
    path: "/tanstack-form",
    icon: <List size={20} />,
  },
  {
    name: "Zustand",
    path: "/zustand",
    icon: <Bolt size={20} />,
  },
];