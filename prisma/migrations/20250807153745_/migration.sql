/*
  Warnings:

  - You are about to drop the column `barcode` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `brandId` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `madeInId` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `specialNeedsId` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the `Brand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Feature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FoodFeature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MadeIn` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SpecialNeeds` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Food` DROP FOREIGN KEY `Food_brandId_fkey`;

-- DropForeignKey
ALTER TABLE `Food` DROP FOREIGN KEY `Food_madeInId_fkey`;

-- DropForeignKey
ALTER TABLE `Food` DROP FOREIGN KEY `Food_specialNeedsId_fkey`;

-- DropForeignKey
ALTER TABLE `FoodFeature` DROP FOREIGN KEY `FoodFeature_featureId_fkey`;

-- DropForeignKey
ALTER TABLE `FoodFeature` DROP FOREIGN KEY `FoodFeature_foodId_fkey`;

-- AlterTable
ALTER TABLE `Food` DROP COLUMN `barcode`,
    DROP COLUMN `brandId`,
    DROP COLUMN `madeInId`,
    DROP COLUMN `specialNeedsId`;

-- DropTable
DROP TABLE `Brand`;

-- DropTable
DROP TABLE `Feature`;

-- DropTable
DROP TABLE `FoodFeature`;

-- DropTable
DROP TABLE `MadeIn`;

-- DropTable
DROP TABLE `SpecialNeeds`;
