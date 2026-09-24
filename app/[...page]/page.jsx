import { fetchOneEntry, getBuilderSearchParams } from "@builder.io/sdk-react";
import { RenderBuilderContent } from "../../components/builder";

// Builder Public API Key set in .env file
const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

export default async function Page(props) {
  const builderModelName = "page";

  // Use the page path specified in the URL to fetch the content
  const urlPath = "/" + ((await props?.params)?.page?.join("/") || "");
  const searchParams = await props?.searchParams;

  const content = await fetchOneEntry({
    // Get the page content from Builder with the specified options
    apiKey: PUBLIC_API_KEY,
    model: builderModelName,
    userAttributes: { urlPath },
    enrich: true,
    // Forward Builder's preview/editing query params (e.g. draft overrides)
    // so the server fetches the same content the visual editor is showing,
    // instead of the published content — avoids an SSR/CSR hydration mismatch.
    options: getBuilderSearchParams(searchParams),
  });

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
