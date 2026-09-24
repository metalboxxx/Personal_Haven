// The label shown for an entry's date. `dateLabel` in frontmatter wins when
// set ("July – September 2026"); without it the month and year of `date`.
export function dateLabel(data: { date: Date; dateLabel?: string }): string {
  return (
    data.dateLabel ??
    data.date.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })
  );
}
