"use client";

import { Bell, User } from "lucide-react";

interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent">
        <User className="w-5 h-5 text-muted-foreground" />
      </button>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent">
        <Bell className="w-5 h-5 text-muted-foreground" />
      </button>
    </div>
  );
}