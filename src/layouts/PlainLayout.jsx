import React, { Children } from "react";

export default function PlainLayout({ children }) {
  return (
    <div className="bg-primary text-white font-lexend font-base relative">
      <main className="px-5 md:px-40 relative z-0">{children}</main>
    </div>
  );
}
