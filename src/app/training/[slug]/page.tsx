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
      title: "Training Service Not Found | Patriot K9 Command",
    };
  }

  return {
    title: `${service.title} | Patriot K9 Command`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Patriot K9 Command`,
      description: service.shortDescription,
      url: `https://patriotk9kennel.com/training/${service.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Patriot K9 Command`,
      description: service.shortDescription,
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
