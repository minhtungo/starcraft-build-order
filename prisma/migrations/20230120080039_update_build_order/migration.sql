-- AlterTable
ALTER TABLE "BuildOrder" ADD COLUMN     "authority" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "title" TEXT NOT NULL DEFAULT 'Unknown';
