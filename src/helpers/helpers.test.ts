import { expect } from 'vitest';
import { calculateErrorTimeout } from './calculate-error-timeout';
import { extractAllGenres } from './extract-distinct-genres';
import { filterFilms } from './filter-films';
import { getDateString } from './get-date-string';
import { getErrorMessage } from './get-error-message';
import { getShortActorsList } from './get-short-actors-list';
import { convertTimeToPlayerFormat } from './time-converter';

const filmsList = [
  {
    id: '1',
    name: 'name1',
    genre: 'genre1',
    previewVideoLink: 'image1',
    previewImage: 'image2',
  },
  {
    id: '2',
    name: 'name2',
    genre: 'genre2',
    previewVideoLink: 'image3',
    previewImage: 'image4',
  },
  {
    id: '3',
    name: 'name3',
    genre: 'genre1',
    previewVideoLink: 'image5',
    previewImage: 'image6',
  },
];

describe('Module: calculate-error-timeout', () => {
  it('should be zero on null', () => {
    expect(calculateErrorTimeout(null)).toEqual(0);
  });
  it('should be zero on empty string', () => {
    expect(calculateErrorTimeout('')).toEqual(0);
  });
  it('should calculate time correct', () => {
    expect(calculateErrorTimeout('a')).toEqual(2000);
    expect(calculateErrorTimeout('a'.repeat(36))).toEqual(4000);
  });
});

describe('Module: extract-distinct-genres', () => {
  it('All genres should be in list', () => {
    expect(extractAllGenres([])).toEqual(['All genres']);
  });
  it('All genres should be in list', () => {
    expect(extractAllGenres(filmsList)).toContain('All genres');
    expect(extractAllGenres(filmsList)).toContain('genre1');
    expect(extractAllGenres(filmsList)).toContain('genre2');
  });
});

describe('Module: filter-films', () => {
  it('should contain all films on ALL_GENRES', () => {
    expect(filterFilms(filmsList, 'All genres')).toEqual(filmsList);
  });
  it('should filter wrong genres', () => {
    expect(filterFilms(filmsList, 'genre1')).toEqual([
      filmsList[0],
      filmsList[2],
    ]);
    expect(filterFilms(filmsList, 'genre2')).toEqual([filmsList[1]]);
  });
});

describe('Module: get-date-string', () => {
  it('should parse date correct', () => {
    expect(getDateString('2024-01-02T02:03:04.000000Z')).toEqual(
      'January 2, 2024',
    );
  });
});

describe('Module: get-error-message', () => {
  it('should return null on common error', () => {
    const commonError = {
      errorType: 'COMMON_ERROR',
      message: 'message',
      details: [
        {
          property: 'property',
          value: 'value',
          messages: ['message1', 'message2'],
        },
      ],
    };
    expect(getErrorMessage(commonError)).toEqual(null);
  });

  it('should join errors details', () => {
    const notCommonError = {
      errorType: 'ERROR',
      message: 'message',
      details: [
        {
          property: 'property',
          value: 'value',
          messages: ['message1', 'message2'],
        },
        {
          property: 'property',
          value: 'value',
          messages: ['message3', 'message4'],
        },
      ],
    };
    expect(getErrorMessage(notCommonError)).toEqual(
      'message1, message2, message3, message4',
    );
  });

  it('should get main message on empty details', () => {
    const notCommonError = {
      errorType: 'ERROR',
      message: 'message',
      details: [
        {
          property: 'property',
          value: 'value',
          messages: [],
        },
      ],
    };
    expect(getErrorMessage(notCommonError)).toEqual('message');
  });
});

describe('Module: get-short-actors-list', () => {
  it('should be correct on short list', () => {
    expect(getShortActorsList(['actor1', 'actor2'])).toEqual('actor1, actor2');
  });
  it('should be correct on long list', () => {
    const actors = ['actor1', 'actor2', 'actor3', 'actor4', 'actor5', 'actor6'];
    expect(getShortActorsList(actors)).toEqual(
      'actor1, actor2, actor3, actor4 and other',
    );
  });
});

describe('Module: time-converter', () => {
  it('convertTimeToPlayerFormat should be correct on zero time', () => {
    expect(convertTimeToPlayerFormat(0)).toEqual('-00:00');
  });
  it('convertTimeToPlayerFormat should render leading zeroes', () => {
    expect(convertTimeToPlayerFormat(5 * 60 + 6)).toEqual('-05:06');
  });
  it('convertTimeToPlayerFormat should be on time less than an hour', () => {
    expect(convertTimeToPlayerFormat(56 * 60 + 35)).toEqual('-56:35');
  });
  it('convertTimeToPlayerFormat should be on time more than an hour', () => {
    expect(convertTimeToPlayerFormat(2 * 60 * 60 + 43 * 60 + 21)).toEqual(
      '-02:43:21',
    );
  });
});
