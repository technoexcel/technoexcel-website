// All pages are statically pre-rendered — no loading fallback needed.
// Returning null here keeps the previous page visible during navigation
// instead of flashing a blank content area (Suspense fallback).
export default function Loading() {
  return null;
}
