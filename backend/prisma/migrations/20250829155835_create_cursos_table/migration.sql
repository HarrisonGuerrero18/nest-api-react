-- CreateTable
CREATE TABLE "cursos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha_inicio" DATETIME NOT NULL,
    "fecha_fin" DATETIME NOT NULL,
    "precio" DECIMAL NOT NULL,
    "marca_id" INTEGER NOT NULL
);
