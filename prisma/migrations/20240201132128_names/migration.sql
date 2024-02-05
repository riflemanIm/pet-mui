/*
  Warnings:

  - You are about to drop the column `book_id` on the `orders` table. All the data in the column will be lost.
  - The primary key for the `ratings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `book_id` on the `ratings` table. All the data in the column will be lost.
  - You are about to drop the `book_authors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `books` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[food_id,user_id]` on the table `ratings` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `food_id` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `food_id` to the `ratings` table without a default value. This is not possible if the table is not empty.
  - Made the column `balance` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `orders_book_id_idx` ON `orders`;

-- DropIndex
DROP INDEX `uniq_book_user_idx` ON `ratings`;

-- AlterTable
ALTER TABLE `orders` DROP COLUMN `book_id`,
    ADD COLUMN `food_id` BIGINT NOT NULL,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `ratings` DROP PRIMARY KEY,
    DROP COLUMN `book_id`,
    ADD COLUMN `food_id` BIGINT NOT NULL,
    ADD PRIMARY KEY (`food_id`, `user_id`);

-- AlterTable
ALTER TABLE `users` MODIFY `balance` DECIMAL(15, 2) NOT NULL DEFAULT 0.0;

-- DropTable
DROP TABLE `book_authors`;

-- DropTable
DROP TABLE `books`;

-- CreateTable
CREATE TABLE `food_authors` (
    `food_id` BIGINT NOT NULL,
    `author_id` BIGINT NOT NULL,

    PRIMARY KEY (`food_id`, `author_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `foods` (
    `id` BIGINT NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `type` ENUM('Magazine', 'Novel', 'Life', 'Arts', 'Comics', 'Education & Reference', 'Humanities & Social Sciences', 'Science & Technology', 'Kids', 'Sports') NOT NULL,
    `published_at` DATETIME(0) NOT NULL,
    `stock` INTEGER NOT NULL DEFAULT 0,
    `price` DECIMAL(15, 2) NOT NULL DEFAULT 0.0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `orders_food_id_idx` ON `orders`(`food_id`);

-- CreateIndex
CREATE UNIQUE INDEX `uniq_food_user_idx` ON `ratings`(`food_id`, `user_id`);
