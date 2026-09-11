// Cloudflare Pages Function — place at functions/go/[slot].js in a Pages project.
// Maps a Night Circuit board slot + affiliate code to a destination.
// Never 302 into a payout-looking path. Never write to the tape.

const DEST = {
  "title-near": "https://ninjatrader.com",
  "bridge": "https://ninjatrader.com",
  "mid-a": "https://tradeify.co",
  "mid-c": "https://bookmap.com"
};

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const parts = url.pathname.split("/").filter(Boolean);
  const slot = parts[1] || url.searchParams.get("slot") || "";
  const ref = url.searchParams.get("ref") || "";
  const base = DEST[slot];
  if (!base) {
    return Response.redirect(new URL("/go/index.html?slot=" + encodeURIComponent(slot) + "&ref=" + encodeURIComponent(ref), url.origin), 302);
  }
  const dest = base + (base.includes("?") ? "&" : "?") + "ref=" + encodeURIComponent(ref);
  // P1: log {slot, ref, ts, src} here.
  return Response.redirect(dest, 302);
}
