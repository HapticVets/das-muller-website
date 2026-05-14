export type TrainingService = {
  slug:
    | "evaluation"
    | "puppy-foundation"
    | "private-lessons"
    | "day-training"
    | "board-and-train"
    | "behavior-modification"
    | "service-dog-foundations";
  title: string;
  shortDescription: string;
  price: string;
  purpose: string;
  whoItsFor: string[];
  included: string[];
  trainingGoals: string[];
  ownerExpectations: string[];
};

export const trainingServices: TrainingService[] = [
  {
    slug: "evaluation",
    title: "Evaluation",
    shortDescription:
      "A structured assessment that identifies where the dog is now, what the owner needs, and which training path makes the most sense next.",
    price: "$100",
    purpose:
      "In-person or structured assessment to identify the dog’s current behavior, training level, owner goals, and best next step.",
    whoItsFor: [
      "Owners who want professional direction before committing to a program",
      "Dogs with unclear training gaps or inconsistent behavior",
      "Homes that need a realistic next-step recommendation",
    ],
    included: [
      "Behavior review",
      "Obedience check",
      "Handler goals",
      "Training recommendation",
      "Custom roadmap",
    ],
    trainingGoals: [
      "Clarify the dog’s current strengths and weak points",
      "Identify the right training structure for the dog and owner",
      "Set realistic priorities before moving into a full program",
    ],
    ownerExpectations: [
      "Arrive ready to discuss goals, routines, and current issues honestly",
      "Expect direct feedback on what needs to improve",
      "Use the roadmap as the foundation for consistent follow-through",
    ],
  },
  {
    slug: "puppy-foundation",
    title: "Puppy Foundation",
    shortDescription:
      "Early structure for young dogs who need clear routines, clean communication, and the right obedience foundation from the start.",
    price: "$600 — 4 sessions",
    purpose:
      "Early structure for puppies learning manners, confidence, crate habits, marker training, leash basics, and owner communication.",
    whoItsFor: [
      "Puppy owners who want to start with structure instead of guesswork",
      "Families needing better household manners from the beginning",
      "Owners who want confidence and communication built early",
    ],
    included: [
      "Sit",
      "Down",
      "Place",
      "Recall foundation",
      "Crate routine",
      "Confidence work",
      "Household manners",
      "Owner coaching",
    ],
    trainingGoals: [
      "Build obedience foundations the puppy can grow on",
      "Create better engagement and responsiveness with the handler",
      "Reduce chaos by putting routines and standards in place early",
    ],
    ownerExpectations: [
      "Practice daily between sessions with short, structured reps",
      "Maintain crate, leash, and household routines consistently",
      "Understand that early progress depends heavily on owner follow-through",
    ],
  },
  {
    slug: "private-lessons",
    title: "Private Lessons",
    shortDescription:
      "One-on-one coaching for owners who want practical help, cleaner handling skills, and a training plan they can carry out themselves.",
    price: "$120 single session, $700 for 6 sessions, $1,200 for 12 sessions",
    purpose:
      "One-on-one coaching for owners who want to train with their dog and build better handling skills.",
    whoItsFor: [
      "Owners who want direct coaching while staying hands-on in the process",
      "Dogs needing obedience work, better leash manners, or cleaner structure",
      "Handlers who want practical homework and accountability between sessions",
    ],
    included: [
      "Obedience",
      "Leash work",
      "Recall",
      "Place command",
      "Problem solving",
      "Handler timing",
      "Homework between sessions",
    ],
    trainingGoals: [
      "Improve communication between dog and handler",
      "Create better clarity, timing, and consistency from the owner",
      "Build practical obedience that transfers into daily life",
    ],
    ownerExpectations: [
      "Show up ready to learn, handle the dog, and accept correction",
      "Complete assigned homework between lessons",
      "Understand that lesson quality only matters if the work continues at home",
    ],
  },
  {
    slug: "day-training",
    title: "Day Training",
    shortDescription:
      "Structured training during the day for owners who want stronger progress without overnight boarding.",
    price: "$80/day, 10 days $750, 12 days $900",
    purpose:
      "Structured training days where the dog works with the trainer during the day without overnight boarding.",
    whoItsFor: [
      "Owners who want professional reps added into the dog’s week",
      "Dogs needing more repetition, structure, and supervised practice",
      "Homes that want momentum without a full board and train commitment",
    ],
    included: [
      "Obedience reps",
      "Leash manners",
      "Place command",
      "Confidence building",
      "Calm behavior",
      "Controlled exposure",
      "Progress updates",
    ],
    trainingGoals: [
      "Increase productive repetitions under structure",
      "Build better neutrality, manners, and responsiveness",
      "Help owners maintain progress with clearer updates and direction",
    ],
    ownerExpectations: [
      "Maintain standards at home so day training carries over",
      "Expect progress through repetition, not instant transformation",
      "Be ready to apply the same rules outside of training hours",
    ],
  },
  {
    slug: "board-and-train",
    title: "Board & Train",
    shortDescription:
      "An immersive training option for dogs who need daily structure, clearer standards, and consistent obedience development.",
    price: "$2,200 for 2 weeks, $3,800 for 4 weeks, $5,500 for 6 weeks",
    purpose:
      "Immersive training where the dog stays with the trainer for daily structure, obedience, manners, and behavior development.",
    whoItsFor: [
      "Owners who want intensive daily structure and professional repetition",
      "Dogs that need clearer standards than most owners can create alone",
      "Homes looking for a stronger obedience starting point before handoff",
    ],
    included: [
      "Daily training",
      "Crate structure",
      "Leash manners",
      "Obedience",
      "Place command",
      "Recall foundation",
      "Calm behavior",
      "Environmental exposure",
      "Owner handoff lesson",
    ],
    trainingGoals: [
      "Accelerate obedience and handling clarity through daily work",
      "Build calmer, more structured behavior in and out of routine settings",
      "Prepare the owner to continue the standard after the dog comes home",
    ],
    ownerExpectations: [
      "Understand that the handoff is the start of owner responsibility, not the end",
      "Follow the structure given after the dog returns home",
      "Expect maintenance and consistency to determine long-term results",
    ],
  },
  {
    slug: "behavior-modification",
    title: "Behavior Modification",
    shortDescription:
      "A structured training plan for dogs with reactivity, fear, impulse issues, or unsafe habits that need more than basic obedience work.",
    price: "Starts with evaluation. Final pricing depends on severity, risk level, and training plan.",
    purpose:
      "For dogs struggling with reactivity, fear, poor impulse control, overexcitement, pushy behavior, or unsafe habits.",
    whoItsFor: [
      "Owners dealing with behaviors that disrupt safety, control, or stability",
      "Dogs needing management and behavior work beyond standard obedience",
      "Homes willing to follow structure consistently outside of sessions",
    ],
    included: [
      "Behavior assessment",
      "Management plan",
      "Threshold work",
      "Confidence building",
      "Impulse control",
      "Structured exposure",
      "Owner handling rules",
    ],
    trainingGoals: [
      "Reduce unstable patterns through structure, clarity, and controlled exposure",
      "Improve handler control and safer decision-making around triggers",
      "Build more stable responses without making unrealistic promises",
    ],
    ownerExpectations: [
      "Be honest about severity, history, and management failures",
      "Follow handling rules closely and avoid freelancing the plan",
      "Understand that behavior work requires consistency and realistic expectations",
    ],
  },
  {
    slug: "service-dog-foundations",
    title: "Service Dog Foundations",
    shortDescription:
      "Foundation training for dogs being prepared for future service-style reliability, stronger neutrality, and clearer handler focus.",
    price: "Starts at $2,500+",
    purpose:
      "Foundation training for dogs being prepared for future service-style reliability, public manners, handler focus, and task readiness.",
    whoItsFor: [
      "Owners seeking strong foundation work before advanced public expectations",
      "Dogs with the potential for service-style preparation, pending suitability",
      "Handlers who want realistic assessment before moving further",
    ],
    included: [
      "Obedience reliability",
      "Public neutrality",
      "Leash manners",
      "Place command",
      "Handler engagement",
      "Confidence work",
      "Task foundation discussion",
      "Realistic suitability assessment",
    ],
    trainingGoals: [
      "Strengthen obedience and handler focus under structured expectations",
      "Build better public manners and environmental neutrality",
      "Evaluate whether the dog shows appropriate foundations for future preparation",
    ],
    ownerExpectations: [
      "Understand that foundation work is not a guarantee of final suitability",
      "Be prepared for honest feedback about the dog’s strengths and limitations",
      "Follow the training structure closely if long-term preparation is the goal",
    ],
  },
];

export function getTrainingService(slug: string) {
  return trainingServices.find((service) => service.slug === slug);
}
