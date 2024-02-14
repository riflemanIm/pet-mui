export type AgeType = {
  id: string;
  name: string;
};

export interface FoodProps {
  id: string;
  title: string;
  type: string;
  createdAt: string;
  priceDiscount: number;
  price: string;
  ages: { age: AgeType }[];
  averageRating: number;
  ratings: number;
}

export interface shoppingCartItemProps extends FoodProps {
  quantity: number;
}

export type FoodDetailProps = Omit<
  FoodProps,
  "ages" | "averageRating" | "ratings"
>;

export interface FoodRatingsProps {
  FoodId: string;
  userId: string;
  score: number;
  ratedAt: string;
  user: {
    id: string;
    nickname: string;
  };
}

export const starLabels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export const PAGE_SIZE = 6;

export const SORT_VALUE = ["published_at", "price"];
