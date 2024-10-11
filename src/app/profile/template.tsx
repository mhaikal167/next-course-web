"use client";

import { useState } from "react";

export default function ProfileTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  return (
    <div>
      <p>Profile Template</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {children}
    </div>
  );
}
// perbedaan layout sama template ialah template memiliki kesamaan seperti layout tetapi saat pindah halaman maka akan di re-render ,berbeda dengan layout
