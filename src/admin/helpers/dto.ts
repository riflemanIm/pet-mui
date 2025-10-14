export type { Role, TokenData, UserDto, ListDto, DictDto, OrderDirection, LoginRequestDto, HealthDto } from 'types';

export interface TokenResponseDto {
  authToken: string;
}

export interface RefreshTokenDto extends TokenResponseDto {
  refreshToken: string;
}

export interface LoginResponseDto extends RefreshTokenDto {}
