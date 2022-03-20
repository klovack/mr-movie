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

export const Genres = {
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

export enum Genre {
  ADVENTURE = 12,
  FANTASY = 14,
  ANIMATION = 16,
  DRAMA = 18,
  HORROR = 27,
  ACTION = 28,
  COMEDY = 35,
  HISTORY = 36,
  WESTERN = 37,
  THRILLER = 53,
  CRIME = 80,
  DOCUMENTARY = 99,
  SCIENCE_FICTION = 878,
  MYSTERY = 9648,
  MUSIC = 10402,
  ROMANCE = 10749,
  FAMILY = 10751,
  WAR = 10752,
  ACTION_AND_ADVENTURE = 10759,
  KIDS = 10762,
  NEWS = 10763,
  REALITY = 10764,
  SCIFI_AND_FANTASY = 10765,
  SOAP = 10766,
  TALK = 10767,
  WAR_AND_POLITICS = 10768,
  TV_MOVIE = 10770,
}

export const Networks = {
  1024: "Amazon",
  213: "Netflix",
  2739: "Disney+",
  2552: "Apple TV+",
};

export const NetworkUrls = {
  1024: "https://www.primevideo.com/",
  213: "https://www.netflix.com/",
  2739: "https://www.disneyplus.com",
  2552: "https://tv.apple.com/",
};

export enum Network {
  AMAZON = 1024,
  NETFLIX = 213,
  DISNEY_PLUS = 2739,
  APPLE_TV = 2552,
}
