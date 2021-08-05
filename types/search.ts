interface Prediction {
  text: string;
  value: string;
}

enum ResultType {
  Profile,
  Tribe,
  Square,
  Channel,
}

interface SearchResults {
  avatar: string;
  id: string;
  identifier: string;
  membersCount?: number;
  name: string;
  subscribersCount?: number;
  type: ResultType;
}

export interface MainSearch {
  predictions: Array<Prediction>;
  results: Array<SearchResults>;
}
