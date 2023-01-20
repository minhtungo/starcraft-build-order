/*
  Warnings:

  - You are about to drop the column `authority` on the `BuildOrder` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BuildOrder" DROP COLUMN "authority",
ADD COLUMN     "author" TEXT;
