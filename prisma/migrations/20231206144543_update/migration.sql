-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "CreatedAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "UpdatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "updated_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "created_at" SET DATA TYPE DATE;

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
