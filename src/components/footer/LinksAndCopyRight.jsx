import React from "react";
import openPrivacyModal from "../modals/PrivacyModal";
import openTermsModal from "../modals/TermsModal";

export default function LinksAndCopyRight() {
  const links = [
    { label: "Terms & Conditions", fn: openTermsModal },
    { label: "Privacy Policy", fn: openPrivacyModal },
    { label: "Cookies", fn: openPrivacyModal },
  ];

  const renderLinks = links.map(({ label, fn }) => (
    <li key={label}>
      <button
        type="button"
        onClick={fn}
        className="bg-transparent border-none text-gray-500 transition hover:opacity-75 cursor-pointer"
      >
        {label}
      </button>
    </li>
  ));
  return (
    <div className="pt-12 mt-12 border-t border-gray-100">
      <div className="sm:flex sm:items-center sm:justify-between">
        <nav aria-label="Footer Navigation - Support">
          <ul className="flex flex-wrap gap-4 text-xs">{renderLinks}</ul>
        </nav>
        <p className="mt-8 text-xs text-gray-500 sm:mt-0">&copy; 2022. Crown Dental. All rights reserved.</p>
      </div>
    </div>
  );
}
