export const AppRoute = {
  Root: '/',
  SingIn: '/login',
  MyList: '/mylist',
  Film: (filmId?: string) => `/films/${filmId || ':id'}`,
  Player: (filmId?: string) => `/player/${filmId || ':id'}`,
  AddReview: (filmId?: string) => `/films/${filmId || ':id'}/review`,
};
