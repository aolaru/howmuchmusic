export const caseStudyTopicDefinitions = [
  { id: "seasonal", label: "Seasonal demand" },
  { id: "demand", label: "Chart and long-tail demand" },
  { id: "rights", label: "Rights and ownership" },
  { id: "film", label: "Film and songwriting" },
  { id: "recognition", label: "Awards and certification" },
  { id: "earnings", label: "Public earnings questions" }
] as const;

export type CaseStudyTopicId = (typeof caseStudyTopicDefinitions)[number]["id"];

// Topics describe the editorial question each published article addresses; they do not classify the artist or song.
export const caseStudyTopicsBySlug: Record<string, CaseStudyTopicId[]> = {
  "all-i-want-for-christmas-is-you-seasonal-demand": ["seasonal", "demand"],
  "blinding-lights-chart-longevity": ["demand", "earnings"],
  "mr-brightside-long-tail": ["demand"],
  "bohemian-rhapsody-reissues": ["demand", "earnings"],
  "shape-of-you-demand-and-splits": ["demand", "rights"],
  "lose-yourself-film-and-song-rights": ["film", "rights"],
  "happy-soundtrack-context": ["film", "demand"],
  "dancing-queen-catalog-context": ["demand"],
  "smells-like-teen-spirit-catalog-discovery": ["demand"],
  "every-breath-you-take-rights-layers": ["rights"],
  "shake-it-off-version-identity": ["rights"],
  "the-weeknd-public-success-and-private-income": ["earnings"],
  "sicko-mode-public-record-and-income-limits": ["earnings", "recognition"],
  "travis-scott-public-records-and-income-limits": ["earnings", "recognition"],
  "taylor-swift-public-success-and-income-limits": ["earnings", "recognition"],
  "amy-winehouse-back-to-black-public-record": ["recognition"],
  "avicii-wake-me-up-public-record": ["demand", "recognition"],
  "bb-king-live-at-the-regal-public-record": ["recognition"],
  "black-eyed-peas-i-gotta-feeling-public-record": ["demand", "recognition"]
};
