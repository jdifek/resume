"use client";

import { FileText, PenLine } from "lucide-react";

interface ActionButtonsProps {
  onNewResume: () => void;
}

export function ActionButtons({ onNewResume }: ActionButtonsProps) {
  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={onNewResume}
        className="flex items-center gap-2 p-4 bg-white rounded-xl flex-1"
      >
        <PenLine className="h-5 w-5 text-primary" />
        <span className="text-sm font-medium">New Resume</span>
      </button>
      <button className="flex items-center gap-2 p-4 bg-white rounded-xl flex-1">
        <FileText className="h-5 w-5 text-primary" />
        <span className="text-sm font-medium text-primary">Cover Letter</span>
      </button>
    </div>
  );
}