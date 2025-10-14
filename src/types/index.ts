// Shared application & admin types

export type Id = number;

export type FoodType = 'Treat' | 'Souvenirs' | 'DryFood';

export interface Dict {
  id: Id;
  name: string;
}

export interface FoodDicts {
  foodTypes: Dict[];
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
  id: Id;
  artikul?: string | null;
  title?: string | null;
  type: FoodType;
  img?: string | null;
  imgUrl?: string | null;
  feature?: string | null;
  price: number | string;
  priceDiscount?: number | string;
  vat?: boolean;
  isPromo?: boolean;
  stock: number;
  averageRating?: number | null;
  ratings?: number | null;
}

export interface FoodDetailProps extends FoodProps {
  annotation?: string | null;
  publishedAt?: string | null;
  createdAt?: string | null;
  foodImgAdd?: FoodImgAddProp[];
}

export interface FoodRatingsProps {
  foodId: Id;
  userId: Id;
  score: number;
  ratedAt: string;
  user: {
    id: Id;
    name?: string | null;
  };
}

export interface ShoppingCartItemProps extends FoodProps {
  quantityInCart: number;
}

export interface CurrentUserProps {
  id: Id;
  email: string;
  name?: string | null;
  balance: number;
  token?: string;
  role?: Role;
}

export const starLabels: Record<string, string> = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
};

export const PAGE_SIZE = 6;

export const SORT_VALUE = ['publishedAt', 'price'] as const;

export interface SendEmailProps {
  name: string;
  email: string;
  message: string;
}


export interface ConfirmCodeProps {
  code: string;
  uuid: string;
}

export interface SignUpProps {
  response: string;
  uuid?: string;
  user?: CurrentUserProps & { token?: string };
}
// ===== Admin & shared DTOs =====

export type UserRole = 'User' | 'Admin';
export type Role = UserRole;

export interface TokenData {
  id?: number;
  userId?: number;
  email?: string;
  name?: string | null;
  role?: UserRole;
  iat?: number;
  exp?: number;
}

export interface LoginRequestDto {
  login?: string;
  password?: string;
}

export interface UserDto {
  userId?: number;
  password?: string | null;
  email?: string;
  name: string | null;
  balance: string | number | null;
  role: Role;
}

export interface ListDto<T> {
  rows: T[];
  totalCount: number;
}

export interface DictDto {
  id?: number;
  name: string | null;
}

export type OrderDirection = 'asc' | 'desc' | null | undefined;

export interface HealthDto {
  version: string;
}
