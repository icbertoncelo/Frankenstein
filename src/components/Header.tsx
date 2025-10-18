import { Link } from "@tanstack/react-router";

import { useState } from "react";
import {
  Home,
  MessageCircle,
  Menu,
  X,
  Paperclip,
  CurrencyIcon,
  PersonStanding,
  ListCheck,
  CodeXml,
  SortAsc,
} from "lucide-react";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";

const ROUTES = [
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
];

export default function Header() {
  const isOnline = useOnlineStatus();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="p-4 flex items-center bg-gray-800 text-white shadow-lg">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <h1 className="ml-4 text-xl font-semibold">
          <Link to="/">
            {isOnline ? "✅ Home Online" : "❌ Home Disconnected"}
          </Link>
        </h1>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Challenges Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          {ROUTES.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
              activeProps={{
                className:
                  "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
              }}
            >
              {route.icon}
              <span className="font-medium">{route.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
