/*
  Warnings:

  - You are about to alter the column `qtd_product` on the `ListMarket` table. The data in that column could be lost. The data in that column will be cast from `String` to `Decimal`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ListMarket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_name" TEXT NOT NULL,
    "qtd_product" DECIMAL NOT NULL
);
INSERT INTO "new_ListMarket" ("id", "product_name", "qtd_product") SELECT "id", "product_name", "qtd_product" FROM "ListMarket";
DROP TABLE "ListMarket";
ALTER TABLE "new_ListMarket" RENAME TO "ListMarket";
CREATE UNIQUE INDEX "ListMarket_product_name_key" ON "ListMarket"("product_name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
