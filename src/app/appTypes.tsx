export enum AppRoute {
  Root = '/',
  SingIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Player = '/player/:id',
  AddReview = '/films/:id/review'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
