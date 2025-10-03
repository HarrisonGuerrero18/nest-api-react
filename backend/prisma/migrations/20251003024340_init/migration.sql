-- CreateTable
CREATE TABLE "Usuario" (
    "usuario_id" TEXT NOT NULL PRIMARY KEY,
    "correo_institucional" TEXT,
    "username" TEXT,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "tipo_documento" TEXT NOT NULL,
    "numero_documento" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "estado_cuenta" TEXT NOT NULL DEFAULT 'activo',
    "fecha_creacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ultimo_acceso" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "perfil_url" TEXT,
    "portada_url" TEXT,
    "telefono" TEXT,
    "descripcion" TEXT
);

-- CreateTable
CREATE TABLE "AdministradorSistema" (
    "administrador_id" TEXT NOT NULL PRIMARY KEY,
    CONSTRAINT "AdministradorSistema_administrador_id_fkey" FOREIGN KEY ("administrador_id") REFERENCES "Usuario" ("usuario_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Docente" (
    "docente_id" TEXT NOT NULL PRIMARY KEY,
    "area_conocimiento" TEXT NOT NULL,
    "fecha_vinculacion" DATETIME NOT NULL,
    "tipo_vinculacion" TEXT NOT NULL DEFAULT 'planta',
    "titulo_academico" TEXT,
    "horas_semanales" INTEGER,
    CONSTRAINT "Docente_docente_id_fkey" FOREIGN KEY ("docente_id") REFERENCES "Usuario" ("usuario_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Institucion" (
    "institucion_id" TEXT NOT NULL PRIMARY KEY,
    "administrador_id_creador" TEXT,
    "nombre" TEXT NOT NULL,
    "sigla" TEXT,
    "lema" TEXT,
    "tipo_institucion" TEXT NOT NULL,
    "usa_programas" BOOLEAN NOT NULL,
    "nivel_educativo" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "direccion" TEXT,
    "ciudad" TEXT,
    "pais" TEXT NOT NULL,
    "correo_institucional" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "nit" TEXT,
    "estado" TEXT NOT NULL DEFAULT 'pendiente',
    "fecha_creacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_activacion" DATETIME,
    CONSTRAINT "Institucion_administrador_id_creador_fkey" FOREIGN KEY ("administrador_id_creador") REFERENCES "AdministradorSistema" ("administrador_id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Coordinador" (
    "coordinador_id" TEXT NOT NULL PRIMARY KEY,
    "horario_atencion" TEXT,
    "fecha_inicio_carrera" DATETIME NOT NULL,
    CONSTRAINT "Coordinador_coordinador_id_fkey" FOREIGN KEY ("coordinador_id") REFERENCES "Usuario" ("usuario_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Programa" (
    "programa_id" TEXT NOT NULL PRIMARY KEY,
    "institucion_id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "nivel" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    CONSTRAINT "Programa_institucion_id_fkey" FOREIGN KEY ("institucion_id") REFERENCES "Institucion" ("institucion_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estudiante" (
    "estudiante_id" TEXT NOT NULL PRIMARY KEY,
    "programa_id" TEXT,
    "fecha_ingreso" DATETIME NOT NULL,
    "creditos_aprobados" INTEGER,
    "etapa_formativa" TEXT NOT NULL DEFAULT 'i',
    "promedio_acumulado" DECIMAL,
    CONSTRAINT "Estudiante_estudiante_id_fkey" FOREIGN KEY ("estudiante_id") REFERENCES "Usuario" ("usuario_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Estudiante_programa_id_fkey" FOREIGN KEY ("programa_id") REFERENCES "Programa" ("programa_id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_institucional_key" ON "Usuario"("correo_institucional");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_telefono_key" ON "Usuario"("telefono");

-- CreateIndex
CREATE UNIQUE INDEX "Institucion_nombre_key" ON "Institucion"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Institucion_sigla_key" ON "Institucion"("sigla");

-- CreateIndex
CREATE UNIQUE INDEX "Institucion_correo_institucional_key" ON "Institucion"("correo_institucional");

-- CreateIndex
CREATE UNIQUE INDEX "Institucion_nit_key" ON "Institucion"("nit");

-- CreateIndex
CREATE UNIQUE INDEX "Programa_institucion_id_nombre_key" ON "Programa"("institucion_id", "nombre");
