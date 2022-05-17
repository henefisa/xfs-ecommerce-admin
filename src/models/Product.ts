import { Base } from "./Base";

export interface Product {
  name: string;
  stock: string;
  price: number;
  description: string;
  details: string;
  images: ProductImage[];
  categories: ProductCategory[];
}

export interface ProductImage {
  url: string;
}

export interface ProductCategory {
  name: string;
}

export interface ProductImageResponse extends ProductImage, Base {}
export interface ProductCategoryResponse extends ProductCategory, Base {}
export interface ProductResponse extends Product, Base {
  images: ProductImageResponse[];
  categories: ProductCategoryResponse[];
}
