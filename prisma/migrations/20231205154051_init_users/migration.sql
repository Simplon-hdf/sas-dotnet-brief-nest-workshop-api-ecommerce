-- CreateTable
CREATE TABLE "Products" (
    "UUID" CHAR(36) NOT NULL,
    "Name" VARCHAR(20) NOT NULL,
    "Description" VARCHAR(500) NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "Quantity" INTEGER NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_uuid" PRIMARY KEY ("UUID")
);

-- CreateIndex 
CREATE UNIQUE INDEX "Products_UUID_key" ON "Products"("UUID");
