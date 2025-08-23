export interface Duration {
  startYear: number;
  endYear?: number;
}

export const createDurationText = (duration: Duration) =>
  `${duration.startYear} — ${duration.endYear ?? "PRESENT"}`;
