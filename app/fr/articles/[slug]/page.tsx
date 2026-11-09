import { ArticleRoute, articleMetadata, articleStaticParams } from "@/lib/pages";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = articleStaticParams;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return articleMetadata("fr", slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ArticleRoute lang="fr" slug={slug} />;
}
