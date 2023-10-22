export const AppRoute = {
  Root: '/',
  SingIn: '/login',
  MyList: '/mylist',
  Film: (id?: number) => `/films/${id || ':id'}`,
  Player: (id?: number) => `/player/${id || ':id'}`,
  AddReview: (id?: number) => `/films/${id || ':id'}/review`,
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
