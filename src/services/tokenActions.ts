const AUTH_TOKEN_KEY_NAME = 'guess-melody-token';

export type Token = string;

export function GetToken(): Token {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
}

export function SaveToken(token: Token): void {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
}

export function RemoveToken(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
}
