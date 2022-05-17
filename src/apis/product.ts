import { AxiosResponse } from "axios";
import { instance } from ".";
import {
  Product,
  ProductCategory,
  ProductCategoryResponse,
  ProductResponse,
} from "../models/Product";

export const getProducts = (): Promise<AxiosResponse<ProductResponse[]>> => {
  return instance.get("/product");
};

export const getProductById = (
  id: string
): Promise<AxiosResponse<ProductResponse>> => {
  return instance.get(`/product/${id}`);
};

export const createProduct = (
  product: Product
): Promise<AxiosResponse<ProductResponse>> => {
  return instance.post("/product/create", product);
};

export const getCategory = (): Promise<
  AxiosResponse<ProductCategoryResponse[]>
> => {
  return instance.get("/category");
};

export const getCategoryById = (
  id: string
): Promise<AxiosResponse<ProductCategoryResponse>> => {
  return instance.get(`/category/${id}`);
};

export const createCategory = (
  category: ProductCategory
): Promise<AxiosResponse<ProductCategoryResponse>> => {
  return instance.post("/category/create", category);
};
