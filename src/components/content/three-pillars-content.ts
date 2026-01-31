import { z } from "zod";

import threePillarsContentJson from "./three-pillars-content.json";

const threePillarsContentSchema = z.object({
  alumniConnectionContent: z.string(),
  alumniStoriesContent: z.string(),
  futuresFundedContent: z.string(),
});

export const threePillarsContent = threePillarsContentSchema.parse(
  threePillarsContentJson,
);
