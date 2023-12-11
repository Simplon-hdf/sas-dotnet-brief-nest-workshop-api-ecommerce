-- CreateTable
CREATE TABLE "Products" (
    "UUID" CHAR(36) NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "price" MONEY NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_uuid" PRIMARY KEY ("UUID")
);

-- CreateTable
CREATE TABLE "Users" (
    "UUID" VARCHAR(36) NOT NULL,
    "user_pseudo" VARCHAR(20) NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "user_password" VARCHAR(72) NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_uuid" PRIMARY KEY ("UUID")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "user_UUID" TEXT NOT NULL,
    "product_quantity" INTEGER NOT NULL,
    "total_price" MONEY NOT NULL,
    "order_date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shipping_date" DATE NOT NULL,

    CONSTRAINT "orders_id" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_UUID_key" ON "Products"("UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Users_UUID_key" ON "Users"("UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_id_key" ON "Orders"("id");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_user_UUID_fkey" FOREIGN KEY ("user_UUID") REFERENCES "Users"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;
