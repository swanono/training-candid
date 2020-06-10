export interface City {
  id: string;
  title: string;
}

export interface CitiesQuery {
  cities: {
    nodes: City[];
  };
}
