import { ClientConfig, createClient, groq } from "next-sanity";
import { cache } from "react";

export const config: ClientConfig = {
  projectId: "05gboql9",
  dataset: "production",
  apiVersion: "2023-05-03", // https://www.sanity.io/docs/api-versioning
  useCdn: false,
  //   useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
};

const client = createClient(config);

// Wrap the cache function in a way that reuses the TypeScript definitions
export const clientFetch = cache(client.fetch.bind(client));
