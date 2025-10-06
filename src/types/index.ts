// ===== File: lib/api/food.ts (client) =====
// Types and client aligned with Prisma schema
import axios from "axios";

export type FoodType = "Treat" | "Souvenirs" | "DryFood";

export type Dict = {
  id: number;
  name: string;
};

export interface FoodDicts {
  foodTypes: FoodType[];
  ages: Dict[];
  taste: Dict[];
  designedFor: Dict[];
  ingredient: Dict[];
  hardness: Dict[];
  packages: Dict[];
  petSizes: Dict[];
  specialNeeds: Dict[];
}

export interface FoodImgAddProp {
  img: string;
}

export interface FoodProps {
  id: number;
  artikul?: string;
  title?: string;
  type: FoodType;
  img?: string;
  imgUrl?: string;
  imgs?: string;
  imgsAdd: FoodImgAddProp[];
  feature?: string;
  price: number;
  priceDiscount: number;
  vat: boolean;
  isPromo: boolean;
  stock: number;
  averageRating?: number;
  ratings?: number;
}

export interface ShoppingCartItemProps extends FoodProps {
  quantityInCart: number;
}

export type FoodDetailProps = Omit<FoodProps, "averageRating" | "ratings">;

export interface FoodRatingsProps {
  foodId: number;
  userId: number;
  score: number;
  ratedAt: string;
  user: {
    id: number;
    name?: string;
  };
}

export interface CurrentUserProps {
  id: number;
  name?: string;
  email: string;
  balance: number;
  token?: string;
}

// Query parameters supported by the API
export type FoodQuery = {
  page?: number;
  pageSize?: number;
  q?: string;
  sort?: "price" | "publishedAt";
  order?: "asc" | "desc";
  minPrice?: number;
  maxPrice?: number;
  isPromo?: boolean;
  vat?: boolean;
  tasteId?: number;
  ingredientId?: number;
  hardnessId?: number;
  designedForIds?: string;
  ageIds?: string;
  typeTreatIds?: string;
  petSizeIds?: string;
  packageIds?: string;
  specialNeedsIds?: string;
};

export type FoodListResponse = {
  page: number;
  pageSize: number;
  total: number;
  items: FoodProps[];
};

export async function fetchFoods(params: FoodQuery): Promise<FoodListResponse> {
  const qp: Record<string, string> = {};
  const put = (k: string, v: any) => {
    if (v !== undefined && v !== null && String(v) !== "") qp[k] = String(v);
  };

  Object.entries(params).forEach(([k, v]) => put(k, v));

  const query = new URLSearchParams(qp).toString();
  const url = `${process.env.NEXT_PUBLIC_API_URL}/food${
    query ? `?${query}` : ""
  }`;
  const { data } = await axios.get<FoodListResponse>(url);
  return data;
}

// ===== File: types/food.ts =====
// Types aligned to Prisma schema. Removed/renamed fields to match DB.

// In schema there is no enum FoodType; "types" are stored in the TypeTreat table (M:N with Food).
// Поэтому FoodType удалён, а словарь foodTypes -> Dict[]

export type Id = number;

export type Dict = {
  id: Id;
  name: string;
};

export interface FoodDicts {
  foodTypes: Dict[]; // from TypeTreat
  ages: Dict[]; // from Age
  taste: Dict[]; // from Taste
  designedFor: Dict[]; // from DesignedFor
  ingredient: Dict[]; // from ingredient (table name in schema is lowercase)
  hardness: Dict[]; // from Hardness
  packages: Dict[]; // from Package
  petSizes: Dict[]; // from PetSize
  specialNeeds: Dict[]; // from SpecialNeeds
}

export interface FoodImgAddProp {
  img: string; // maps to FoodImgAdd.img
}

export interface FoodProps {
  id: Id;
  artikul: string | null;
  title: string | null;
  img: string | null; // main image if present (Food.img or imgUrl)
  annotation: string | null; // schema field is `annotation`
  publishedAt?: string | null; // ISO date if present in schema
  priceDiscount: number;
  price: number;
  imgsAdd: FoodImgAddProp[]; // relation Food.imgsAdd -> [{ img }]
}

export type FoodDetailProps = FoodProps & {
  // one-to-many (optional single refs)
  taste?: Dict | null;
  ingredient?: Dict | null;
  hardness?: Dict | null;
  // many-to-many relations expanded with their dict rows
  designed: { designedFor: Dict }[];
  ages: { age: Dict }[];
  typeTreat: { typeTreat: Dict }[];
  petSizes: { petSize: Dict }[];
  foodPackage: { package: Dict }[];
  specialNeeds: { specialNeeds: Dict }[];
};

export interface FoodRatingsProps {
  foodId: Id;
  userId: Id;
  score: number;
  ratedAt: string; // ISO
  user: {
    id: Id;
    name?: string;
  };
}

export interface CurrentUserProps {
  id: Id;
  email: string;
  nickname: string;
  balance: number;
  token?: string;
}

export interface SignUpProps {
  response: "EMAIL_EXISTS" | "CODE_SENT" | "SUCCESS";
  code?: number;
}

export interface ConfirmCodeProps {
  code: string;
  uuid: string;
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

export const SORT_VALUE = ["publishedAt", "price"] as const;

export interface SendEmailProps {
  name: string;
  email: string;
  message: string;
}
