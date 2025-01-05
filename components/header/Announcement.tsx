"use client";

import { ArrowRight, Megaphone } from "lucide-react";

export function Announcement() {
  return (
    <div className="inline-flex items-center gap-2 bg-[rgba(255,193,7,0.1)] rounded-full px-6 py-2 mb-8">
      <Megaphone className="w-4 h-4 text-yellow-500" />
      <span className="text-yellow-500 text-sm font-medium">Announcement</span>
      <span className="text-yellow-500 text-sm">Free AI Proof of Concept before 2025</span>
      <ArrowRight className="w-4 h-4 text-yellow-500" />
    </div>
  );
}