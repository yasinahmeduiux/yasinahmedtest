import React from "react";
import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = "", size = 20 }: LucideIconProps) {
  // Map string to corresponding Lucide Icon
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Return a fallback icon (HelpCircle) if specified icon is not found
    return <Icons.HelpCircle className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}
