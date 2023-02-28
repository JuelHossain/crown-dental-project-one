import React from "react";
import { Link } from "react-router-dom";

export default function Company() {
  const links = [
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];
  const renderLinks = links.map(({ label, link }) => (
    <li key={label}>
      <Link to={link} className="text-gray-700 transition hover:opacity-75">
        {label}
      </Link>
    </li>
  ));
  return (
    <div>
      <p className="font-medium text-gray-900">Company</p>

      <nav aria-label="Footer Navigation - Company" className="mt-6">
        <ul className="space-y-4 text-sm">{renderLinks}</ul>
      </nav>
    </div>
  );
}
