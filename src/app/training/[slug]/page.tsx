import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TrainingServicePage from "@/components/TrainingServicePage";
import {
  OG_IMAGE_PATH,
  buildTrainingServiceJsonLd,
  getTrainingMetadata,
  toJsonLd,
} from "@/lib/seo";
import {
  getTrainingService,
  trainingServices,
} from "@/lib/trainingServices";

type TrainingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return trainingServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: TrainingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getTrainingService(slug);

  if (!service) {
    return {
      title: "Training Service Not Found",
    };
  }

  const seoMetadata = getTrainingMetadata(service);

  return {
    title: seoMetadata.title,
    description: seoMetadata.description,
    alternates: {
      canonical: `/training/${service.slug}`,
    },
    openGraph: {
      title: seoMetadata.title,
      description: seoMetadata.description,
      url: `/training/${service.slug}`,
      type: "website",
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1358,
          height: 1159,
          alt: "Patriot K9 Command German Shepherd breeding and training",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoMetadata.title,
      description: seoMetadata.description,
      images: [OG_IMAGE_PATH],
    },
  };
}

export default async function TrainingSlugPage({
  params,
}: TrainingPageProps) {
  const { slug } = await params;
  const service = getTrainingService(slug);

  if (!service) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(buildTrainingServiceJsonLd(service)),
        }}
      />
      <TrainingServicePage service={service} />
    </>
  );
}
