export interface DiscoverResponse {
  page: number;
  results: TVResult[] | MovieResult[];
  total_results: number;
  total_pages: number;
}

export interface Result {
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  original_language: string;
  genre_ids: Array<number>;
  id: number;
  popularity: number;
  overview: string;
}

export interface TVResult extends Result {
  first_air_date: string;
  origin_country: Array<string>;
  name: string;
  original_name: string;
}

export interface MovieResult extends Result {
  adult: boolean;
  release_date: string;
  title: string;
  original_title: string;
  video: boolean;
}

export const isTVResult = (val: MovieResult | TVResult) => {
  return (val as MovieResult).title === undefined;
};

export const isListTVResult = (val: MovieResult[] | TVResult[]) => {
  if (val.length === 0) return true;
  return isTVResult(val[0]);
};

export const getMovieOrTVName = (
  result: TVResult | MovieResult,
  isTV: boolean = isTVResult(result)
) => {
  return isTV ? (result as TVResult).name : (result as MovieResult).title;
};
