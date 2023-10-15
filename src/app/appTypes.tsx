export const AppRoute = {
  Root: '/',
  SingIn: '/login',
  MyList: '/mylist',
  Film: (id: number) => `/films/${id}`,
  Player: (id: number) => `/player/${id}`,
  AddReview: (id: number) => `/films/${id}/review`,
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
