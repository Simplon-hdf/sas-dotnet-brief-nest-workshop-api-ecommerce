-- CreateTable
CREATE TABLE "OrdersProducts" (
    "order_id" INTEGER NOT NULL,
    "product_UUID" TEXT NOT NULL,

    CONSTRAINT "OrdersProducts_pkey" PRIMARY KEY ("order_id","product_UUID")
);

-- AddForeignKey
ALTER TABLE "OrdersProducts" ADD CONSTRAINT "OrdersProducts_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdersProducts" ADD CONSTRAINT "OrdersProducts_product_UUID_fkey" FOREIGN KEY ("product_UUID") REFERENCES "Products"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;
