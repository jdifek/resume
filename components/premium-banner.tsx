"use client";

import { Crown } from "lucide-react";
import { ChevronRight } from "lucide-react";

export function PremiumBanner() {
  return (
    <button className="w-full flex items-center justify-between p-4 bg-white rounded-xl mb-6">
      <div className="flex items-center gap-3">
        <div className="bg-yellow-100 p-2 rounded-lg">
          <Crown className="h-5 w-5 text-yellow-500" />
        </div>
        <div className="text-left">
          <div className="font-medium">Go Premium</div>
          <div className="text-sm text-muted-foreground">
            Unlock all the benefits of a premium subscription
          </div>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
    </button>
  );
}