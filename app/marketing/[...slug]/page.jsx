import { fetchOneEntry } from "@builder.io/sdk-react";
import { RenderBuilderContent } from "../../../components/builder";

const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

export default async function MarketingPage(props) {
  const builderModelName = "marketing";

  const urlPath =
    "/marketing/" + ((await props?.params)?.slug?.join("/") || "");

  const content = await fetchOneEntry({
    apiKey: PUBLIC_API_KEY,
    model: builderModelName,
    userAttributes: { urlPath },
    "options": {
      "includeUnpublished": "true"
    },
    "enrich": true,
  });

  return (
    <RenderBuilderContent content={content} model={builderModelName} />
  );
}
