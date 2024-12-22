"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

const templates = [
  {
    id: 1,
    name: "Professional Dark",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=300&h=400",
  },
  {
    id: 2,
    name: "Modern Yellow",
    image: "https://images.unsplash.com/photo-1586281380117-8c2eadb2d094?q=80&w=300&h=400",
  },
];

export function TemplateList() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {templates.map((template) => (
        <Card key={template.id} className="overflow-hidden">
          <div className="relative aspect-[3/4]">
            <Image
              src={template.image}
              alt={template.name}
              fill
              className="object-cover"
            />
          </div>
        </Card>
      ))}
    </div>
  );
}