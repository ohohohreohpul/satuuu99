/** Original reference artwork, displayed without browser-dependent SVG masks. */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={"brand-signature " + className} aria-hidden="true">
      <img src="/brand/mark.svg" alt="" width="390" height="225" />
      <span>SATUUU99</span>
    </span>
  );
}
