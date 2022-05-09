export interface List {
  name: string;
  game_indices: Game[];
}

export interface Game {
  game_index: number,
  version:{

  name: string;
  url: string;
  }
}
