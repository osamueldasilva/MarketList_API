-- CreateTable
CREATE TABLE "ListMarket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_name" TEXT NOT NULL,
    "qtd_product" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ListMarket_product_name_key" ON "ListMarket"("product_name");
