import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  color: string;
}
