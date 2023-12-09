export const ApiPath = {
  Films: '/films',
  Login: '/login',
  Logout: '/logout',
  Promo: '/promo',
  Film: (id?: string) => `/films/${id || ''}`,
  SimilarFilms: (id?: string) => `/films/${id || ''}/similar`,
  Comments: (id?: string) => `/comments/${id || ''}`,
};
