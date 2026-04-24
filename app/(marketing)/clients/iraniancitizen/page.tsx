import { notFound } from "next/navigation";
import { ClientDetail } from "@/components/sections/client-detail";
import { clientBySlug } from "@/lib/clients";
import { buildMetadata } from "@/lib/seo";

const SLUG = "iraniancitizen" as const;
const client = clientBySlug(SLUG);

export const metadata = buildMetadata({
  title: client ? `${client.name} — Client` : "Client",
  description: client?.description ?? "",
  path: `/clients/${SLUG}`,
});

export default function Page() {
  if (!client) notFound();
  return <ClientDetail client={client} />;
}
