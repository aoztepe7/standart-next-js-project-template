import { House } from "@/app/models/House";

export const HouseData = (): Array<House> => [
  {
    id: "first-house",
    name: "First House",
    metaTitle: "Fist House Meta Title",
    metaDescription: "First House Meta Description",
    metaKeywords: ["First House", "Wood House"],
    images: ["../images/test.webp", "../images/test2.webp"],
    content: "First House Content",
    directUrl: "/evler/first-house",
  },
  {
    id: "second-house",
    name: "Second House",
    metaTitle: "Second House Meta Title",
    metaDescription: "Second House Meta Description",
    metaKeywords: ["Second House", "Wood House"],
    images: ["../images/test3.webp", "../images/test4.webp"],
    content: "Second House Content",
    directUrl: "/evler/second-house",
  },
];
