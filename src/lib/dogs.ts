export type DogRole = "Sire" | "Dam";
export type DogSex = "Male" | "Female";
export type HealthStatus =
  | "Completed"
  | "Pending"
  | "Planned"
  | "Not Planned";

export type DogPhoto = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  objectPosition?: string;
};

export type PedigreeAsset = {
  src: string;
  type: "pdf" | "image";
  label?: string;
};

export type HealthTest = {
  label: string;
  status: HealthStatus;
  details?: string;
  provider?: string;
  testDate?: string;
  resultSummary?: string[];
  documentPath?: string;
  documentType?: "pdf" | "image";
  documentAltText?: string;
  documentLabel?: string;
};

export type DogProfile = {
  slug: "ollie-major" | "adolf" | "anna";
  name: string;
  registeredName?: string;
  role: DogRole;
  sex: DogSex;
  age?: string;
  dateOfBirth?: string;
  color: string;
  akcRegisteredColor?: string;
  coat: string;
  summary: string;
  description: string[];
  temperament: string;
  workingRole: string;
  sire?: string;
  sireRegistrationNumber?: string;
  dam?: string;
  damRegistrationNumber?: string;
  akcRegistrationNumber?: string;
  healthSummary: string;
  healthTests: HealthTest[];
  producedOffspring?: string[];
  relatedOffspring?: string[];
  photos: DogPhoto[];
  pedigree?: PedigreeAsset;
  pedigreeDocument?: string;
  pedigreeDocumentType?: "pdf" | "image";
  pedigreeAltText?: string;
};

