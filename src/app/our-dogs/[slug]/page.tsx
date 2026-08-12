import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DogProfilePage from "@/components/dogs/DogProfilePage";
import { dogProfiles, getDogProfile } from "@/lib/dogs";
import { OG_IMAGE_PATH } from "@/lib/seo";

type DogProfilePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return dogProfiles.map((dog) => ({
    slug: dog.slug,
  }));
}

export async function generateMetadata({
  params,
}: DogProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const dog = getDogProfile(slug);

  if (!dog) {
    return {
      title: "Dog Profile Not Found",
    };
  }

  const pageTitle = `${dog.name} | German Shepherd ${dog.role} | Patriot K9 Command`;
  const pageDescription = `${dog.name} is a ${dog.role.toLowerCase()} in the Patriot K9 Command breeding program with a ${dog.temperament.toLowerCase()}`;
  const image = dog.photos[0];

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `/our-dogs/${dog.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `/our-dogs/${dog.slug}`,
      images: [
        {
          url: image?.src ?? OG_IMAGE_PATH,
          width: image?.width,
          height: image?.height,
          alt:
            image?.alt ??
            "Patriot K9 Command German Shepherd breeding and training",
        },
      ],
    },
    twitter: {
      title: pageTitle,
      description: pageDescription,
      images: [image?.src ?? OG_IMAGE_PATH],
    },
  };
}

export default async function DogProfileRoute({
  params,
}: DogProfilePageProps) {
  const { slug } = await params;
  const dog = getDogProfile(slug);

  if (!dog) notFound();

  return <DogProfilePage dog={dog} />;
}
