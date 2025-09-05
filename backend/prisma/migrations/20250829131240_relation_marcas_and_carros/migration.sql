/*
  Warnings:

  - Added the required column `marca_id` to the `carros` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_carros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "modelo" TEXT NOT NULL,
    "fecha_fabricacion" DATETIME NOT NULL,
    "disponibilidad" BOOLEAN NOT NULL DEFAULT true,
    "precio" DECIMAL NOT NULL,
    "marca_id" INTEGER NOT NULL,
    CONSTRAINT "carros_marca_id_fkey" FOREIGN KEY ("marca_id") REFERENCES "marcas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_carros" ("disponibilidad", "fecha_fabricacion", "id", "modelo", "precio") SELECT "disponibilidad", "fecha_fabricacion", "id", "modelo", "precio" FROM "carros";
DROP TABLE "carros";
ALTER TABLE "new_carros" RENAME TO "carros";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
