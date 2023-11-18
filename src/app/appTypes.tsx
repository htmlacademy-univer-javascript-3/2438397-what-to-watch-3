export const AppRoute = {
  Root: '/',
  SingIn: '/login',
  MyList: '/mylist',
  Film: (filmId?: number) => `/films/${filmId || ':id'}`,
  Player: (videoId?: number) => `/player/${videoId || ':id'}`,
  AddReview: (filmId?: number) => `/films/${filmId || ':id'}/review`,
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
