/*
  Warnings:

  - The primary key for the `user_confirm_code` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[uuid]` on the table `user_confirm_code` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uuid` to the `user_confirm_code` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user_confirm_code` DROP PRIMARY KEY,
    ADD COLUMN `uuid` VARCHAR(100) NOT NULL,
    ADD PRIMARY KEY (`user_id`, `uuid`);

-- CreateIndex
CREATE UNIQUE INDEX `uuid` ON `user_confirm_code`(`uuid`);
