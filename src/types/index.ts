export type FoodType = "Treat" | "Souvenirs";

export type Dict = {
  id: string;
  name: string;
};

export interface FoodDicts {
  foodTypes: FoodType[];
  ages: Dict[];
  taste: Dict[];
  designedFor: Dict[];
  ingridient: Dict[];
  hardness: Dict[];
  packages: Dict[];
  petSizes: Dict[];
  specialNeeds: Dict[];
}

export interface FoodImgAddProp {
  img: string;
}
export interface FoodProps {
  id: string;
  artikul: string;
  title: string;
  type: string;
  img: string;
  anatation: string;
  createdAt: string;
  priceDiscount: number;
  price: string;
  foodImgAdd: FoodImgAddProp[];
  quantity: number;
  //  ages: { age: Dict }[];
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
export interface CurrentUserProps {
  id?: string;
  name?: number;
  email: string;
}
export interface SignUpProps {
  response: "EMAIL_EXISTS" | "CODE_SENT" | "SUCCESS";
  code?: number;
  id?: number;
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
