/**
 * Renders one schema.org graph as JSON-LD.
 *
 * The value is serialised with JSON.stringify and the closing-tag sequence is
 * escaped, so copy from the content files can never break out of the script
 * element.
 */
export function StructuredData({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
