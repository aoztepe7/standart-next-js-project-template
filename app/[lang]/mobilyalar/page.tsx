import { ValidLocale, getTranslator } from "@/i18n";

export const metadata = {
  title: "Hilson Wood",
  description: "Mobilyalar",
};

export default async function FurnitureList({
  params,
}: {
  params: { lang: string };
}) {
  const translate = await getTranslator(`${params.lang}` as ValidLocale);
  metadata.description = translate("furnitureList.description");

  return <h1>{translate("furnitureList.title")}</h1>;
}
