// Single source for the few facts that are not in the planning docs.
//
// TODO(owner): the owner's name does not appear anywhere in docs/. It is
// deliberately NOT derived from the git handle or the local git email. Set it
// here and it propagates to the wordmark, every <title>, the JSON-LD and the
// contact page.
//
// TODO(owner): confirm the public email. The address below is the one on the
// local machine; publishing it is a separate decision from using it locally.
//
// TODO(owner): links. Nothing here is verified — the inventory does not record
// a GitHub account (04-project-inventory.md §5 lists it as a known gap), so the
// list is empty rather than guessed. Add entries and they render on /contact.

export type SiteLink = { label: string; href: string; note?: string };

export const site = {
  name: 'Khang',
  email: 'minhkhang09122003@gmail.com',
  location: 'Ho Chi Minh City',
  // Used for <title> suffixes and JSON-LD only. Never a tagline in the page body.
  role: 'Web security and LLM engineering; an enthuasiast on quantitative trading',

  // Rendered on /contact under the email, in this order. Nothing else needs
  // editing. TODO(owner): the three below are placeholders — replace each
  // `your-handle` with the real one, or delete the line.
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
    { label: 'Facebook', href: 'https://www.facebook.com/your-handle' },
    { label: 'GitHub', href: 'https://github.com/your-handle' },
  ] as SiteLink[],
};

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
