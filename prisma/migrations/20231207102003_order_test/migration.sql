/*
  Warnings:

  - You are about to drop the column `product_UUID` on the `orders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_product_UUID_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "product_UUID";
