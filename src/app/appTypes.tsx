export const AppRoute = {
  Root: '/',
  SingIn: '/login',
  MyList: '/mylist',
  Film: (filmId?: number) => `/films/${filmId || ':id'}`,
  Player: (filmId?: number) => `/player/${filmId || ':id'}`,
  AddReview: (filmId?: number) => `/films/${filmId || ':id'}/review`,
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
