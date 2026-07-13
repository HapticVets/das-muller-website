import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TrainingServicePage from "@/components/TrainingServicePage";
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

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: {
      canonical: `/training/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      url: `/training/${service.slug}`,
      type: "website",
      images: [
        {
          url: "/images/branding/og-image.jpg",
          width: 1358,
          height: 1159,
          alt: "Patriot K9 Command German Shepherd breeding and training",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.shortDescription,
      images: ["/images/branding/og-image.jpg"],
    },
  };
}

export default async function TrainingSlugPage({
  params,
}: TrainingPageProps) {
  const { slug } = await params;
  const service = getTrainingService(slug);

  if (!service) notFound();

  return <TrainingServicePage service={service} />;
}
