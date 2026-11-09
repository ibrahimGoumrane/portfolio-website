import { CaseRoute, caseMetadata, caseStaticParams } from "@/lib/pages";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = caseStaticParams;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return caseMetadata("en", slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <CaseRoute lang="en" slug={slug} />;
}
