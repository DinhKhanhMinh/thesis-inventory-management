import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const search = req.query.search?.toString();
    const products = await prisma.products.findMany({
      where: search
        ? {
            name: {
              contains: search,
              mode: "insensitive", 
            },
          }
        : {},
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Product retrieval error" });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { productId, name, price, rating, stockQuantity } = req.body;
    const product = await prisma.products.create({
      data: {
        productId,
        name,
        price,
        rating,
        stockQuantity,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Product creation error" });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    await prisma.products.delete({
      where: { productId: id },
    });

    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ message: "Product deletion error" });
  }
};
