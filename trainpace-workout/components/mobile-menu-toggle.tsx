"use client";

import { useState } from "react";

type Props = {
  targetId: string;
};

export default function MobileMenuToggle({ targetId }: Props) {
  const [open, setOpen] = useState(false);

  function toggle() {
    const el = document.getElementById(targetId);
    if (el) {
      el.classList.toggle("hidden");
    }
    setOpen((v) => !v);
  }

  return (
    <button
      aria-expanded={open}
      aria-controls={targetId}
      onClick={toggle}
      className="p-2 rounded-md hover:bg-muted/20 focus:outline-none focus:ring-2 focus:ring-ring md:hidden"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {open ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );
}
