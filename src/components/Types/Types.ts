export interface TypFuse {
  'ID(a:40)': number;
  'chartype(i)': string;
  'frq(r)': string;
  'irat(r)': string;
  'itype(i)': string;
  'loc_name(a:40)': string;
  'urat(r)': string;
  handler?: string;
}

export interface TypLne {
  'ID(a:40)': number;
  handler?: string;
}

export interface TypesResponse {
  [key: string]: {
    [key: string]: TypFuse | TypLne;
  };
}

export type TypesListU =
  | TypFuse
  | TypLne

export interface ParentTypesList {
  id: string;
  name: string;
}
