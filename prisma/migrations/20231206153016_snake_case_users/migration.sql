/*
  Warnings:

  - You are about to drop the column `CreatedAt` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `Price` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `Quantity` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Products` table. All the data in the column will be lost.
  - Added the required column `description` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "CreatedAt",
DROP COLUMN "Description",
DROP COLUMN "Name",
DROP COLUMN "Price",
DROP COLUMN "Quantity",
DROP COLUMN "UpdatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" VARCHAR(500) NOT NULL,
ADD COLUMN     "name" VARCHAR(20) NOT NULL,
ADD COLUMN     "price" MONEY NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "created_at" SET DATA TYPE DATE;

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "user_UUID" TEXT NOT NULL,
    "product_UUID" TEXT NOT NULL,
    "product_quantity" INTEGER NOT NULL,
    "total_price" MONEY NOT NULL,
    "order_date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shipping_date" DATE NOT NULL,

    CONSTRAINT "orders_id" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Orders_id_key" ON "Orders"("id");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_user_UUID_fkey" FOREIGN KEY ("user_UUID") REFERENCES "Users"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_product_UUID_fkey" FOREIGN KEY ("product_UUID") REFERENCES "Products"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;
