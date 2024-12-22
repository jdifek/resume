"use client";

import { MobileNav } from "@/components/layout/mobile-nav";
import { TemplateList } from "@/components/templates/template-list";
import { TemplateFilters } from "@/components/templates/template-filters";

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-background pb-16">
      <div className="container max-w-md mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-6">Templates</h1>
        <TemplateFilters />
        <TemplateList />
      </div>
      <MobileNav />
    </main>
  );
}