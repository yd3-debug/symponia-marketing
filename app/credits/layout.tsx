// Metadata used to live here because the old credits page was a client component,
// and client components cannot export `metadata`. It also still described a token
// pack model we no longer sell ("No subscription required") — which is exactly the
// kind of thing that rots when copy lives in a layout nobody reads.
//
// The page is now a server component that renders <CreditsPage /> and owns its own
// metadata from lib/legal/<locale>.ts, so this layout is a pass-through.

export default function CreditsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
