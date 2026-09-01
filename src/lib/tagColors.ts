/**
 * Single source of truth for tag colors.
 * Hues live as CSS tokens in src/index.css (--tag-*); this maps tag labels to them.
 * Used by case-study cards and the expertise constellation so colors always match.
 */
const TAG_TOKENS: Record<string, string> = {
  AI: "--tag-ai",
  "Experience Design": "--tag-experience",
  "Interaction Design": "--tag-interaction",
  "Conversational UI": "--tag-conversational",
  Research: "--tag-research",
  Healthcare: "--tag-healthcare",
};

export const tagColor = (tag: string): string => {
  const token = TAG_TOKENS[tag];
  return token ? `hsl(var(${token}))` : "hsl(var(--muted-foreground))";
};
