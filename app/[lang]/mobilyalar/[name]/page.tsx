import { FurnitureData } from "@/data/furnitures/FurnitureData";
import { ValidLocale, getTranslator } from "@/i18n";
import _ from "lodash";
import { Fragment } from "react";

export const metadata = {
  title: "Hilson Wood",
  description: "Mobilya Detay",
  keywords: "Ahşap Mobilya , Kaliteli Mobilya",
};

export default async function FurnitureDetail({
  params,
}: {
  params: { lang: string; name: string };
}) {
  console.log(params.lang);
  const translate = await getTranslator(`${params.lang}` as ValidLocale);
  var keywordList: Array<string> = new Array<string>();
  const product = _.find(FurnitureData(), function (furniture) {
    return furniture.id === params.name;
  });

  metadata.description = translate(
    `furnitureDetail.${params.name}.metaDescription`
  );

  _.each(product?.metaKeywords, function (keyword, index) {
    keywordList.push(translate(`${keyword}`));
  });
  metadata.keywords = keywordList.join(",");

  return (
    <Fragment>
      <h1>{translate(`furnitureDetail.${params.name}.name`)}</h1>
      {product && <span>{translate(`${product.content}`)}</span>}
    </Fragment>
  );
}
