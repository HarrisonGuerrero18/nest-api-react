/*
  Warnings:

  - You are about to drop the column `fecha_fin` on the `cursos` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_inicio` on the `cursos` table. All the data in the column will be lost.
  - You are about to drop the column `marca_id` on the `cursos` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cursos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" DECIMAL NOT NULL
);
INSERT INTO "new_cursos" ("descripcion", "id", "nombre", "precio") SELECT "descripcion", "id", "nombre", "precio" FROM "cursos";
DROP TABLE "cursos";
ALTER TABLE "new_cursos" RENAME TO "cursos";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
