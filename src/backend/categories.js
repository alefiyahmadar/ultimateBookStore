import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "fiction",
    image: "https://img.icons8.com/stamp/50/unicorn.png",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "nonfiction",
    image: "https://img.icons8.com/ios/50/document-1.png",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "horror",
    image: "https://img.icons8.com/ios-filled/50/scream.png",
    description:
      "Horror books are spine-chilling narratives that evoke fear and suspense through unsettling themes and eerie atmospheres.",
  },
];
