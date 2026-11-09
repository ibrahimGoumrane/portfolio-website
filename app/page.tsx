import { HomeRoute, homeMetadata } from "@/lib/pages";

export const metadata = homeMetadata("en");

export default function Page() {
  return <HomeRoute lang="en" />;
}
