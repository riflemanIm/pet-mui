-- CreateTable
CREATE TABLE `user_confirm_code` (
    `user_id` INTEGER NOT NULL,
    `code` INTEGER NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `try_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`user_id`, `try_date`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_confirm_code` ADD CONSTRAINT `user_confirm_code_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
