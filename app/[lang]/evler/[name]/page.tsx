import { House } from "@/app/models/House";
import { HouseData } from "@/data/houses/HouseData";
import { ValidLocale, getTranslator } from "@/i18n";
import _ from "lodash";
import { Fragment } from "react";

export const metadata = {
  title: "Hilson Wood",
  description: "Ahşap Ev Detay",
};

export default async function HouseDetail({
  params,
}: {
  params: { lang: string; name: string };
}) {
  const translate = await getTranslator(`${params.lang}` as ValidLocale);

  metadata.description = translate(`houseDetail.${params.name}.description`);

  return (
    <Fragment>
      <h1>{translate(`houseDetail.${params.name}.title`)}</h1>
    </Fragment>
  );
}
