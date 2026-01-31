import { z } from "zod";

import socialMediaLinksJson from "./social-media-links.json";

const socialMediaLinksSchema = z.object({
  facebookLink: z.url(),
  instagramLink: z.url(),
  linkedinLink: z.url(),
});

export const socialMediaLinks =
  socialMediaLinksSchema.parse(socialMediaLinksJson);
