import { ValidLocale, getTranslator } from "@/i18n";

export const metadata = {
  title: "Hilson Wood",
  description: "Ahşap Ev & Mobilya Merkezi",
};

export default async function Home({ params }: { params: { lang: string } }) {
  const translate = await getTranslator(`${params.lang}` as ValidLocale);

  metadata.description = translate("homePage.description");

  return <h1>{translate("homePage.title")}</h1>;
}
