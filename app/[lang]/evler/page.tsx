import { House } from "@/app/models/House";
import { HouseData } from "@/data/houses/HouseData";
import { ValidLocale, getTranslator } from "@/i18n";
import { Fragment } from "react";

export const metadata = {
  title: "Hilson Wood",
  description: "Ahşap Evler",
};

export default async function HouseList({
  params,
}: {
  params: { lang: string };
}) {
  const translate = await getTranslator(`${params.lang}` as ValidLocale);

  metadata.description = translate("houseList.description");

  const houseList = HouseData();

  return (
    <Fragment>
      <h1>{translate("houseList.title")}</h1>
      {houseList.map((house: House, index: number) => (
        <Fragment key={index}>
          <h2>{house.name}</h2>
        </Fragment>
      ))}
    </Fragment>
  );
}