export const dogProfiles: DogProfile[] = [
  {
    slug: "ollie-major",
    name: "Ollie Major",
    registeredName: "Ollie Major",
    role: "Sire",
    sex: "Male",
    dateOfBirth: "06/04/2024",
    color: "Black & Tan with White Markings",
    akcRegisteredColor: "BI-COL",
    coat: "Stock Coat",
    summary:
      "Confident, highly trainable service dog with strong obedience, excellent recall, and a stable family temperament.",
    description: [
      "Ollie Major is a confident, intelligent, and highly trainable German Shepherd with an excellent family and working temperament. He currently works as a service dog and accompanies his handler throughout daily life, including stores, restaurants, medical appointments, and other busy public environments.",
      "He has strong obedience, excellent recall, and is naturally handler-focused and eager to work.",
      "At home, Ollie is wonderful with children. Rather than chasing or becoming overly excited when the kids are playing, he naturally watches over them and stays aware of what they are doing. He is affectionate, attentive, and able to settle easily when there is nothing being asked of him.",
      "Ollie represents the qualities we value in our breeding program: stable temperament, intelligence, trainability, confidence, versatility, and a strong connection with his family.",
    ],
    temperament:
      "Confident, affectionate, attentive, and naturally handler-focused with the ability to settle cleanly in daily life.",
    workingRole: "Service Dog",
    sire: "Adolf Stephan Jenkins",
    sireRegistrationNumber: "DN56993102",
    dam: "Ana Mechtilde Das Muller",
    damRegistrationNumber: "DN65208901",
    akcRegistrationNumber: "DN79626909",
    pedigreeDocument:
      "/images/media/breeding/pedigrees/ollie-major-akc-certified-pedigree.jpg",
    pedigreeDocumentType: "image",
    pedigreeAltText: "AKC Certified Pedigree for Ollie Major.",
    healthSummary:
      "Embark DNA Health and OFA evaluations are planned. Results will be added as testing is completed.",
    healthTests: [
      {
        label: "Embark DNA Health",
        status: "Planned",
        details: "Planned / Not Yet Completed",
      },
      {
        label: "OFA Hips",
        status: "Planned",
        details: "Planned",
      },
      {
        label: "OFA Elbows",
        status: "Planned",
        details: "Planned",
      },
    ],
    photos: [
      {
        src: "/media/breeding/ollie-major-main.JPG",
        alt: "Ollie Major, German Shepherd sire and service dog at Patriot K9 Command.",
        objectPosition: "center 24%",
      },
      {
        src: "/media/breeding/ollie-major-handler-engagement-training.JPG",
        alt: "Ollie Major demonstrating focused engagement with his handler during outdoor training.",
        objectPosition: "center 30%",
      },
      {
        src: "/media/breeding/ollie-major-handler-focus-training.JPG",
        alt: "Ollie Major demonstrating handler focus during outdoor training at Patriot K9 Command.",
        objectPosition: "center 30%",
      },
      {
        src: "/media/breeding/ollie-major-with-sire-adolf.JPG",
        alt: "Ollie Major with his sire Adolf at Patriot K9 Command.",
        objectPosition: "center 30%",
      },
      {
        src: "/media/breeding/ollie-major-with-dam-anna.jpg",
        alt: "Ollie Major with his dam Anna at Patriot K9 Command.",
        objectPosition: "center 32%",
      },
      {
        src: "/media/breeding/ollie-major-with-max-service-dog.JPG",
        alt: "Ollie Major with Max, another trained service dog.",
        objectPosition: "center 28%",
      },
      {
        src: "/media/breeding/ollie-german-shepherd-puppy-development.jpg",
        alt: "Young German Shepherd Ollie interacting with another dog during early development at Patriot K9 Command.",
        width: 3024,
        height: 4032,
        objectPosition: "center 32%",
      },
      {
        src: "/images/training/ollie-puppy-socialization-training.jpg",
        alt: "Young German Shepherd Ollie during puppy socialization and confidence training at Patriot K9 Command.",
        width: 3024,
        height: 4032,
        objectPosition: "center 28%",
      },
    ],
  },
  {
    slug: "adolf",
    name: "Adolf",
    registeredName: "Adolf Stephan Jenkins",
    role: "Sire",
    sex: "Male",
    age: "7 years old",
    dateOfBirth: "02/14/2019",
    color: "Black & Tan",
    akcRegisteredColor: "BLK & TN",
    coat: "Stock Coat",
    summary:
      "Stable, confident sire with strong ball drive, environmental stability, and a dependable family temperament.",
    description: [
      "Adolf is a confident, stable German Shepherd with a strong working drive and dependable family temperament. At 7 years old, he has matured into a well-balanced dog who is comfortable both at home and in public environments. He is good with children and has a steady, composed presence around the family.",
      "Adolf has a particularly strong ball drive and loves having something to work for, which highlights his enthusiasm, focus, and working-dog characteristics. Despite that drive, he is able to settle into everyday family life and remains comfortable in different environments.",
      "He is also the sire of Ollie Major, our service dog, and we have been able to see many of the qualities we value in Adolf carried forward into the next generation. Adolf represents the combination we look for in our German Shepherds: confidence, drive, intelligence, trainability, environmental stability, and a temperament suitable for family life.",
    ],
    temperament:
      "Confident, composed, environmentally stable, and able to balance strong working drive with family life.",
    workingRole: "Breeding Sire",
    sire: "Thor Garth Randolph",
    sireRegistrationNumber: "DN41150011",
    dam: "Shaydee Jane Randolph",
    damRegistrationNumber: "DN45451206",
    akcRegistrationNumber: "DN56993102",
    pedigreeDocument:
      "/images/media/breeding/pedigrees/adolf-stephan-jenkins-akc-certified-pedigree.jpg",
    pedigreeDocumentType: "image",
    pedigreeAltText: "AKC Certified Pedigree for Adolf Stephan Jenkins.",
    healthSummary:
      "Embark DNA Health - Completed. No OFA testing is currently planned for Adolf.",
    healthTests: [
      {
        label: "Embark DNA Health",
        status: "Completed",
        provider: "Embark",
        testDate: "06/14/2021",
        details:
          "Embark DNA Health - Completed. Registration body/number: American Kennel Club (AKC) DN56993102.",
        resultSummary: [
          "100.0% German Shepherd Dog",
          "11 breed-relevant conditions included in this health summary.",
          "Not expected to develop signs and symptoms from the specific tested variants listed in the Embark report.",
        ],
        documentPath:
          "/images/media/breeding/health/adolf-embark-dna-health-summary.png",
        documentType: "image",
        documentAltText: "Embark DNA Health Summary for Adolf Stephan Jenkins.",
        documentLabel: "View Embark Health Summary",
      },
    ],
    producedOffspring: ["Ollie Major"],
    relatedOffspring: ["Ollie Major"],
    photos: [
      {
        src: "/media/breeding/adolf-stephan-jenkins-main.jpg",
        alt: "Adolf Stephan Jenkins, black and tan German Shepherd sire at Patriot K9 Command.",
        objectPosition: "center 28%",
      },
      {
        src: "/media/breeding/adolf-stephan-jenkins-ball-drive.jpg",
        alt: "Adolf Stephan Jenkins relaxing with a ball, showing his strong ball drive.",
        objectPosition: "center 30%",
      },
      {
        src: "/media/breeding/adolf-stephan-jenkins-working-drive.jpg",
        alt: "Adolf Stephan Jenkins carrying a training toy, showing his working drive and engagement.",
        objectPosition: "center 32%",
      },
      {
        src: "/media/breeding/adolf-stephan-jenkins-relaxed-outdoors.jpg",
        alt: "Adolf Stephan Jenkins relaxing outdoors.",
        objectPosition: "center 30%",
      },
      {
        src: "/media/breeding/adolf-stephan-jenkins-winter-outdoors.jpg",
        alt: "Adolf Stephan Jenkins outdoors in the snow.",
        objectPosition: "center 28%",
      },
    ],
  },
  {
    slug: "anna",
    name: "Anna",
    registeredName: "Ana Mechtilde Das Muller",
    role: "Dam",
    sex: "Female",
    dateOfBirth: "12/21/2020",
    color: "Panda",
    akcRegisteredColor: "BI-COL",
    coat: "Stock Coat",
    summary:
      "Sweet, handler-oriented dam with a softer temperament, strong attachment to her people, and good engagement drive.",
    description: [
      "Anna is a sweet, handler-oriented German Shepherd with a softer temperament and strong attachment to her people. She can be somewhat reserved or timid in unfamiliar situations, but naturally looks to and stays close to her handler for guidance and reassurance.",
      "She has good ball drive and enjoys engagement and play, giving her a nice combination of working motivation and handler focus. Around the home, Anna is an affectionate, loyal companion with a generally easygoing personality.",
      "As the dam of Ollie Major, we have also had the opportunity to see her qualities carried into the next generation. Ollie developed into a confident, highly trainable service dog with excellent public manners and handler engagement. Anna brings loyalty, handler connection, drive, and a softer temperament to our German Shepherd lines.",
    ],
    temperament:
      "Handler-oriented, affectionate, loyal, and softer in temperament while still showing engagement and drive.",
    workingRole: "Breeding Dam",
    sire: "UKR Donald Trump's SBL-Panda Ezekiel",
    sireRegistrationNumber: "DN52639512",
    dam: "Knox XI",
    damRegistrationNumber: "DN54724202",
    akcRegistrationNumber: "DN65208901",
    pedigreeDocument:
      "/images/media/breeding/pedigrees/ana-mechtilde-das-muller-akc-certified-pedigree.jpg",
    pedigreeDocumentType: "image",
    pedigreeAltText: "AKC Certified Pedigree for Ana Mechtilde Das Muller.",
    healthSummary:
      "Embark DNA Health is pending. OFA testing is not currently planned for Anna.",
    healthTests: [
      {
        label: "Embark DNA Health",
        status: "Pending",
        details: "Pending",
      },
    ],
    producedOffspring: ["Ollie Major"],
    relatedOffspring: ["Ollie Major"],
    photos: [
      {
        src: "/media/breeding/anna-mechtilde-das-muller-main.jpg",
        alt: "Ana Mechtilde Das Muller standing in the snow, Panda-pattern German Shepherd dam at Patriot K9 Command.",
        objectPosition: "center 28%",
      },
      {
        src: "/media/breeding/anna-mechtilde-das-muller-full-body.jpg",
        alt: "Ana Mechtilde Das Muller standing outdoors, showing her full body and Panda-pattern markings.",
        objectPosition: "center 30%",
      },
      {
        src: "/media/breeding/anna-mechtilde-das-muller-outdoors.jpg",
        alt: "Ana Mechtilde Das Muller moving outdoors at Patriot K9 Command.",
        objectPosition: "center 32%",
      },
      {
        src: "/media/breeding/anna-mechtilde-das-muller-closeup.jpg",
        alt: "Close-up of Ana Mechtilde Das Muller showing her distinctive Panda-pattern facial markings.",
        objectPosition: "center 24%",
      },
      {
        src: "/media/breeding/anna-mechtilde-das-muller-ball-drive-snow.jpg",
        alt: "Ana Mechtilde Das Muller playing with a ball in the snow, showing her play and ball drive.",
        objectPosition: "center 30%",
      },
      {
        src: "/media/breeding/anna-mechtilde-das-muller-social-play.jpg",
        alt: "Ana Mechtilde Das Muller playing outdoors with another German Shepherd.",
        objectPosition: "center 30%",
      },
      {
        src: "/media/breeding/anna-mechtilde-das-muller-with-young-dog.jpg",
        alt: "Ana Mechtilde Das Muller outdoors with a younger German Shepherd.",
        objectPosition: "center 30%",
      },
      {
        src: "/media/breeding/anna-mechtilde-das-muller-side-profile.jpg",
        alt: "Ana Mechtilde Das Muller standing outdoors, showing her side profile and distinctive coat markings.",
        objectPosition: "center 28%",
      },
    ],
  },
] as const;

export function getDogProfile(slug: string) {
  return dogProfiles.find((dog) => dog.slug === slug);
}

export function getDogsByRole(role: DogRole) {
  return dogProfiles.filter((dog) => dog.role === role);
}
