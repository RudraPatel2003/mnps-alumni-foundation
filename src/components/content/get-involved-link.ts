import { z } from "zod";

import getInvolvedLinkJson from "./get-involved-link.json";

const getInvolvedLinkSchema = z.object({
  getInvolvedLink: z.string(),
});

const parsedJson = getInvolvedLinkSchema.parse(getInvolvedLinkJson);

export const getInvolvedLink = parsedJson.getInvolvedLink;
