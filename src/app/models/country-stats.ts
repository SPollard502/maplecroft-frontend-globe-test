enum EStatType {
  Feature = 'Feature',
}

enum EGeoType {
  Polygon = 'Polygon',
  MultiPolygon = 'MultiPolygon',
}

type CountryCode = '-99' | -99 | null | undefined | string;

export interface ICountryStats {
  type: EStatType;
  features: ICountryFeature[];
}

export interface ICountryFeature {
  geometry: ICountryGeometry;
  properties: ICountryProperties;
}

export interface ICountryGeometry {
  coordinates: [number, number][][]; // Top Array is for seperate polygons, lower array is list of vertices
  type: EGeoType;
}

export interface ICountryProperties {
  ABBREV: string;
  ABBREV_LEN: number;
  ADM0_A3: CountryCode;
  ADM0_A3_IS: CountryCode;
  ADM0_A3_UN: CountryCode;
  ADM0_A3_US: CountryCode;
  ADM0_A3_WB: CountryCode;
  ADM0_DIF: number;
  ADMIN: string;
  BRK_A3: CountryCode;
  BRK_DIFF: number;
  BRK_GROUP: null;
  BRK_NAME: string;
  CONTINENT: string;
  ECONOMY: string;
  FIPS_10_: CountryCode;
  FORMAL_EN: string;
  FORMAL_FR: null;
  GDP_MD_EST: number;
  GDP_YEAR: number;
  GEOUNIT: string;
  GEOU_DIF: number;
  GU_A3: CountryCode;
  HOMEPART: number;
  INCOME_GRP: string;
  ISO_A2: CountryCode;
  ISO_A3: CountryCode;
  ISO_A3_EH: CountryCode;
  ISO_N3: CountryCode;
  LABELRANK: number;
  LASTCENSUS: number | '-99' | -99;
  LEVEL: number;
  LONG_LEN: number;
  MAPCOLOR13: number;
  MAPCOLOR7: number;
  MAPCOLOR8: number;
  MAPCOLOR9: number;
  MAX_LABEL: number;
  MIN_LABEL: number;
  MIN_ZOOM: number;
  NAME: string;
  NAME_ALT?: string;
  NAME_CIAWF: string;
  NAME_LEN: number;
  NAME_LONG: string;
  NAME_SORT: string;
  POP_EST: number;
  POP_RANK: number;
  POP_YEAR: number;
  POSTAL: string;
  REGION_UN: string;
  REGION_WB: string;
  SOVEREIGNT: string;
  SOV_A3: string;
  SUBREGION: string;
  SUBUNIT: string;
  SU_A3: string;
  SU_DIF: number;
  TINY: number;
  TYPE: string;
  UN_A3: CountryCode;
  WB_A2: CountryCode;
  WB_A3: CountryCode;
  WIKIPEDIA: number;
  WOE_ID: number;
  WOE_ID_EH: number;
  WOE_NOTE: string;
  featurecla: string;
  scalerank: number;
}
