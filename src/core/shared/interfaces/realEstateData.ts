export interface IImage {
  id: number;
  created_at: string;
  updated_at: string;
  s3Path: string;
  fileName: string;
  size: number;
  mimeType: string;
  type: string;
}

interface ICategory {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface IRealEstate {
  head: string;
  id: number;
  slug: string;
}

export declare interface RealEstateData {
  id: number;
  created_at: string;
  updated_at: string;
  head: string;
  body: string;
  tags: [];
  category: ICategory;
  image: IImage;
}

export declare interface RealEstateApiResponseBody {
  API_URL?: string;
  CLIENT_URL?: string;
  realEstate: RealEstateData;
}
