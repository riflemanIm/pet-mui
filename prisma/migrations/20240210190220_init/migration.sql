-- CreateTable
CREATE TABLE `foods` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `artikul` VARCHAR(12) NOT NULL,
    `title` VARCHAR(256) NOT NULL,
    `price` DECIMAL(15, 2) NOT NULL DEFAULT 0.0,
    `price_discount` DECIMAL(15, 2) NOT NULL DEFAULT 0.0,
    `vat` BOOLEAN NULL,
    `isPromo` BOOLEAN NULL,
    `ozon_id` VARCHAR(256) NULL,
    `barcode` VARCHAR(256) NOT NULL,
    `package_weight` INTEGER NOT NULL,
    `package_width` INTEGER NOT NULL,
    `package_height` INTEGER NOT NULL,
    `length_height` INTEGER NOT NULL,
    `img` VARCHAR(256) NOT NULL,
    `imgs` TEXT NULL,
    `brand_id` INTEGER NOT NULL,
    `type` ENUM('Treat') NOT NULL,
    `feature` VARCHAR(256) NULL,
    `weight` INTEGER NOT NULL,
    `quantity` INTEGER NULL,
    `taste_id` INTEGER NOT NULL,
    `quantity_packages` INTEGER NULL,
    `designed_for_id` INTEGER NOT NULL,
    `expiration` INTEGER NOT NULL,
    `proteins` DECIMAL(3, 1) NULL DEFAULT 0.0,
    `fats` DECIMAL(3, 1) NULL DEFAULT 0.0,
    `anatation` TEXT NULL,
    `ingridient_id` INTEGER NOT NULL,
    `keywords` TEXT NULL,
    `hardness_id` INTEGER NOT NULL,
    `posible_start_moth` INTEGER NOT NULL,
    `special_needs_id` INTEGER NULL,
    `numInPackage` INTEGER NULL,
    `composition` VARCHAR(256) NULL,
    `materials` VARCHAR(256) NULL,
    `content_of_meet` INTEGER NULL,
    `energy_value` INTEGER NULL,
    `made_in_id` INTEGER NULL,
    `ordered_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `stock` INTEGER NOT NULL DEFAULT 0,

    INDEX `foods_brand_id_idx`(`brand_id`),
    INDEX `foods_taste_id_idx`(`taste_id`),
    INDEX `foods_designed_for_id_idx`(`designed_for_id`),
    INDEX `foods_ingridient_id_idx`(`ingridient_id`),
    INDEX `foods_special_needs_id_idx`(`special_needs_id`),
    INDEX `foods_hardness_id_idx`(`hardness_id`),
    INDEX `foods_made_in_id_idx`(`made_in_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country_made_in` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `country_made_in_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `features` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `features_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `food_feature` (
    `food_id` BIGINT NOT NULL,
    `feature_id` INTEGER NOT NULL,

    PRIMARY KEY (`food_id`, `feature_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `special_needs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `special_needs_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pet_sizes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `pet_sizes_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `food_pet_size` (
    `food_id` BIGINT NOT NULL,
    `pet_size_id` INTEGER NOT NULL,

    PRIMARY KEY (`food_id`, `pet_size_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ingridients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `ingridients_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hardness` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `hardness_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `type_treats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `type_treats_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `food_type_treat` (
    `food_id` BIGINT NOT NULL,
    `type_treat_id` INTEGER NOT NULL,

    PRIMARY KEY (`food_id`, `type_treat_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `packages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `packages_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `food_package` (
    `food_id` BIGINT NOT NULL,
    `package_id` INTEGER NOT NULL,

    PRIMARY KEY (`food_id`, `package_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `designed_for` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `designed_for_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `brands` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `brands_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tastes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `tastes_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `ages_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `food_age` (
    `food_id` BIGINT NOT NULL,
    `age_id` INTEGER NOT NULL,

    PRIMARY KEY (`food_id`, `age_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `balance` DECIMAL(15, 2) NOT NULL DEFAULT 0.0,
    `nickname` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `nickname`(`nickname`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `food_id` BIGINT NOT NULL,
    `user_id` INTEGER NOT NULL,
    `quality` TINYINT NOT NULL,
    `ordered_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `orders_food_id_idx`(`food_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ratings` (
    `food_id` BIGINT NOT NULL,
    `user_id` INTEGER NOT NULL,
    `score` TINYINT NOT NULL,
    `rated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `uniq_food_user_idx`(`food_id`, `user_id`),
    PRIMARY KEY (`food_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
