/*
  Warnings:

  - The primary key for the `user_confirm_code` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `user_confirm_code` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`user_id`);
