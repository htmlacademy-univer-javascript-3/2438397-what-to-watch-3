export const ApiPath = {
  Films: '/films',
  Login: '/login',
  Logout: '/logout',
  Promo: '/promo',
  FavouriteItems: '/favorite',
  Film: (id?: string) => `/films/${id || ''}`,
  SimilarFilms: (id?: string) => `/films/${id || ''}/similar`,
  Comments: (id?: string) => `/comments/${id || ''}`,
  SetFavourite: (id?: string, status?: number) => `favorite/${id || ''}/${status || 0}`,
};
