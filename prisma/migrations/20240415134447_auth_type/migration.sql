/*
  Warnings:

  - The primary key for the `user_confirm_code` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `user_confirm_code` DROP PRIMARY KEY,
    MODIFY `try_date` DATETIME(3) NULL,
    ADD PRIMARY KEY (`user_id`, `created_at`);

-- AlterTable
ALTER TABLE `users` ADD COLUMN `authType` ENUM('ConfirmCode', 'Password') NULL,
    MODIFY `name` VARCHAR(256) NULL,
    MODIFY `password` VARCHAR(256) NULL;
