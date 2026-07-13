export type SiteMediaType = "image" | "video";

export type SiteMediaCategory =
  | "puppies"
  | "breeding"
  | "community"
  | "facility"
  | "lifestyle"
  | "training-obedience"
  | "training-public-training"
  | "training-behavior-modification"
  | "training-puppy-foundation"
  | "training-household";

export type SiteMediaItem = {
  id: string;
  type: SiteMediaType;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: SiteMediaCategory;
  recommendedPages: string[];
  heroEligible: boolean;
  autoplayEligible: boolean;
};

export const siteMedia: readonly SiteMediaItem[] = [
  {
    id: "puppy-black-tan-portrait-outdoors",
    type: "image",
    src: "/media/puppies/puppy-black-tan-portrait-outdoors.JPG",
    alt: "Close-up portrait of a young black and tan German Shepherd puppy outdoors.",
    title: "Purpose-Raised German Shepherd Puppies",
    description: "Authentic puppy photography from the Patriot K9 breeding program.",
    category: "puppies",
    recommendedPages: ["home", "puppies", "breeding"],
    heroEligible: true,
    autoplayEligible: false,
  },
  {
    id: "puppy-ball-drive-development",
    type: "video",
    src: "/media/puppies/puppy-ball-drive-development.mp4",
    alt: "Young German Shepherd puppy engaging with a ball during an early development session.",
    title: "Early Puppy Development",
    description:
      "We observe confidence, curiosity, engagement, and developing toy interest throughout the early weeks.",
    category: "puppies",
    recommendedPages: ["home", "training/puppy-foundation"],
    heroEligible: false,
    autoplayEligible: true,
  },
  {
    id: "puppy-evaluations-vet-office-group",
    type: "image",
    src: "/media/puppies/puppy-evaluations-vet-office-group.JPG",
    alt: "German Shepherd puppies together during an early environmental exposure outing.",
    title: "Early Environmental Exposure",
    description:
      "Group outings help us observe curiosity, composure, and developing engagement in new environments.",
    category: "puppies",
    recommendedPages: ["home", "training/puppy-foundation"],
    heroEligible: false,
    autoplayEligible: false,
  },
  {
    id: "facility-drone-property-overview",
    type: "image",
    src: "/media/facility/facility-drone-property-overview.PNG",
    alt: "Drone view of the rural Ohio property used by Patriot K9 for dog training and breeding.",
    title: "Rural Training Environment",
    description:
      "Open outdoor space supports structured obedience, controlled exposure, and everyday dog development work.",
    category: "facility",
    recommendedPages: ["home", "facility"],
    heroEligible: false,
    autoplayEligible: false,
  },
  {
    id: "facility-kennel-room",
    type: "image",
    src: "/media/facility/facility-kennel-room.JPG",
    alt: "Clean indoor kennel room used for structured boarding and dog care at Patriot K9.",
    title: "Structured Boarding and Care",
    description:
      "Clean, practical kennel space supports daily structure, boarding, and consistent dog care.",
    category: "facility",
    recommendedPages: ["home", "facility", "training/board-and-train"],
    heroEligible: false,
    autoplayEligible: false,
  },
  {
    id: "lifestyle-trainer-driving-with-dogs",
    type: "image",
    src: "/media/lifestyle/lifestyle-trainer-driving-with-dogs..JPG",
    alt: "Patriot K9 trainer traveling with two German Shepherds.",
    title: "Hands-On Daily Work",
    description:
      "Patriot K9 centers daily life, travel, and training around structured work with dogs.",
    category: "lifestyle",
    recommendedPages: ["home", "about"],
    heroEligible: false,
    autoplayEligible: false,
  },
  {
    id: "team-veterans-with-service-dogs",
    type: "image",
    src: "/media/community/team-veterans-with-service-dogs.JPG",
    alt: "Patriot K9 community members and veterans gathered outdoors with German Shepherds.",
    title: "Community Connections",
    description:
      "Patriot K9 maintains long-term relationships through dog work, training support, and community ties.",
    category: "community",
    recommendedPages: ["home", "about", "community"],
    heroEligible: false,
    autoplayEligible: false,
  },
  {
    id: "training-behavior-modification-neutrality",
    type: "video",
    src: "/media/training/behavior-modification/training-behavior-modification-neutrality.MOV",
    alt: "Controlled behavior modification session focused on dog neutrality around another dog.",
    title: "Behavior Modification in Progress",
    description:
      "This controlled session demonstrates neutrality work for a dog with a history of aggression toward other dogs.",
    category: "training-behavior-modification",
    recommendedPages: ["training/behavior-modification"],
    heroEligible: false,
    autoplayEligible: false,
  },
  {
    id: "training-calm-around-cat",
    type: "image",
    src: "/media/training/household/training-calm-around-cat.JPG",
    alt: "German Shepherd sitting calmly in the same indoor space as a household cat.",
    title: "Household Neutrality",
    description:
      "Structured impulse-control work can help suitable dogs learn calmer behavior around household pets.",
    category: "training-household",
    recommendedPages: ["training/behavior-modification"],
    heroEligible: false,
    autoplayEligible: false,
  },
  {
    id: "training-engagement-with-ball",
    type: "video",
    src: "/media/training/obedience/training-engagement-with-ball.mp4",
    alt: "German Shepherd working in an engagement session using a ball as motivation.",
    title: "Engagement and Motivation",
    description:
      "Toy engagement can help strengthen communication and the working relationship between dog and handler.",
    category: "training-obedience",
    recommendedPages: ["training/private-lessons", "training/day-training"],
    heroEligible: false,
    autoplayEligible: false,
  },
  {
    id: "training-place-command-outdoors",
    type: "image",
    src: "/media/training/obedience/training-place-command-outdoors.JPG",
    alt: "Two German Shepherds calmly holding obedience positions outdoors.",
    title: "Reliable Obedience Around Distractions",
    description:
      "Clear structure and repetition help dogs maintain obedience around everyday movement and environmental pressure.",
    category: "training-obedience",
    recommendedPages: ["home", "training/private-lessons", "training/day-training"],
    heroEligible: false,
    autoplayEligible: false,
  },
  {
    id: "training-place-stay-with-release-command",
    type: "video",
    src: "/media/training/obedience/training-place-stay-with-release-command.Mp4",
    alt: "German Shepherd maintaining a place command until the handler gives a release cue.",
    title: "Stay Until Released",
    description:
      "A reliable stay means maintaining position until the handler gives a clear release cue.",
    category: "training-obedience",
    recommendedPages: ["training/private-lessons", "training/day-training"],
    heroEligible: false,
    autoplayEligible: false,
  },
  {
    id: "training-public-down-stay-store",
    type: "image",
    src: "/media/training/public-training/training-public-down-stay-store.JPG",
    alt: "Two German Shepherds calmly holding a down-stay inside a busy public store.",
    title: "Real-World Obedience",
    description:
      "We train dogs to apply their skills around people, carts, noise, movement, and everyday distractions.",
    category: "training-public-training",
    recommendedPages: ["home", "training/board-and-train", "training/day-training"],
    heroEligible: false,
    autoplayEligible: false,
  },
  {
    id: "training-public-place-command-doctors-office",
    type: "video",
    src: "/media/training/public-training/training-public-place-command-doctors-office.Mp4",
    alt: "German Shepherd practicing calm place behavior in an everyday office environment.",
    title: "Calm Behavior in Everyday Environments",
    description:
      "Training is practiced in real environments so dogs can learn to settle, remain responsive, and handle everyday distractions appropriately.",
    category: "training-public-training",
    recommendedPages: ["training/board-and-train", "training/day-training"],
    heroEligible: false,
    autoplayEligible: false,
  },
] as const;

export const siteMediaById = Object.fromEntries(
  siteMedia.map((item) => [item.id, item])
) as Record<(typeof siteMedia)[number]["id"], (typeof siteMedia)[number]>;

export function getSiteMedia(id: keyof typeof siteMediaById) {
  return siteMediaById[id];
}
