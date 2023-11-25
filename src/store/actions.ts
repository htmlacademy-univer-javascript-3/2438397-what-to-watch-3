import { createAction } from '@reduxjs/toolkit';
import {ActionType} from '../types/actionType';
import {ShortFilmInfo} from '../types/film';

export const SetGenre = createAction<string>(ActionType.SetGenre);

export const SetFilms = createAction<ShortFilmInfo[]>(ActionType.setFilms);
