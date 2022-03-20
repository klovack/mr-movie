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

export const GenreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
  10759: "Action & Adventure",
  10762: "Kids",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10767: "Talk",
  10768: "War & Politics",
};
