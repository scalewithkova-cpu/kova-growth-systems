/** Formspree form ID (the part after formspree.io/f/). Leave empty until configured. */
export const FORMSPREE_ID = "";
export const CONTACT_EMAIL = "scalewithkova@gmail.com";
export const INSTAGRAM_URL = "https://instagram.com/KovaScales";

/**
 * Campaign screenshots and ad creatives. Add image URLs here once uploaded.
 * Empty slots are hidden on the live site and only shown as upload spots in the editor preview.
 */
export const campaignShots: Record<"a" | "b" | "prelim", string> = {
  a: "",
  b: "",
  prelim: "",
};

export const creatives: { src: string; alt: string }[] = [];

export const SHOW_EMPTY_SLOTS = import.meta.env.DEV;
