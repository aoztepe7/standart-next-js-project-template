import { Furniture } from "@/app/models/Furniture";

export const FurnitureData = (): Array<Furniture> => [
  {
    id: "first-furniture",
    name: "furnitureDetail.first-furniture.name",
    metaTitle: "furnitureDetail.first-furniture.metaTitle",
    metaDescription: "furnitureDetail.first-furniture.metaDescription",
    metaKeywords: [
      "furnitureDetail.first-furniture.metaKeyword-1",
      "furnitureDetail.first-furniture.metaKeyword-2",
    ],
    images: ["../images/test5.webp", "../images/test6.webp"],
    content: "furnitureDetail.first-furniture.content",
    directUrl: "furnitureDetail.first-furniture.directUrl",
  },
  {
    id: "second-furniture",
    name: "furnitureDetail.second-furniture.name",
    metaTitle: "furnitureDetail.second-furniture.metaTitle",
    metaDescription: "furnitureDetail.second-furniture.metaDescription",
    metaKeywords: [
      "furnitureDetail.second-furniture.metaKeyword-1",
      "furnitureDetail.second-furniture.metaKeyword-2",
    ],
    images: ["../images/test6.webp", "../images/test7.webp"],
    content: "furnitureDetail.second-furniture.content",
    directUrl: "furnitureDetail.second-furniture.directUrl",
  },
];
