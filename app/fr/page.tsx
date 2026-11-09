import { HomeRoute, homeMetadata } from "@/lib/pages";

export const metadata = homeMetadata("fr");

export default function Page() {
  return <HomeRoute lang="fr" />;
}
