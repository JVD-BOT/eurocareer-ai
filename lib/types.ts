export type ApplicationStatus =
  | "researching"
  | "applied"
  | "responded"
  | "interview"
  | "offer"
  | "rejected";

export interface Application {
  id: string;
  user_id: string;
  company_name: string;
  role_title: string;
  country: string | null;
  city: string | null;
  job_url: string | null;
  job_description: string | null;
  salary_range: string | null;
  visa_sponsorship: boolean;
  notes: string | null;
  status: ApplicationStatus;
  applied_date: string | null;
  follow_up_date: string | null;
  generated_cv: string | null;
  generated_cover_letter: string | null;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  resume_text: string | null;
  languages: string | null;
  nationality: string | null;
  work_authorization: string | null;
  plan: "free" | "pro";
  ai_credits_used: number;
  ai_credits_month: string;
  stripe_customer_id: string | null;
  created_at: string;
  updated_at: string;
}

export const FREE_AI_LIMIT = 3;
