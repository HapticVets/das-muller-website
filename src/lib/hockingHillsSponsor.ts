// Publish only reconciled, team-approved values. Null displays an honest pending state.
// Keep in-kind equipment separate from cash; committed funds are not necessarily received.
export const hockingHillsSponsorProgress: {
  totalGoal: number | null;
  raisedCommitted: number | null;
  laptopsNeeded: number | null;
  fishingKitsNeeded: number | null;
  confirmedSponsors: string[] | null;
  updatedAt: string | null;
} = {
  totalGoal: null,
  raisedCommitted: null,
  laptopsNeeded: null,
  fishingKitsNeeded: null,
  confirmedSponsors: null,
  updatedAt: null,
};

export function hockingHillsInquiry(subject: string) {
  return `mailto:jreese@hapticvets.com?subject=${encodeURIComponent(`Hocking Hills — ${subject}`)}&body=${encodeURIComponent("Hello Veteran Outreach team,\n\nI would like to help with the Hocking Hills Veteran Adventure.\n\nName / organization:\nPreferred contact:\nSponsorship, equipment or services offered:\n\nThank you!")}`;
}
