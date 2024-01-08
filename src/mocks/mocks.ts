import { Action } from 'redux';
import { datatype, name, internet, commerce, lorem } from 'faker';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Token } from '../services/token-services';
import { AuthData } from '../types/auth-data';
import { FilmComment } from '../types/film-comment';
import { FilmPromoInfo } from '../types/film';
import { FilmInfo } from '../types/film';
import { ShortFilmInfo } from '../types/film';
import { User } from '../types/user';
import { createApiClient } from '../services/services';
import { AppState } from '../types/action-type';

export type AppThunkDispatch = ThunkDispatch<
  AppState,
  ReturnType<typeof createApiClient>,
  Action
>;

export function extractActionsTypes(actions: Action<string>[]) {
  return actions.map(({ type }) => type);
}

export function createError(): string {
  return name.title();
}

export function createShortFilmInfo({
  genre,
}: { genre?: string } = {}): ShortFilmInfo {
  return {
    id: datatype.uuid(),
    name: name.title(),
    previewImage: internet.url(),
    previewVideoLink: internet.url(),
    genre: genre ?? name.title(),
  } as ShortFilmInfo;
}

export function createPromoFilm(): FilmPromoInfo {
  return {
    id: datatype.uuid(),
    name: name.title(),
    posterImage: internet.url(),
    backgroundImage: internet.url(),
    videoLink: internet.url(),
    genre: name.title(),
    alt: name.title(),
    released: datatype.number(),
    isFavorite: true,
  } as FilmPromoInfo;
}

export function createFilmDescription(): FilmInfo {
  return {
    id: datatype.uuid(),
    name: name.title(),
    genre: name.title(),
    released: datatype.number(),
    posterImage: internet.url(),
    backgroundImage: internet.url(),
    videoLink: internet.url(),
    backgroundColor: commerce.color(),
    description: lorem.words(10),
    rating: datatype.number(),
    scoresCount: datatype.number(),
    director: name.title(),
    starring: [name.title()],
    runTime: datatype.number(),
    isFavourite: true,
  } as FilmInfo;
}

export function createToken(): Token {
  return datatype.uuid();
}

export function createAuthData(): AuthData {
  return {
    email: internet.email(),
    password: internet.password(),
  } as AuthData;
}

export function createUser(): User {
  return {
    email: internet.email(),
    token: datatype.uuid(),
    name: name.title(),
    avatarUrl: internet.url(),
  } as User;
}

export function createComment(): FilmComment {
  return {
    id: datatype.uuid(),
    date: String(datatype.datetime()),
    user: name.title(),
    comment: lorem.words(10),
    rating: datatype.number(),
  } as FilmComment;
}
