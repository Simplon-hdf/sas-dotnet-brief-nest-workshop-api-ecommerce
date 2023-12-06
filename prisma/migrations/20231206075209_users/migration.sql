-- CreateTable
CREATE TABLE "Users" (
    "UUID" VARCHAR(36) NOT NULL,
    "user_pseudo" VARCHAR(20) NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "user_password" VARCHAR(72) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_uuid" PRIMARY KEY ("UUID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_UUID_key" ON "Users"("UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_pseudo_key" ON "Users"("user_pseudo");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_password_key" ON "Users"("user_password");
