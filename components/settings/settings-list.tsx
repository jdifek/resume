"use client";

import { 
  User, 
  Globe2, 
  Crown, 
  CreditCard, 
  Lock, 
  Star, 
  MessageCircle 
} from "lucide-react";
import { SettingsItem } from "./settings-item";

const settings = [
  {
    icon: User,
    label: "Account Settings",
    href: "/settings/account",
  },
  {
    icon: Globe2,
    label: "Change Language",
    href: "/settings/language",
  },
  {
    icon: Crown,
    label: "Premium Subscription",
    href: "/settings/premium",
  },
  {
    icon: CreditCard,
    label: "Why will you pay?",
    href: "/settings/payment-info",
  },
  {
    icon: Lock,
    label: "Privacy Policy",
    href: "/settings/privacy",
  },
  {
    icon: Star,
    label: "Rate us",
    href: "/settings/rate",
  },
];

export function SettingsList() {
  return (
    <div className="space-y-2">
      {settings.map((setting) => (
        <SettingsItem key={setting.label} {...setting} />
      ))}
      <button className="w-full bg-primary text-primary-foreground rounded-lg py-3 mt-6">
        <MessageCircle className="w-5 h-5 inline-block mr-2" />
        Contact Us
      </button>
    </div>
  );
}