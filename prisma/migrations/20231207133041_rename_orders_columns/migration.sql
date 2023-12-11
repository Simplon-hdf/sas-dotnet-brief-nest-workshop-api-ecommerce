/*
  Warnings:

  - You are about to drop the column `order_date` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `product_quantity` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `shipping_date` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `total_price` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `deliver_at` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_total_cost_ht` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_total_quantity` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "order_date",
DROP COLUMN "product_quantity",
DROP COLUMN "shipping_date",
DROP COLUMN "total_price",
ADD COLUMN     "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deliver_at" DATE NOT NULL,
ADD COLUMN     "order_total_cost_ht" MONEY NOT NULL,
ADD COLUMN     "order_total_quantity" INTEGER NOT NULL;
