import { z } from "zod";

import threePillarsContentJson from "./three-pillars-content.json";

const threePillarsContentSchema = z.object({
  connectingAlumniContent: z.string(),
  sharingStoriesContent: z.string(),
  fundingFuturesContent: z.string(),
});

export const threePillarsContent = threePillarsContentSchema.parse(
  threePillarsContentJson,
);
