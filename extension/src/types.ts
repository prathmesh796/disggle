export type ActivityType = "notebook" | "dataset" | "competition" | "profile" | "other";

export interface ActivityPayload {
  type: ActivityType;
  title: string;
  url: string;
  startedAt?: number;
}