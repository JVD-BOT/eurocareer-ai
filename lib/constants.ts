import type { ApplicationStatus } from "./types";

export const COUNTRIES = [
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "DK", name: "Denmark", flag: "🇩🇰" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "IE", name: "Ireland", flag: "🇮🇪" },
  { code: "BE", name: "Belgium", flag: "🇧🇪" },
  { code: "AT", name: "Austria", flag: "🇦🇹" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
] as const;

export interface ColumnConfig {
  id: ApplicationStatus;
  label: string;
  headerBg: string;
  headerText: string;
  borderColor: string;
  dotColor: string;
  dragBg: string;
}

export const COLUMNS: ColumnConfig[] = [
  {
    id: "researching",
    label: "Researching",
    headerBg: "bg-blue-50",
    headerText: "text-blue-700",
    borderColor: "border-blue-200",
    dotColor: "bg-blue-500",
    dragBg: "bg-blue-100",
  },
  {
    id: "applied",
    label: "Applied",
    headerBg: "bg-indigo-50",
    headerText: "text-indigo-700",
    borderColor: "border-indigo-200",
    dotColor: "bg-indigo-500",
    dragBg: "bg-indigo-100",
  },
  {
    id: "responded",
    label: "Responded",
    headerBg: "bg-amber-50",
    headerText: "text-amber-700",
    borderColor: "border-amber-200",
    dotColor: "bg-amber-500",
    dragBg: "bg-amber-100",
  },
  {
    id: "interview",
    label: "Interview",
    headerBg: "bg-purple-50",
    headerText: "text-purple-700",
    borderColor: "border-purple-200",
    dotColor: "bg-purple-500",
    dragBg: "bg-purple-100",
  },
  {
    id: "offer",
    label: "Offer",
    headerBg: "bg-green-50",
    headerText: "text-green-700",
    borderColor: "border-green-200",
    dotColor: "bg-green-500",
    dragBg: "bg-green-100",
  },
  {
    id: "rejected",
    label: "Rejected",
    headerBg: "bg-red-50",
    headerText: "text-red-700",
    borderColor: "border-red-200",
    dotColor: "bg-red-500",
    dragBg: "bg-red-100",
  },
];
