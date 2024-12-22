"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Resume } from "@/lib/types";

interface ResumeCardProps {
  resume: Resume;
}

export function ResumeCard({ resume }: ResumeCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="font-medium">{resume.title}</h3>
          <p className="text-sm text-muted-foreground">
            {resume.lastModified}
          </p>
        </div>
        <span className="text-sm font-medium">{resume.progress}%</span>
      </div>
      <Progress value={resume.progress} className="h-2" />
    </Card>
  );
}