"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SettingsItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export function SettingsItem({ icon: Icon, label, href }: SettingsItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between p-4 bg-card rounded-lg hover:bg-accent transition-colors"
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-muted-foreground" />
        <span>{label}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground" />
    </Link>
  );
}