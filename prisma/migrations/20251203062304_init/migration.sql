-- CreateTable
CREATE TABLE "ContentSection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "key" TEXT NOT NULL,
    "badge" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "panelTitle" TEXT,
    "panelDescription" TEXT,
    "icon" TEXT,
    "tags" JSONB,
    "expandedDetails" TEXT,
    "stats" JSONB,
    "factories" JSONB,
    "image" TEXT,
    "type" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ContentSection_key_key" ON "ContentSection"("key");

