"use client";

import { MobileNav } from "@/components/layout/mobile-nav";
import { SettingsList } from "@/components/settings/settings-list";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-background pb-16">
      <div className="container max-w-md mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-6">Settings</h1>
        <SettingsList />
      </div>
      <MobileNav />
    </main>
  );
}