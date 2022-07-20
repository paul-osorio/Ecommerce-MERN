import * as Yup from "yup";
import { convertFromRaw } from "draft-js";

export const BasicValidation = Yup.object().shape({
  images: Yup.array()
    .required("Images are required")
    .min(1, "Please upload at least one image")
    .max(8, "You can only upload 8 images"),
  productName: Yup.string()
    .required("Product name is required")
    .min(15, "Product name must be at least 15 characters long")
    .max(100, "Product name must be less than 100 characters"),
  productCategory: Yup.array()
    .required("Product category is required")
    .min(1, "Please select atleast one category"),
});

export const PriceStockValidation = Yup.object().shape({
  price: Yup.number()
    .required("Price is required")
    .min(5, "Price must be at least 5")
    .max(1000000, "Price must be less than 1000000"),
  stock: Yup.number()
    .required("Stock is required")
    .min(1, "Stock must be at least 1")
    .max(1000, "Stock must be less than 1000"),
  shipping: Yup.object().shape({
    weight: Yup.number()
      .required("Weight is required")
      .min(1, "Weight must be at least 1")
      .max(1000, "Weight must be less than 1000"),
    length: Yup.number()
      .required("Length is required")
      .min(1, "Length must be at least 1")
      .max(1000, "Length must be less than 1000"),
    width: Yup.number()
      .required("Width is required")
      .min(1, "Width must be at least 1")
      .max(1000, "Width must be less than 1000"),
    height: Yup.number()
      .required("Height is required")
      .min(1, "Height must be at least 1")
      .max(1000, "Height must be less than 1000"),
    fee: Yup.number()
      .required("Shipping fee is required")
      .min(5, "Shipping fee must be at least 5")
      .max(1000000, "Shipping fee must be less than 1000000"),
  }),
});
