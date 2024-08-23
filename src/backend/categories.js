import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "nonfiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "horror",
    description:
      "Horror books are spine-chilling narratives that evoke fear and suspense through unsettling themes and eerie atmospheres.",
  },
];
