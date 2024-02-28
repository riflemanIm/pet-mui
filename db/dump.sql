-- MariaDB dump 10.19-11.2.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: shepherd_pet
-- ------------------------------------------------------
-- Server version	11.2.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES
('452bc882-86fc-45b2-870e-df1ddfbe9c88','8310827267c8cb51f03789dadf5b1a5605dcd44c968129c1a1f91c8f69d23188','2024-02-11 15:26:32.262','20240210190220_init',NULL,NULL,'2024-02-11 15:26:31.969',1),
('77549280-dc98-4a71-a603-3c7765e95ae0','27721369f3ad8b7cd229b0df4f647f19cf739ae0d52dcafd6f32f67568f39002','2024-02-11 15:27:06.658','20240211152705_artikul_uniq',NULL,NULL,'2024-02-11 15:27:05.935',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ages`
--

DROP TABLE IF EXISTS `ages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ages_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ages`
--

LOCK TABLES `ages` WRITE;
/*!40000 ALTER TABLE `ages` DISABLE KEYS */;
INSERT INTO `ages` VALUES
(3,'Для взрослых'),
(2,'Для маленьких'),
(1,'Для пожилых');
/*!40000 ALTER TABLE `ages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `brands_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES
(1,'SHEPHERD');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country_made_in`
--

DROP TABLE IF EXISTS `country_made_in`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `country_made_in` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `country_made_in_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=1286 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country_made_in`
--

LOCK TABLES `country_made_in` WRITE;
/*!40000 ALTER TABLE `country_made_in` DISABLE KEYS */;
INSERT INTO `country_made_in` VALUES
(188,'Абхазия'),
(33,'Австралия'),
(67,'Австрия'),
(107,'Азербайджан'),
(246,'Албания'),
(255,'Алжир'),
(108,'Американское Самоа'),
(111,'Ангилья'),
(187,'Англия'),
(167,'Ангола'),
(163,'Андорра'),
(160,'Антигуа и Барбуда'),
(74,'Аргентина'),
(64,'Армения'),
(158,'Аруба'),
(93,'Афганистан'),
(128,'Багамские о-ва'),
(16,'Бангладеш'),
(175,'Барбадос'),
(153,'Бахрейн'),
(17,'Беларусь'),
(137,'Белиз'),
(14,'Бельгия'),
(49,'Бенин'),
(223,'Бермудские о-ва'),
(189,'Бирма'),
(174,'Болгария'),
(253,'Боливия'),
(219,'Бонер'),
(71,'Босния и Герцеговина'),
(129,'Ботсвана'),
(54,'Бразилия'),
(156,'Бруней'),
(159,'Буркина-Фасо'),
(99,'Бурунди'),
(94,'Бутан'),
(155,'Вануату'),
(239,'Ватикан'),
(12,'Великобритания'),
(24,'Венгрия'),
(90,'Венесуэла'),
(215,'Виргинские о-ва, Брит.'),
(194,'Виргинские о-ва, США'),
(148,'Вьетнам'),
(62,'Габон'),
(249,'Гаити'),
(244,'Гайана'),
(241,'Гамбия'),
(220,'Гана'),
(213,'Гваделупа'),
(123,'Гватемала'),
(221,'Гвинейская Р-ка'),
(103,'Гвинея-Бисау'),
(45,'ГДР'),
(8,'Германия'),
(180,'Гернси'),
(231,'Гибралтар'),
(146,'Голландия'),
(109,'Гондурас'),
(230,'Гренада'),
(150,'Гренландия'),
(29,'Греция'),
(183,'Грузия'),
(212,'Гуам'),
(6,'Дания'),
(154,'Джерси'),
(44,'Джибути'),
(176,'Доминика'),
(250,'Доминиканская Республика'),
(210,'Древний Рим'),
(58,'Европейский Союз'),
(56,'Египет'),
(191,'Заир'),
(79,'Замбия'),
(186,'Западная Европа'),
(141,'Западное Самоа'),
(112,'Зимбабве'),
(95,'Израиль'),
(42,'Индия'),
(27,'Индонезия'),
(26,'Иордания'),
(83,'Ирак'),
(122,'Иран'),
(40,'Ирландия'),
(72,'Исландия'),
(7,'Испания'),
(48,'Италия'),
(113,'Йемен'),
(114,'Кабо Верде'),
(39,'Казахстан'),
(227,'Кайманские о-ва'),
(98,'Камбоджа'),
(199,'Камерун'),
(51,'Канада'),
(228,'Канарские о-ва'),
(256,'Катар'),
(233,'Кения'),
(61,'Кипр'),
(208,'Киргизия'),
(164,'Кирибати, Р-ка'),
(1,'Китай'),
(30,'Китай (Гонконг)'),
(9,'Китай (Тайвань)'),
(190,'КНДР'),
(36,'Колумбия'),
(87,'Коморские о-ва'),
(59,'Конго'),
(169,'Конго, Демократич. р-ка'),
(35,'Корея'),
(140,'Коста Рика'),
(125,'Кот-д\' Ивуар'),
(46,'Куба'),
(145,'Кувейт'),
(100,'Кука о-ва'),
(207,'Кыргызская Республика'),
(136,'Кыргызстан'),
(168,'Кюрасао'),
(234,'Лаос'),
(31,'Латвия'),
(147,'Лесото'),
(96,'Либерия'),
(222,'Ливан'),
(138,'Ливия'),
(102,'Литва'),
(232,'Лихтенштейн'),
(53,'Люксембург'),
(91,'Маврикий'),
(134,'Мавритания'),
(88,'Мадагаскар'),
(144,'Макао'),
(131,'Македония'),
(106,'Малави'),
(252,'Малагази'),
(47,'Малайзия'),
(43,'Мали'),
(192,'Мальдивские о-ва'),
(89,'Мальта'),
(82,'Марокко'),
(181,'Мартиника'),
(172,'Маршалловы о-ва'),
(23,'Мексика'),
(104,'Мозамбик'),
(10,'Молдова'),
(57,'Монако'),
(60,'Монголия'),
(171,'Монтсеррат'),
(97,'Мьянма'),
(143,'Намибия'),
(226,'Науру'),
(4,'Не указана'),
(110,'Невис'),
(63,'Непал'),
(139,'Нигер'),
(86,'Нигерия'),
(236,'Нидерландские Антиллы'),
(21,'Нидерланды'),
(101,'Никарагуа'),
(224,'Ниуэ о-в'),
(248,'Новая Зеландия'),
(162,'Новая Каледония'),
(20,'Норвегия'),
(119,'ОАЭ'),
(218,'Оман'),
(28,'Пакистан'),
(251,'Палау'),
(247,'Панама'),
(132,'Папуа Новая Гвинея'),
(225,'Парагвай'),
(55,'Перу'),
(5,'Польша'),
(118,'Португалия'),
(245,'Приднестровская Молдавская Республика'),
(240,'Пуэрто-Рико'),
(206,'Республика Молдова'),
(142,'Реюньон'),
(11,'Россия'),
(76,'Руанда'),
(117,'Румыния'),
(135,'Сайпан'),
(185,'Сальвадор'),
(197,'Сан-Марино'),
(81,'Сан-Томе и Принсипи'),
(84,'Саудовская Аравия'),
(214,'Св. Бартоломью'),
(170,'Свазиленд'),
(130,'Сейшельские о-ва'),
(193,'Сен-Мартен'),
(120,'Сенегал'),
(177,'Сент-Винсент'),
(184,'Сент-Китс'),
(152,'Сент-Люсия'),
(242,'Сент-Юстас'),
(182,'Сербия'),
(75,'Сингапур'),
(92,'Сирия'),
(32,'Словакия'),
(18,'Словения'),
(203,'СНГ'),
(237,'Соломоновы о-ва'),
(121,'Сомали'),
(195,'Сомалиленд'),
(69,'СССР'),
(243,'Судан'),
(85,'Суринам'),
(2,'США'),
(235,'Сьерра-Леоне'),
(217,'Таджикистан'),
(22,'Таиланд'),
(165,'Таити'),
(254,'Танзания'),
(149,'Теркс и Кайкос'),
(80,'Того'),
(200,'Тонга'),
(126,'Тринидад и Тобаго'),
(201,'Тристан-да-Кунья'),
(157,'Тувалу'),
(41,'Тунис'),
(77,'Туркменистан'),
(34,'Турция'),
(257,'Уганда'),
(178,'Узбекистан'),
(15,'Украина'),
(66,'Уругвай'),
(133,'Фарерские о-ва'),
(105,'Фиджи'),
(37,'Филиппины'),
(25,'Финляндия'),
(238,'Фолклендские о-ва'),
(3,'Франция'),
(211,'Французская Гвиана'),
(70,'ФРГ'),
(78,'Хорватия'),
(198,'ЦАР'),
(202,'Цейлон'),
(216,'Центральноафриканская Республика'),
(19,'Чад'),
(196,'Черногория'),
(65,'Чехия'),
(38,'Чехословакия'),
(115,'Чили'),
(116,'Швейцария'),
(124,'Швеция'),
(204,'Шотландия'),
(52,'Шри-Ланка'),
(173,'Эквадор'),
(179,'Экваториальная Гвинея'),
(229,'Эритрея'),
(68,'Эстония'),
(166,'Эфиопия'),
(73,'ЮАР'),
(161,'ЮВА'),
(127,'Югославия'),
(151,'Южная Корея'),
(209,'Южная Осетия'),
(205,'Южный Судан'),
(50,'Ямайка'),
(13,'Япония');
/*!40000 ALTER TABLE `country_made_in` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `designed_for`
--

DROP TABLE IF EXISTS `designed_for`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `designed_for` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `designed_for_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `designed_for`
--

LOCK TABLES `designed_for` WRITE;
/*!40000 ALTER TABLE `designed_for` DISABLE KEYS */;
INSERT INTO `designed_for` VALUES
(4,'Для ежей'),
(2,'Для кошек'),
(3,'Для насекомых'),
(1,'Для собак'),
(5,'Для улиток');
/*!40000 ALTER TABLE `designed_for` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `features`
--

DROP TABLE IF EXISTS `features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `features` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `features_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=145 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `features`
--

LOCK TABLES `features` WRITE;
/*!40000 ALTER TABLE `features` DISABLE KEYS */;
INSERT INTO `features` VALUES
(5,'Без ароматизаторов'),
(4,'Без вкусовых добавок'),
(1,'Без глутамата натрия'),
(6,'Без глютена'),
(8,'Без ГМО'),
(10,'Без добавления сои'),
(3,'Без добавления соли'),
(9,'Без загустителей'),
(19,'Без искусственных добавок'),
(24,'Без искусственных консервантов'),
(7,'Без искусственных красителей'),
(14,'Без искусственных стабилизаторов'),
(15,'Без костной муки'),
(16,'Без крахмала'),
(33,'Без курицы'),
(2,'Без молочного белка'),
(18,'Без сахара'),
(23,'Без субпродуктов'),
(32,'Без усилителей вкуса'),
(20,'Без яиц'),
(28,'Беззерновой корм'),
(31,'Вегетарианский продукт'),
(22,'Высокое содержание белка'),
(11,'Гипоаллергенный продукт'),
(13,'Моментального приготовления без варки'),
(12,'Натуральные ароматизаторы'),
(26,'Низкое содержание жира'),
(21,'Низкокалорийный продукт'),
(25,'Обогащено витаминами'),
(17,'С натуральными красителями'),
(36,'Содержит коровье молоко'),
(35,'Содержит сахара природного происхождения'),
(27,'Содержит таурин'),
(30,'Сублимированный продукт'),
(29,'Суперфудс'),
(34,'Цветные');
/*!40000 ALTER TABLE `features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_age`
--

DROP TABLE IF EXISTS `food_age`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `food_age` (
  `food_id` bigint(20) NOT NULL,
  `age_id` int(11) NOT NULL,
  PRIMARY KEY (`food_id`,`age_id`),
  KEY `food_age_age_id_fkey` (`age_id`),
  CONSTRAINT `food_age_age_id_fkey` FOREIGN KEY (`age_id`) REFERENCES `ages` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `food_age_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_age`
--

LOCK TABLES `food_age` WRITE;
/*!40000 ALTER TABLE `food_age` DISABLE KEYS */;
INSERT INTO `food_age` VALUES
(1,1),
(2,1),
(3,1),
(4,1),
(5,1),
(6,1),
(7,1),
(8,1),
(9,1),
(10,1),
(11,1),
(12,1),
(13,1),
(14,1),
(15,1),
(16,1),
(17,1),
(18,1),
(19,1),
(20,1),
(21,1),
(22,1),
(23,1),
(24,1),
(25,1),
(26,1),
(27,1),
(28,1),
(29,1),
(30,1),
(31,1),
(32,1),
(33,1),
(34,1),
(35,1),
(36,1),
(37,1),
(38,1),
(39,1),
(40,1),
(41,1),
(42,1),
(43,1),
(44,1),
(45,1),
(46,1),
(47,1),
(48,1),
(49,1),
(1,2),
(2,2),
(3,2),
(4,2),
(5,2),
(6,2),
(7,2),
(8,2),
(9,2),
(10,2),
(11,2),
(12,2),
(13,2),
(14,2),
(15,2),
(16,2),
(17,2),
(18,2),
(19,2),
(20,2),
(21,2),
(22,2),
(23,2),
(24,2),
(25,2),
(26,2),
(27,2),
(28,2),
(29,2),
(30,2),
(31,2),
(32,2),
(33,2),
(34,2),
(35,2),
(36,2),
(37,2),
(38,2),
(39,2),
(40,2),
(41,2),
(42,2),
(43,2),
(44,2),
(45,2),
(46,2),
(47,2),
(48,2),
(49,2),
(1,3),
(2,3),
(3,3),
(4,3),
(5,3),
(6,3),
(7,3),
(8,3),
(9,3),
(10,3),
(11,3),
(12,3),
(13,3),
(14,3),
(15,3),
(16,3),
(17,3),
(18,3),
(19,3),
(20,3),
(21,3),
(22,3),
(23,3),
(24,3),
(25,3),
(26,3),
(27,3),
(28,3),
(29,3),
(30,3),
(31,3),
(32,3),
(33,3),
(34,3),
(35,3),
(36,3),
(37,3),
(38,3),
(39,3),
(40,3),
(41,3),
(42,3),
(43,3),
(44,3),
(45,3),
(46,3),
(47,3),
(48,3),
(49,3);
/*!40000 ALTER TABLE `food_age` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_feature`
--

DROP TABLE IF EXISTS `food_feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `food_feature` (
  `food_id` bigint(20) NOT NULL,
  `feature_id` int(11) NOT NULL,
  PRIMARY KEY (`food_id`,`feature_id`),
  KEY `food_feature_feature_id_fkey` (`feature_id`),
  CONSTRAINT `food_feature_feature_id_fkey` FOREIGN KEY (`feature_id`) REFERENCES `features` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `food_feature_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_feature`
--

LOCK TABLES `food_feature` WRITE;
/*!40000 ALTER TABLE `food_feature` DISABLE KEYS */;
INSERT INTO `food_feature` VALUES
(1,4),
(2,4),
(3,4),
(4,4),
(5,4),
(6,4),
(7,4),
(8,4),
(9,4),
(10,4),
(11,4),
(12,4),
(13,4),
(14,4),
(15,4),
(16,4),
(17,4),
(18,4),
(19,4),
(20,4),
(21,4),
(22,4),
(23,4),
(24,4),
(25,4),
(26,4),
(27,4),
(28,4),
(29,4),
(30,4),
(31,4),
(32,4),
(33,4),
(34,4),
(35,4),
(36,4),
(37,4),
(38,4),
(39,4),
(40,4),
(41,4),
(42,4),
(43,4),
(44,4),
(45,4),
(46,4),
(47,4),
(48,4),
(49,4),
(1,5),
(2,5),
(3,5),
(4,5),
(5,5),
(6,5),
(7,5),
(8,5),
(9,5),
(10,5),
(11,5),
(12,5),
(13,5),
(14,5),
(15,5),
(16,5),
(17,5),
(18,5),
(19,5),
(20,5),
(21,5),
(22,5),
(23,5),
(24,5),
(25,5),
(26,5),
(27,5),
(28,5),
(29,5),
(30,5),
(31,5),
(32,5),
(33,5),
(34,5),
(35,5),
(36,5),
(37,5),
(38,5),
(39,5),
(40,5),
(41,5),
(42,5),
(43,5),
(44,5),
(45,5),
(46,5),
(47,5),
(48,5),
(49,5),
(1,6),
(2,6),
(3,6),
(4,6),
(5,6),
(6,6),
(7,6),
(8,6),
(9,6),
(10,6),
(11,6),
(12,6),
(13,6),
(14,6),
(15,6),
(16,6),
(17,6),
(18,6),
(1,7),
(2,7),
(3,7),
(4,8),
(5,8),
(6,8),
(7,8),
(8,8),
(9,8),
(10,8),
(11,8),
(12,8),
(13,8),
(14,8),
(15,8),
(16,8),
(17,8),
(18,8),
(19,8),
(20,8),
(21,8),
(22,8),
(23,8),
(24,8),
(25,8),
(26,8),
(27,8),
(28,8),
(29,8),
(30,8),
(31,8),
(32,8),
(33,8),
(34,8),
(35,8),
(36,8),
(37,8),
(38,8),
(39,8),
(40,8),
(41,8),
(42,8),
(43,8),
(44,8),
(45,8),
(46,8),
(47,8),
(48,8),
(49,8),
(1,19),
(2,19),
(3,19),
(16,19),
(17,19),
(18,19),
(1,22),
(2,22),
(3,22),
(4,22),
(5,22),
(6,22),
(16,24),
(17,24),
(18,24);
/*!40000 ALTER TABLE `food_feature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_package`
--

DROP TABLE IF EXISTS `food_package`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `food_package` (
  `food_id` bigint(20) NOT NULL,
  `package_id` int(11) NOT NULL,
  PRIMARY KEY (`food_id`,`package_id`),
  KEY `food_package_package_id_fkey` (`package_id`),
  CONSTRAINT `food_package_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `food_package_package_id_fkey` FOREIGN KEY (`package_id`) REFERENCES `packages` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_package`
--

LOCK TABLES `food_package` WRITE;
/*!40000 ALTER TABLE `food_package` DISABLE KEYS */;
INSERT INTO `food_package` VALUES
(1,45),
(2,45),
(3,45),
(4,45),
(5,45),
(6,45),
(7,45),
(8,45),
(9,45),
(10,45),
(11,45),
(12,45),
(13,45),
(14,45),
(15,45),
(16,45),
(17,45),
(18,45),
(19,45),
(20,45),
(21,45),
(22,45),
(23,45),
(24,45),
(25,45),
(26,45),
(27,45),
(28,45),
(29,45),
(30,45),
(31,45),
(32,45),
(33,45),
(34,45),
(35,45),
(36,45),
(37,45),
(38,45),
(39,45),
(40,45),
(41,45),
(42,45),
(44,45),
(45,45),
(46,45),
(47,45),
(48,45),
(49,45),
(4,72),
(5,72),
(6,72),
(7,72),
(8,72),
(9,72),
(10,72),
(11,72),
(12,72),
(13,72),
(14,72),
(15,72),
(43,72),
(44,72),
(45,72),
(46,72);
/*!40000 ALTER TABLE `food_package` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_pet_size`
--

DROP TABLE IF EXISTS `food_pet_size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `food_pet_size` (
  `food_id` bigint(20) NOT NULL,
  `pet_size_id` int(11) NOT NULL,
  PRIMARY KEY (`food_id`,`pet_size_id`),
  KEY `food_pet_size_pet_size_id_fkey` (`pet_size_id`),
  CONSTRAINT `food_pet_size_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `food_pet_size_pet_size_id_fkey` FOREIGN KEY (`pet_size_id`) REFERENCES `pet_sizes` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_pet_size`
--

LOCK TABLES `food_pet_size` WRITE;
/*!40000 ALTER TABLE `food_pet_size` DISABLE KEYS */;
INSERT INTO `food_pet_size` VALUES
(1,1),
(2,1),
(3,1),
(4,1),
(5,1),
(6,1),
(7,1),
(8,1),
(9,1),
(10,1),
(11,1),
(12,1),
(13,1),
(14,1),
(15,1),
(16,1),
(17,1),
(18,1),
(19,1),
(20,1),
(21,1),
(22,1),
(23,1),
(24,1),
(25,1),
(26,1),
(27,1),
(28,1),
(29,1),
(30,1),
(31,1),
(32,1),
(33,1),
(34,1),
(35,1),
(36,1),
(37,1),
(38,1),
(39,1),
(40,1),
(41,1),
(42,1),
(43,1),
(44,1),
(45,1),
(46,1),
(47,1),
(48,1),
(49,1),
(1,2),
(2,2),
(3,2),
(4,2),
(5,2),
(6,2),
(7,2),
(8,2),
(9,2),
(10,2),
(11,2),
(12,2),
(13,2),
(14,2),
(15,2),
(16,2),
(17,2),
(18,2),
(19,2),
(20,2),
(21,2),
(22,2),
(23,2),
(24,2),
(25,2),
(26,2),
(27,2),
(28,2),
(29,2),
(30,2),
(31,2),
(32,2),
(33,2),
(34,2),
(35,2),
(36,2),
(37,2),
(38,2),
(39,2),
(40,2),
(41,2),
(42,2),
(43,2),
(44,2),
(45,2),
(46,2),
(47,2),
(48,2),
(49,2),
(1,3),
(2,3),
(3,3),
(4,3),
(5,3),
(6,3),
(7,3),
(8,3),
(9,3),
(13,3),
(14,3),
(15,3),
(16,3),
(17,3),
(18,3),
(19,3),
(20,3),
(21,3),
(22,3),
(23,3),
(24,3),
(25,3),
(26,3),
(27,3),
(28,3),
(29,3),
(30,3),
(31,3),
(32,3),
(33,3),
(34,3),
(35,3),
(36,3),
(37,3),
(38,3),
(39,3),
(40,3),
(41,3),
(42,3),
(43,3),
(44,3),
(45,3),
(46,3),
(47,3),
(48,3),
(49,3);
/*!40000 ALTER TABLE `food_pet_size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_type_treat`
--

DROP TABLE IF EXISTS `food_type_treat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `food_type_treat` (
  `food_id` bigint(20) NOT NULL,
  `type_treat_id` int(11) NOT NULL,
  PRIMARY KEY (`food_id`,`type_treat_id`),
  KEY `food_type_treat_type_treat_id_fkey` (`type_treat_id`),
  CONSTRAINT `food_type_treat_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `food_type_treat_type_treat_id_fkey` FOREIGN KEY (`type_treat_id`) REFERENCES `type_treats` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_type_treat`
--

LOCK TABLES `food_type_treat` WRITE;
/*!40000 ALTER TABLE `food_type_treat` DISABLE KEYS */;
INSERT INTO `food_type_treat` VALUES
(1,2),
(2,2),
(3,2),
(16,4),
(17,4),
(18,4),
(22,5),
(23,5),
(10,8),
(11,8),
(12,8),
(22,13),
(23,13),
(39,13),
(40,13),
(41,13),
(42,13),
(22,18),
(23,18),
(7,20),
(8,20),
(9,20),
(23,20),
(22,25),
(23,25),
(44,25),
(45,25),
(46,25),
(4,26),
(5,26),
(6,26),
(22,26),
(23,26),
(43,26),
(13,30),
(14,30),
(15,30),
(25,30),
(26,30),
(27,30),
(31,30),
(32,30),
(33,30),
(22,39),
(23,39),
(22,43),
(23,43),
(43,47),
(19,52),
(20,52),
(21,52);
/*!40000 ALTER TABLE `food_type_treat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foods`
--

DROP TABLE IF EXISTS `foods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `foods` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `artikul` varchar(100) NOT NULL,
  `title` varchar(256) NOT NULL,
  `price` decimal(15,2) NOT NULL DEFAULT 0.00,
  `price_discount` decimal(15,2) NOT NULL DEFAULT 0.00,
  `vat` tinyint(1) DEFAULT NULL,
  `isPromo` tinyint(1) DEFAULT NULL,
  `ozon_id` varchar(256) DEFAULT NULL,
  `barcode` varchar(256) NOT NULL,
  `package_weight` int(11) NOT NULL,
  `package_width` int(11) NOT NULL,
  `package_height` int(11) NOT NULL,
  `length_height` int(11) NOT NULL,
  `img` varchar(256) NOT NULL,
  `imgs` text DEFAULT NULL,
  `brand_id` int(11) NOT NULL,
  `type` enum('Treat') NOT NULL,
  `feature` varchar(256) DEFAULT NULL,
  `weight` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `taste_id` int(11) NOT NULL,
  `quantity_packages` int(11) DEFAULT NULL,
  `designed_for_id` int(11) NOT NULL,
  `expiration` int(11) NOT NULL,
  `proteins` decimal(3,1) DEFAULT 0.0,
  `fats` decimal(3,1) DEFAULT 0.0,
  `anatation` text DEFAULT NULL,
  `ingridient_id` int(11) NOT NULL,
  `keywords` text DEFAULT NULL,
  `hardness_id` int(11) NOT NULL,
  `posible_start_moth` int(11) NOT NULL,
  `special_needs_id` int(11) DEFAULT NULL,
  `numInPackage` int(11) DEFAULT NULL,
  `composition` varchar(256) DEFAULT NULL,
  `materials` varchar(256) DEFAULT NULL,
  `content_of_meet` int(11) DEFAULT NULL,
  `energy_value` int(11) DEFAULT NULL,
  `made_in_id` int(11) DEFAULT NULL,
  `ordered_at` datetime NOT NULL DEFAULT current_timestamp(),
  `stock` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `foods_artikul_key` (`artikul`),
  KEY `foods_brand_id_idx` (`brand_id`),
  KEY `foods_taste_id_idx` (`taste_id`),
  KEY `foods_designed_for_id_idx` (`designed_for_id`),
  KEY `foods_ingridient_id_idx` (`ingridient_id`),
  KEY `foods_special_needs_id_idx` (`special_needs_id`),
  KEY `foods_hardness_id_idx` (`hardness_id`),
  KEY `foods_made_in_id_idx` (`made_in_id`),
  CONSTRAINT `foods_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `foods_designed_for_id_fkey` FOREIGN KEY (`designed_for_id`) REFERENCES `designed_for` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `foods_hardness_id_fkey` FOREIGN KEY (`hardness_id`) REFERENCES `hardness` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `foods_ingridient_id_fkey` FOREIGN KEY (`ingridient_id`) REFERENCES `ingridients` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `foods_made_in_id_fkey` FOREIGN KEY (`made_in_id`) REFERENCES `country_made_in` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `foods_special_needs_id_fkey` FOREIGN KEY (`special_needs_id`) REFERENCES `special_needs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `foods_taste_id_fkey` FOREIGN KEY (`taste_id`) REFERENCES `tastes` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foods`
--

LOCK TABLES `foods` WRITE;
/*!40000 ALTER TABLE `foods` DISABLE KEYS */;
INSERT INTO `foods` VALUES
(1,'SPRD-02252','Бараний бибер (корень), натуральное сушёное лакомство для собак SHEPHERD TM., 1000гр.',4900.00,6500.00,0,0,NULL,'4680614022528',1020,40,400,300,'https://cdn1.ozone.ru/s3/multimedia-u/6850911738.jpg','https://cdn1.ozone.ru/s3/multimedia-l/6850911693.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-i/6850911618.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6850911622.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-w/6850911632.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6850911578.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-l/6850911621.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6850911626.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6850911634.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6850911639.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6850911658.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6850911650.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6850911613.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6850911653.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6850911758.jpg',1,'Treat','Бараний бибер (корень), сушеное для собак, 100% натуральное.',1000,1,3,1,1,365,72.0,8.0,'Это лакомство для собак является отличным источником дополнительных питательных веществ, которые могут быть полезны для здоровья и благополучия вашего питомца. Оно содержит повышенное количество белка, аминокислот и микроэлементов, которые благотворно влияют на обмен веществ у собак. Для собак, которые находятся на натуральном кормлении и употребляют в основном мягкую пищу, это лакомство является неотъемлемой частью их рациона. Натуральные ингредиенты помогают собаке поддерживать сильные мышцы челюсти и предотвращать образование оседающей пищи между зубов. Одной из главных преимуществ этого лакомства является его 100% натуральный состав. Это означает, что оно не содержит искусственных красителей, консервантов, ароматизаторов или других опасных добавок, которые могут быть вредны для здоровья собаки. Натуральные ингредиенты обеспечивают качественное питание для вашего питомца. В целом, данное лакомство может быть отличным дополнением к ежедневному рациону вашей собаки. Оно помогает удовлетворить ее потребность в питательных веществах, поддерживает обмен веществ и здоровье челюсти, а также предлагает 100% натуральный состав для здорового и счастливого питомца.',1,'корень, бараний корень, бибер, лакомства, собака, натуральное, сушёное',1,3,6,1,'100% бараний бибер (корень)',NULL,100,336,11,'2024-02-11 19:30:38',0),
(2,'SPRD-02250','Бараний бибер (корень), натуральное сушёное лакомство для собак SHEPHERD TM., 100гр.',550.00,650.00,0,0,NULL,'4680614022504',108,20,420,120,'https://cdn1.ozone.ru/s3/multimedia-i/6850911618.jpg','https://cdn1.ozone.ru/s3/multimedia-m/6850911622.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-w/6850911632.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6850911578.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-l/6850911621.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6850911626.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6850911634.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6850911639.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6850911658.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-u/6850911738.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6850911650.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6850911613.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6850911653.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-l/6850911693.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6850911758.jpg',1,'Treat','Бараний бибер (корень), сушеное для собак, 100% натуральное.',100,1,3,1,1,365,72.0,8.0,'Это лакомство для собак является отличным источником дополнительных питательных веществ, которые могут быть полезны для здоровья и благополучия вашего питомца. Оно содержит повышенное количество белка, аминокислот и микроэлементов, которые благотворно влияют на обмен веществ у собак. Для собак, которые находятся на натуральном кормлении и употребляют в основном мягкую пищу, это лакомство является неотъемлемой частью их рациона. Натуральные ингредиенты помогают собаке поддерживать сильные мышцы челюсти и предотвращать образование оседающей пищи между зубов. Одной из главных преимуществ этого лакомства является его 100% натуральный состав. Это означает, что оно не содержит искусственных красителей, консервантов, ароматизаторов или других опасных добавок, которые могут быть вредны для здоровья собаки. Натуральные ингредиенты обеспечивают качественное питание для вашего питомца. В целом, данное лакомство может быть отличным дополнением к ежедневному рациону вашей собаки. Оно помогает удовлетворить ее потребность в питательных веществах, поддерживает обмен веществ и здоровье челюсти, а также предлагает 100% натуральный состав для здорового и счастливого питомца.',1,'корень, бараний корень, бибер, лакомства, собака, натуральное, сушёное',1,3,6,1,'100% бараний бибер (корень)',NULL,100,336,11,'2024-02-11 19:30:38',0),
(3,'SPRD-02251','Бараний бибер (корень), натуральное сушёное лакомство для собак SHEPHERD TM., 500гр.',2450.00,3250.00,0,0,NULL,'4680614022511',510,25,400,200,'https://cdn1.ozone.ru/s3/multimedia-u/6850911738.jpg','https://cdn1.ozone.ru/s3/multimedia-l/6850911693.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-i/6850911618.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6850911622.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-w/6850911632.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6850911578.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-l/6850911621.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6850911626.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6850911634.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6850911639.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6850911658.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6850911650.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6850911613.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6850911653.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6850911758.jpg',1,'Treat','Бараний бибер (корень), сушеное для собак, 100% натуральное.',500,1,3,1,1,365,72.0,8.0,'Это лакомство для собак является отличным источником дополнительных питательных веществ, которые могут быть полезны для здоровья и благополучия вашего питомца. Оно содержит повышенное количество белка, аминокислот и микроэлементов, которые благотворно влияют на обмен веществ у собак. Для собак, которые находятся на натуральном кормлении и употребляют в основном мягкую пищу, это лакомство является неотъемлемой частью их рациона. Натуральные ингредиенты помогают собаке поддерживать сильные мышцы челюсти и предотвращать образование оседающей пищи между зубов. Одной из главных преимуществ этого лакомства является его 100% натуральный состав. Это означает, что оно не содержит искусственных красителей, консервантов, ароматизаторов или других опасных добавок, которые могут быть вредны для здоровья собаки. Натуральные ингредиенты обеспечивают качественное питание для вашего питомца. В целом, данное лакомство может быть отличным дополнением к ежедневному рациону вашей собаки. Оно помогает удовлетворить ее потребность в питательных веществах, поддерживает обмен веществ и здоровье челюсти, а также предлагает 100% натуральный состав для здорового и счастливого питомца.',1,'корень, бараний корень, бибер, лакомства, собака, натуральное, сушёное',1,3,6,1,'100% бараний бибер (корень)',NULL,100,336,11,'2024-02-11 19:30:38',0),
(4,'SPRD-02240','Бараньи трахеи, натуральное сушёное лакомство для собак SHEPHERD TM., 1000гр.',3100.00,4000.00,0,0,NULL,'4680614022405',1022,40,400,400,'https://cdn1.ozone.ru/s3/multimedia-v/6851907067.jpg','https://cdn1.ozone.ru/s3/multimedia-t/6851907173.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6851907170.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6851907089.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6851907166.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6851907215.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6851907186.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6851907178.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6851907158.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-0/6851907072.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-a/6851907082.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6851907196.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6851907150.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-2/6851907110.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-j/6851907199.jpg',1,'Treat','Бараньи трахеи, сушёное для собак, 100% натуральное',1000,1,3,1,1,365,33.0,39.0,'Сушёные трахеи являются вкусными и ароматными лакомствами, которые собаки, безусловно, оценят. Они представляют собой хрустящие на зубах деликатесы, богатые хрящевой и соединительной тканью. Это обеспечивает не только приятную текстуру для жевания, но и обогащает рацион собаки различными полезными веществами. Одно из основных преимуществ сушеных трахей заключается в их содержании белка, фосфора, железа и цинка. Эти эти элементы важны для обеспечения здоровья и правильного функционирования организма собаки. Белок является строительным блоком для мышц и тканей, а фосфор, железо и цинк играют ключевые роли в поддержании здоровья костей, крови и общего иммунитета. Помимо этого, сушенные бараньи трахеи, в отличие от других лакомств, состоят из хряща, напоминающего трубочку. Кальций является важным минералом, который поддерживает здоровье костей и зубов собаки. Поэтому сушенные трахеи барана особенно рекомендуются для щенков, подростков и собак с проблемами опорно-двигательного аппарата. Наконец, следует отметить, что сушеные трахеи для собак являются 100% натуральным лакомством, что делает их полезными для домашних животных. Они помогают очищать и укреплять челюсти, десна и зубы собаки. Благодаря их приятной текстуре, собаки могут долго и с удовольствием жевать, что способствует укреплению зубной эмали и предотвращает зубной налет. В целом, сушенные трахеи представляют собой идеальное лакомство для некрупных собак, которое приносит прекрасную пользу и является вкусным удовольствием для их здоровья и удовлетворения жевательных потребностей.',1,'Бараньи трахеи, баран, лакомства, натуральное,сушёное',1,3,6,1,'100% баранья трахея','Фосфор,железо,цинк',100,489,11,'2024-02-11 20:01:19',0),
(5,'SPRD-02239','Бараньи трахеи, натуральное сушёное лакомство для собак SHEPHERD TM., 500гр.',1700.00,2100.00,0,0,NULL,'4680614022399',516,40,400,300,'https://cdn1.ozone.ru/s3/multimedia-a/6851907082.jpg','https://cdn1.ozone.ru/s3/multimedia-t/6851907173.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6851907170.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6851907089.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6851907166.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6851907215.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6851907186.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6851907178.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6851907158.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-0/6851907072.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6851907196.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6851907150.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-2/6851907110.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-j/6851907199.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6851907067.jpg',1,'Treat','Бараньи трахеи, сушёное для собак, 100% натуральное',500,1,3,1,1,365,33.0,39.0,'Сушёные трахеи являются вкусными и ароматными лакомствами, которые собаки, безусловно, оценят. Они представляют собой хрустящие на зубах деликатесы, богатые хрящевой и соединительной тканью. Это обеспечивает не только приятную текстуру для жевания, но и обогащает рацион собаки различными полезными веществами. Одно из основных преимуществ сушеных трахей заключается в их содержании белка, фосфора, железа и цинка. Эти эти элементы важны для обеспечения здоровья и правильного функционирования организма собаки. Белок является строительным блоком для мышц и тканей, а фосфор, железо и цинк играют ключевые роли в поддержании здоровья костей, крови и общего иммунитета. Помимо этого, сушенные бараньи трахеи, в отличие от других лакомств, состоят из хряща, напоминающего трубочку. Кальций является важным минералом, который поддерживает здоровье костей и зубов собаки. Поэтому сушенные трахеи барана особенно рекомендуются для щенков, подростков и собак с проблемами опорно-двигательного аппарата. Наконец, следует отметить, что сушеные трахеи для собак являются 100% натуральным лакомством, что делает их полезными для домашних животных. Они помогают очищать и укреплять челюсти, десна и зубы собаки. Благодаря их приятной текстуре, собаки могут долго и с удовольствием жевать, что способствует укреплению зубной эмали и предотвращает зубной налет. В целом, сушенные трахеи представляют собой идеальное лакомство для некрупных собак, которое приносит прекрасную пользу и является вкусным удовольствием для их здоровья и удовлетворения жевательных потребностей.',1,'Бараньи трахеи, баран, лакомства, натуральное,сушёное',1,3,6,1,'100% баранья трахея','Фосфор,железо,цинк',100,489,11,'2024-02-11 20:01:19',0),
(6,'SPRD-02238','Бараньи трахеи, натуральное сушёное лакомство для собак SHEPHERD TM., 100гр.',380.00,450.00,0,0,NULL,'4680614022382',109,30,245,160,'https://cdn1.ozone.ru/s3/multimedia-t/6851907173.jpg','https://cdn1.ozone.ru/s3/multimedia-q/6851907170.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6851907089.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6851907166.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6851907215.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6851907186.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6851907178.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6851907158.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-0/6851907072.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-a/6851907082.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6851907196.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6851907150.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-2/6851907110.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-j/6851907199.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6851907067.jpg',1,'Treat','Бараньи трахеи, сушёное для собак, 100% натуральное',100,1,3,1,1,365,33.0,39.0,'Сушёные трахеи являются вкусными и ароматными лакомствами, которые собаки, безусловно, оценят. Они представляют собой хрустящие на зубах деликатесы, богатые хрящевой и соединительной тканью. Это обеспечивает не только приятную текстуру для жевания, но и обогащает рацион собаки различными полезными веществами. Одно из основных преимуществ сушеных трахей заключается в их содержании белка, фосфора, железа и цинка. Эти эти элементы важны для обеспечения здоровья и правильного функционирования организма собаки. Белок является строительным блоком для мышц и тканей, а фосфор, железо и цинк играют ключевые роли в поддержании здоровья костей, крови и общего иммунитета. Помимо этого, сушенные бараньи трахеи, в отличие от других лакомств, состоят из хряща, напоминающего трубочку. Кальций является важным минералом, который поддерживает здоровье костей и зубов собаки. Поэтому сушенные трахеи барана особенно рекомендуются для щенков, подростков и собак с проблемами опорно-двигательного аппарата. Наконец, следует отметить, что сушеные трахеи для собак являются 100% натуральным лакомством, что делает их полезными для домашних животных. Они помогают очищать и укреплять челюсти, десна и зубы собаки. Благодаря их приятной текстуре, собаки могут долго и с удовольствием жевать, что способствует укреплению зубной эмали и предотвращает зубной налет. В целом, сушенные трахеи представляют собой идеальное лакомство для некрупных собак, которое приносит прекрасную пользу и является вкусным удовольствием для их здоровья и удовлетворения жевательных потребностей.',1,'Бараньи трахеи, баран, лакомства, натуральное,сушёное',1,3,6,1,'100% баранья трахея','Фосфор,железо,цинк',100,489,11,'2024-02-11 20:01:19',0),
(7,'SPRD-02260','Утиное сердце, натуральное лакомство для собак SHEPHERD TM., 100гр.',330.00,400.00,0,0,NULL,'4680614022603',105,15,185,110,'https://cdn1.ozone.ru/s3/multimedia-m/6852331102.jpg','https://cdn1.ozone.ru/s3/multimedia-n/6852331103.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6852331106.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-u/6852331110.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6852331100.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-p/6852331105.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-x/6852331113.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6852331111.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-r/6852331107.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-l/6852331101.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-o/6852331104.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-s/6852331108.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-w/6852331112.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-t/6852331109.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6852331114.jpg',1,'Treat','Утиное сердце, для собак, 100% натуральное.',100,1,35,1,1,365,44.0,29.0,'Сердце утиное является ценным продуктом с низким содержанием жира и калорий, исключительно богатым животным белком. Благодаря этим свойствам, оно рекомендуется для использования в рационах животных, страдающих избыточным весом. Это лакомство может помочь контролировать вес и поддерживать оптимальное питание животного. В утином сердце также содержится значительное количество витаминов и микроэлементов, таких как железо и медь. Эти важные минералы играют ключевую роль в поддержании стабильного состава крови и нормальной функции нервной системы. Железо является неотъемлемой частью гемоглобина, который отвечает за перенос кислорода по организму, а медь влияет на процессы образования крови и функционирование иммунной системы. Кроме того, сердце утки богато магнием, который необходим для поддержания нормального давления и здоровья сосудов. Магний способствует снижению риска развития сердечно-сосудистых заболеваний и помогает в регулировании сокращений мышц. Важно отметить, что это 100% натуральное лакомство для собак, что гарантирует отсутствие искусственных добавок или консервантов. Этот продукт предлагает множество питательных веществ, которые могут помочь поддерживать здоровье и благополучие вашего питомца.',2,'утиное сердце, утка, лакомства, 100% натуральное, для собак',1,3,14,1,'100% утиное сердце','железо,медь,магний',100,440,11,'2024-02-11 20:01:19',0),
(8,'SPRD-02261','Утиное сердце, натуральное лакомство для собак SHEPHERD TM.,500гр.',1500.00,1800.00,0,0,NULL,'4680614022610',509,20,300,200,'https://cdn1.ozone.ru/s3/multimedia-o/6852331104.jpg','https://cdn1.ozone.ru/s3/multimedia-n/6852331103.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6852331106.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-u/6852331110.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6852331100.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-p/6852331105.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-x/6852331113.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6852331111.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-r/6852331107.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-l/6852331101.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-s/6852331108.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-w/6852331112.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6852331102.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-t/6852331109.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6852331114.jpg',1,'Treat','Утиное сердце, для собак, 100% натуральное.',500,1,35,1,1,365,44.0,29.0,'Сердце утиное является ценным продуктом с низким содержанием жира и калорий, исключительно богатым животным белком. Благодаря этим свойствам, оно рекомендуется для использования в рационах животных, страдающих избыточным весом. Это лакомство может помочь контролировать вес и поддерживать оптимальное питание животного. В утином сердце также содержится значительное количество витаминов и микроэлементов, таких как железо и медь. Эти важные минералы играют ключевую роль в поддержании стабильного состава крови и нормальной функции нервной системы. Железо является неотъемлемой частью гемоглобина, который отвечает за перенос кислорода по организму, а медь влияет на процессы образования крови и функционирование иммунной системы. Кроме того, сердце утки богато магнием, который необходим для поддержания нормального давления и здоровья сосудов. Магний способствует снижению риска развития сердечно-сосудистых заболеваний и помогает в регулировании сокращений мышц. Важно отметить, что это 100% натуральное лакомство для собак, что гарантирует отсутствие искусственных добавок или консервантов. Этот продукт предлагает множество питательных веществ, которые могут помочь поддерживать здоровье и благополучие вашего питомца.',2,'утиное сердце, утка, лакомства, 100% натуральное, для собак',1,3,14,1,'100% утиное сердце','железо,медь,магний',100,440,11,'2024-02-11 20:01:19',0),
(9,'SPRD-02262','Утиное сердце, натуральное лакомство для собак SHEPHERD TM.,1000гр.',2700.00,3400.00,0,0,NULL,'4680614022627',1011,30,400,200,'https://cdn1.ozone.ru/s3/multimedia-o/6852331104.jpg','https://cdn1.ozone.ru/s3/multimedia-n/6852331103.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6852331106.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-u/6852331110.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6852331100.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-p/6852331105.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-x/6852331113.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6852331111.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-r/6852331107.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-l/6852331101.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-s/6852331108.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-w/6852331112.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6852331102.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-t/6852331109.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6852331114.jpg',1,'Treat','Утиное сердце, для собак, 100% натуральное.',1000,1,35,1,1,365,44.0,29.0,'Сердце утиное является ценным продуктом с низким содержанием жира и калорий, исключительно богатым животным белком. Благодаря этим свойствам, оно рекомендуется для использования в рационах животных, страдающих избыточным весом. Это лакомство может помочь контролировать вес и поддерживать оптимальное питание животного. В утином сердце также содержится значительное количество витаминов и микроэлементов, таких как железо и медь. Эти важные минералы играют ключевую роль в поддержании стабильного состава крови и нормальной функции нервной системы. Железо является неотъемлемой частью гемоглобина, который отвечает за перенос кислорода по организму, а медь влияет на процессы образования крови и функционирование иммунной системы. Кроме того, сердце утки богато магнием, который необходим для поддержания нормального давления и здоровья сосудов. Магний способствует снижению риска развития сердечно-сосудистых заболеваний и помогает в регулировании сокращений мышц. Важно отметить, что это 100% натуральное лакомство для собак, что гарантирует отсутствие искусственных добавок или консервантов. Этот продукт предлагает множество питательных веществ, которые могут помочь поддерживать здоровье и благополучие вашего питомца.',2,'утиное сердце, утка, лакомства, 100% натуральное, для собак',1,3,14,1,'100% утиное сердце','железо,медь,магний',100,440,11,'2024-02-11 20:01:19',0),
(10,'SPRD-02257','Утиные лапки, натуральное лакомство для собак SHEPHERD TM., 1000гр.',1900.00,2500.00,0,0,NULL,'4680614022573',1015,40,400,300,'https://cdn1.ozone.ru/s3/multimedia-9/6852502737.jpg','https://cdn1.ozone.ru/s3/multimedia-4/6852502732.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-7/6852502735.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-a/6852502738.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6852502741.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-5/6852502733.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6852502744.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-b/6852502739.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6852502740.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6852502742.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6852502731.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6852502734.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-f/6852502743.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-8/6852502736.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6852502745.jpg',1,'Treat','Утиные лапки, для собак, 100% натуральное',1000,1,35,1,1,365,42.0,31.0,'Хрящевая ткань, содержащаяся в утиных лапках, является полезным дополнением к рациону собак. Она оказывает благотворное влияние на суставы питомца, помогая им оставаться эластичными и здоровыми. Это особенно важно для собак, которые активно двигаются и испытывают нагрузку на свои суставы.<br/><br/>Кроме того, при жевании утиные лапки создают необходимую нагрузку на челюсти и десны собаки. Это помогает предотвратить атрофию тканей полости рта и болезни зубов, чем можно обеспечить здоровье десен и сохранить зубы питомца в хорошем состоянии.<br/><br/>Утиные лапки также являются богатым источником витаминов и минеральных веществ. Витамины и минералы необходимы для поддержания общего здоровья собаки, всегда здоровой шерсти и хорошего иммунитета. Белок, содержащийся в этих лакомствах, также является важным питательным веществом для развития и роста собаки.<br/><br/>Рекомендуется предлагать утиные лапки собакам мелкого и среднего размера. Они позволяют собаке получить все вышеперечисленные преимущества и представляют собой идеальное лакомство для угощения или тренировок. Эти лакомства также могут быть предложены щенкам в возрасте от трех месяцев для поддержания их здоровья и роста.<br/><br/>Важно отметить, что утиные лапки являются 100% натуральным лакомством для собак. Это означает, что они не содержат искусственных добавок или консервантов, что делает их безопасным выбором для питомца.',2,'Утиные лапки, лапки, лакомства, натуральные, собака, сушёные',1,3,6,NULL,'100% утиные лапки',NULL,100,455,11,'2024-02-11 20:01:19',0),
(11,'SPRD-02255','Утиные лапки, натуральное лакомство для собак SHEPHERD TM., 100гр.',250.00,340.00,0,0,NULL,'4680614022559',109,25,220,135,'https://cdn1.ozone.ru/s3/multimedia-9/6852502737.jpg','https://cdn1.ozone.ru/s3/multimedia-4/6852502732.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-7/6852502735.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-a/6852502738.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6852502741.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-5/6852502733.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6852502744.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-b/6852502739.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6852502740.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6852502742.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6852502731.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6852502734.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-f/6852502743.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-8/6852502736.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6852502745.jpg',1,'Treat','Утиные лапки, для собак, 100% натуральное',100,1,35,1,1,365,42.0,31.0,'Хрящевая ткань, содержащаяся в утиных лапках, является полезным дополнением к рациону собак. Она оказывает благотворное влияние на суставы питомца, помогая им оставаться эластичными и здоровыми. Это особенно важно для собак, которые активно двигаются и испытывают нагрузку на свои суставы.<br/><br/>Кроме того, при жевании утиные лапки создают необходимую нагрузку на челюсти и десны собаки. Это помогает предотвратить атрофию тканей полости рта и болезни зубов, чем можно обеспечить здоровье десен и сохранить зубы питомца в хорошем состоянии.<br/><br/>Утиные лапки также являются богатым источником витаминов и минеральных веществ. Витамины и минералы необходимы для поддержания общего здоровья собаки, всегда здоровой шерсти и хорошего иммунитета. Белок, содержащийся в этих лакомствах, также является важным питательным веществом для развития и роста собаки.<br/><br/>Рекомендуется предлагать утиные лапки собакам мелкого и среднего размера. Они позволяют собаке получить все вышеперечисленные преимущества и представляют собой идеальное лакомство для угощения или тренировок. Эти лакомства также могут быть предложены щенкам в возрасте от трех месяцев для поддержания их здоровья и роста.<br/><br/>Важно отметить, что утиные лапки являются 100% натуральным лакомством для собак. Это означает, что они не содержат искусственных добавок или консервантов, что делает их безопасным выбором для питомца.',2,'Утиные лапки, лапки, лакомства, натуральные, собака, сушёные',1,3,6,NULL,'100% утиные лапки',NULL,100,455,11,'2024-02-11 20:01:19',0),
(12,'SPRD-02256','Утиные лапки, натуральное лакомство для собак SHEPHERD TM.,500гр.',1050.00,1300.00,0,0,NULL,'4680614022566',508,40,300,200,'https://cdn1.ozone.ru/s3/multimedia-9/6852502737.jpg','https://cdn1.ozone.ru/s3/multimedia-4/6852502732.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-7/6852502735.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-a/6852502738.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6852502741.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-5/6852502733.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6852502744.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-b/6852502739.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6852502740.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6852502742.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6852502731.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6852502734.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-f/6852502743.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-8/6852502736.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6852502745.jpg',1,'Treat','Утиные лапки, для собак, 100% натуральное',500,1,35,1,1,365,42.0,31.0,'Хрящевая ткань, содержащаяся в утиных лапках, является полезным дополнением к рациону собак. Она оказывает благотворное влияние на суставы питомца, помогая им оставаться эластичными и здоровыми. Это особенно важно для собак, которые активно двигаются и испытывают нагрузку на свои суставы.<br/><br/>Кроме того, при жевании утиные лапки создают необходимую нагрузку на челюсти и десны собаки. Это помогает предотвратить атрофию тканей полости рта и болезни зубов, чем можно обеспечить здоровье десен и сохранить зубы питомца в хорошем состоянии.<br/><br/>Утиные лапки также являются богатым источником витаминов и минеральных веществ. Витамины и минералы необходимы для поддержания общего здоровья собаки, всегда здоровой шерсти и хорошего иммунитета. Белок, содержащийся в этих лакомствах, также является важным питательным веществом для развития и роста собаки.<br/><br/>Рекомендуется предлагать утиные лапки собакам мелкого и среднего размера. Они позволяют собаке получить все вышеперечисленные преимущества и представляют собой идеальное лакомство для угощения или тренировок. Эти лакомства также могут быть предложены щенкам в возрасте от трех месяцев для поддержания их здоровья и роста.<br/><br/>Важно отметить, что утиные лапки являются 100% натуральным лакомством для собак. Это означает, что они не содержат искусственных добавок или консервантов, что делает их безопасным выбором для питомца.',2,'Утиные лапки, лапки, лакомства, натуральные, собака, сушёные',1,3,6,NULL,'100% утиные лапки',NULL,100,455,11,'2024-02-11 20:01:19',0),
(13,'SPRD-02253','Утиные шейки, натуральное сушёное лакомство для собак SHEPHERD TM., 1000гр.',2300.00,3000.00,0,0,NULL,'4680614022535',1022,40,400,400,'https://cdn1.ozone.ru/s3/multimedia-1/6852513853.jpg','https://cdn1.ozone.ru/s3/multimedia-a/6852513862.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-2/6852513854.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6852513889.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6852513861.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-7/6852513859.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-5/6852513857.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-8/6852513860.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-b/6852513863.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6852513864.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6852513855.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6852513858.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-4/6852513856.jpg',1,'Treat','Утиные шейки, натуральное сушёное для собак TM.',1000,NULL,35,1,1,365,40.0,20.0,'Утиные шеи являются деликатесом среди лакомств для собак и могут быть добавлены в их рацион с 3-х месячного возраста. Особенно полезны они для щенков в период смены зубов, так как помогают укрепить новые зубы, а также облегчают зуд и дискомфорт, которые сопровождают этот процесс.<br/><br/>Одна из основных причин, почему утиные шеи являются столь ценным лакомством для собак, заключается в их богатом содержании микроэлементов и витаминов. Это означает, что они не только удовлетворяют потребности организма в питательных веществах, но и способствуют общему здоровью собаки.<br/><br/>Особенно важно отметить, что утиные шеи являются полезными для суставов. Они содержат компоненты, которые способствуют укреплению и поддержанию здоровья суставов у собак.<br/><br/>Кроме того, утиные шеи являются 100% натуральным лакомством для собак. Это значит, что они не содержат искусственных добавок, консервантов или красителей, которые могут быть вредными для здоровья питомца.',2,'утиные шейки, шейки, лакомства, натуральное, утка',1,3,2,3,'100% утиная шея',NULL,100,230,11,'2024-02-11 20:01:19',0),
(14,'SPRD-02241','Утиные шейки, натуральное сушёное лакомство для собак SHEPHERD TM., 500гр.',1250.00,1400.00,0,0,NULL,'4680614022412',516,40,400,300,'https://cdn1.ozone.ru/s3/multimedia-1/6852513889.jpg','https://cdn1.ozone.ru/s3/multimedia-a/6852513862.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-2/6852513854.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6852513853.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6852513861.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-7/6852513859.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-5/6852513857.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-8/6852513860.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-b/6852513863.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6852513864.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6852513855.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6852513858.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-4/6852513856.jpg',1,'Treat','Утиные шейки, натуральное сушёное для собак TM.',500,NULL,35,1,1,365,40.0,20.0,'Утиные шеи являются деликатесом среди лакомств для собак и могут быть добавлены в их рацион с 3-х месячного возраста. Особенно полезны они для щенков в период смены зубов, так как помогают укрепить новые зубы, а также облегчают зуд и дискомфорт, которые сопровождают этот процесс.<br/><br/>Одна из основных причин, почему утиные шеи являются столь ценным лакомством для собак, заключается в их богатом содержании микроэлементов и витаминов. Это означает, что они не только удовлетворяют потребности организма в питательных веществах, но и способствуют общему здоровью собаки.<br/><br/>Особенно важно отметить, что утиные шеи являются полезными для суставов. Они содержат компоненты, которые способствуют укреплению и поддержанию здоровья суставов у собак.<br/><br/>Кроме того, утиные шеи являются 100% натуральным лакомством для собак. Это значит, что они не содержат искусственных добавок, консервантов или красителей, которые могут быть вредными для здоровья питомца.',2,'утиные шейки, шейки, лакомства, натуральное, утка',1,3,2,3,'100% утиная шея',NULL,100,230,11,'2024-02-11 20:01:19',0),
(15,'SPRD-02219','Утиные шейки, натуральное сушёное лакомство для собак SHEPHERD TM., 100гр.',280.00,330.00,0,0,NULL,'4680614022191',109,30,245,160,'https://cdn1.ozone.ru/s3/multimedia-a/6852513862.jpg','https://cdn1.ozone.ru/s3/multimedia-2/6852513854.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6852513889.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6852513853.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6852513861.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-7/6852513859.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-5/6852513857.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-8/6852513860.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-b/6852513863.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6852513864.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6852513855.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6852513858.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-4/6852513856.jpg',1,'Treat','Утиные шейки, натуральное сушёное для собак TM.',100,NULL,35,1,1,365,40.0,20.0,'Утиные шеи являются деликатесом среди лакомств для собак и могут быть добавлены в их рацион с 3-х месячного возраста. Особенно полезны они для щенков в период смены зубов, так как помогают укрепить новые зубы, а также облегчают зуд и дискомфорт, которые сопровождают этот процесс.<br/><br/>Одна из основных причин, почему утиные шеи являются столь ценным лакомством для собак, заключается в их богатом содержании микроэлементов и витаминов. Это означает, что они не только удовлетворяют потребности организма в питательных веществах, но и способствуют общему здоровью собаки.<br/><br/>Особенно важно отметить, что утиные шеи являются полезными для суставов. Они содержат компоненты, которые способствуют укреплению и поддержанию здоровья суставов у собак.<br/><br/>Кроме того, утиные шеи являются 100% натуральным лакомством для собак. Это значит, что они не содержат искусственных добавок, консервантов или красителей, которые могут быть вредными для здоровья питомца.',2,'утиные шейки, шейки, лакомства, натуральное, утка',1,3,2,3,'100% утиная шея',NULL,100,230,11,'2024-02-11 20:01:19',0),
(16,'SPRD-02217','Губы говяжьи, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 500гр. (5-7шт.)',1000.00,1500.00,0,0,NULL,'4680614022177',516,30,400,300,'https://cdn1.ozone.ru/s3/multimedia-s/6853403188.jpg','https://cdn1.ozone.ru/s3/multimedia-8/6853403204.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6853403172.jpg',1,'Treat','Говяжьи губы, натуральное сушёное для собак TM.',500,6,1,1,1,365,64.0,8.0,'Говяжьи губы являются источником полезных веществ, таких как белки и макроэлементы. Они представляют собой хороший источник глютена, коллагена и кальция, особенно в хрящевой ткани. Глютен, коллаген и кальций имеют важное значение для различных аспектов здоровья наших питомцев. Белки, которые содержатся в говяжьих губах, являются основным строительным материалом для клеток организма собаки. Они играют важную роль в поддержании мышечной массы, здоровья кожи и шерсти, а также обеспечивают энергию для нормального функционирования организма. Коллаген, также присутствующий в говяжьих губах, является существенным компонентом соединительной ткани. Он поддерживает здоровье суставов, хрящей и связок, что особенно важно для собак, особенно для тех, кто старше. Кальций, которого также много содержится в говяжьих губах, играет ключевую роль в поддержании здоровья костей и зубов собаки. Кальций является неотъемлемым элементом для формирования и укрепления костной ткани, а также для поддержания здоровья зубов, особенно важного аспекта для здоровья собак в любом возрасте.Таким образом, говяжьи губы представляют собой лакомство, которое приносит удовольствие питомцу, а также имеет ценность в качестве источника полезных веществ. Естественное происхождение и содержание глютена, коллагена и кальция делают их прекрасным дополнением к рациону собаки.',1,'Говяжьи губы, губы, лакомство, натуральное, сушеное, собачьи лакомства,',1,3,2,1,'100% говяжьи губы','кальций',100,335,188,'2024-02-11 20:01:19',0),
(17,'SPRD-02563','Губы говяжьи, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 250гр. (2-4шт.)',550.00,700.00,0,0,NULL,'4680614025635',261,20,400,200,'https://cdn1.ozone.ru/s3/multimedia-s/6853403188.jpg','https://cdn1.ozone.ru/s3/multimedia-8/6853403204.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6853403172.jpg',1,'Treat','Говяжьи губы, натуральное сушёное для собак TM.',250,3,1,1,1,365,64.0,8.0,'Говяжьи губы являются источником полезных веществ, таких как белки и макроэлементы. Они представляют собой хороший источник глютена, коллагена и кальция, особенно в хрящевой ткани. Глютен, коллаген и кальций имеют важное значение для различных аспектов здоровья наших питомцев. Белки, которые содержатся в говяжьих губах, являются основным строительным материалом для клеток организма собаки. Они играют важную роль в поддержании мышечной массы, здоровья кожи и шерсти, а также обеспечивают энергию для нормального функционирования организма. Коллаген, также присутствующий в говяжьих губах, является существенным компонентом соединительной ткани. Он поддерживает здоровье суставов, хрящей и связок, что особенно важно для собак, особенно для тех, кто старше. Кальций, которого также много содержится в говяжьих губах, играет ключевую роль в поддержании здоровья костей и зубов собаки. Кальций является неотъемлемым элементом для формирования и укрепления костной ткани, а также для поддержания здоровья зубов, особенно важного аспекта для здоровья собак в любом возрасте.Таким образом, говяжьи губы представляют собой лакомство, которое приносит удовольствие питомцу, а также имеет ценность в качестве источника полезных веществ. Естественное происхождение и содержание глютена, коллагена и кальция делают их прекрасным дополнением к рациону собаки.',1,'Говяжьи губы, губы, лакомство, натуральное, сушеное, собачьи лакомства,',1,3,2,1,'100% говяжьи губы','кальций',100,335,188,'2024-02-11 20:01:19',0),
(18,'SPRD-02218','Губы говяжьи, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 1000гр. (11-13шт.)',1500.00,2500.00,0,0,NULL,'4680614022184',1021,35,400,400,'https://cdn1.ozone.ru/s3/multimedia-s/6853403188.jpg','https://cdn1.ozone.ru/s3/multimedia-8/6853403204.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6853403172.jpg',1,'Treat','Говяжьи губы, натуральное сушёное для собак TM.',1000,12,1,1,1,365,64.0,8.0,'Говяжьи губы являются источником полезных веществ, таких как белки и макроэлементы. Они представляют собой хороший источник глютена, коллагена и кальция, особенно в хрящевой ткани. Глютен, коллаген и кальций имеют важное значение для различных аспектов здоровья наших питомцев. Белки, которые содержатся в говяжьих губах, являются основным строительным материалом для клеток организма собаки. Они играют важную роль в поддержании мышечной массы, здоровья кожи и шерсти, а также обеспечивают энергию для нормального функционирования организма. Коллаген, также присутствующий в говяжьих губах, является существенным компонентом соединительной ткани. Он поддерживает здоровье суставов, хрящей и связок, что особенно важно для собак, особенно для тех, кто старше. Кальций, которого также много содержится в говяжьих губах, играет ключевую роль в поддержании здоровья костей и зубов собаки. Кальций является неотъемлемым элементом для формирования и укрепления костной ткани, а также для поддержания здоровья зубов, особенно важного аспекта для здоровья собак в любом возрасте.Таким образом, говяжьи губы представляют собой лакомство, которое приносит удовольствие питомцу, а также имеет ценность в качестве источника полезных веществ. Естественное происхождение и содержание глютена, коллагена и кальция делают их прекрасным дополнением к рациону собаки.',1,'Говяжьи губы, губы, лакомство, натуральное, сушеное, собачьи лакомства,',1,3,2,1,'100% говяжьи губы','кальций',100,335,188,'2024-02-11 20:01:19',0),
(19,'SPRD-02191','Говяжий нос, лакомство для собак, 100% натуральное SHEPHERD TM., 1000гр.',2300.00,2800.00,0,0,NULL,'4680614021910',1022,35,400,400,'https://cdn1.ozone.ru/s3/multimedia-f/6831130875.jpg','https://cdn1.ozone.ru/s3/multimedia-1/6855433417.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6831130874.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6831130873.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6831130877.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-i/6831130878.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6855433339.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6831130872.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6855433311.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6855433350.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6831130880.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-j/6831130879.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6855433345.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6831130876.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-b/6831130871.jpg',1,'Treat','Говяжий нос, натуральное для собак TM.',1000,1,1,1,1,365,64.0,8.0,'Говяжьи носы являются источником полезных веществ, таких как белки и макроэлементы. Они представляют собой хороший источник глютена, коллагена и кальция, особенно в хрящевой ткани. Глютен, коллаген и кальций имеют важное значение для различных аспектов здоровья наших питомцев. Белки, которые содержатся в говяжьих носах, являются основным строительным материалом для клеток организма собаки. Они играют важную роль в поддержании мышечной массы, здоровья кожи и шерсти, а также обеспечивают энергию для нормального функционирования организма. Коллаген, также присутствующий в говяжьих носах, является существенным компонентом соединительной ткани. Он поддерживает здоровье суставов, хрящей и связок, что особенно важно для собак, особенно для тех, кто старше. Кальций, которого также много содержится в говяжьих носах, играет ключевую роль в поддержании здоровья костей и зубов собаки. Кальций является неотъемлемым элементом для формирования и укрепления костной ткани, а также для поддержания здоровья зубов, особенно важного аспекта для здоровья собак в любом возрасте. Таким образом, говяжьи носы представляют собой лакомство, которое приносит удовольствие питомцу, а также имеет ценность в качестве источника полезных веществ. Естественное происхождение и содержание глютена, коллагена и кальция делают их прекрасным дополнением к рациону собаки.',1,'говяжий нос, нос, лакомства, собака, натуральное, говядина',1,3,2,1,'100% говяжий нос','кальций',100,335,188,'2024-02-11 20:01:19',0),
(20,'SPRD-02192','Говяжий нос, лакомство для собак, 100% натуральное SHEPHERD TM., 500гр.',1300.00,1400.00,0,0,NULL,'4680614021927',516,30,400,300,'https://cdn1.ozone.ru/s3/multimedia-1/6855433345.jpg','https://cdn1.ozone.ru/s3/multimedia-1/6855433417.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6831130874.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6831130873.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6831130877.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-i/6831130878.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6855433339.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6831130872.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6855433311.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6855433350.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6831130880.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-j/6831130879.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6831130876.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-b/6831130871.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-f/6831130875.jpg',1,'Treat','Говяжий нос, натуральное для собак TM.',500,1,1,1,1,365,64.0,8.0,'Говяжьи носы являются источником полезных веществ, таких как белки и макроэлементы. Они представляют собой хороший источник глютена, коллагена и кальция, особенно в хрящевой ткани. Глютен, коллаген и кальций имеют важное значение для различных аспектов здоровья наших питомцев. Белки, которые содержатся в говяжьих носах, являются основным строительным материалом для клеток организма собаки. Они играют важную роль в поддержании мышечной массы, здоровья кожи и шерсти, а также обеспечивают энергию для нормального функционирования организма. Коллаген, также присутствующий в говяжьих носах, является существенным компонентом соединительной ткани. Он поддерживает здоровье суставов, хрящей и связок, что особенно важно для собак, особенно для тех, кто старше. Кальций, которого также много содержится в говяжьих носах, играет ключевую роль в поддержании здоровья костей и зубов собаки. Кальций является неотъемлемым элементом для формирования и укрепления костной ткани, а также для поддержания здоровья зубов, особенно важного аспекта для здоровья собак в любом возрасте. Таким образом, говяжьи носы представляют собой лакомство, которое приносит удовольствие питомцу, а также имеет ценность в качестве источника полезных веществ. Естественное происхождение и содержание глютена, коллагена и кальция делают их прекрасным дополнением к рациону собаки.',1,'говяжий нос, нос, лакомства, собака, натуральное, говядина',1,3,2,1,'100% говяжий нос','кальций',100,335,188,'2024-02-11 20:01:19',0),
(21,'SPRD-02101','Говяжий нос, лакомство для собак, 100% натуральное SHEPHERD TM., 120гр.',300.00,350.00,0,0,NULL,'4680614021019',127,20,300,160,'https://cdn1.ozone.ru/s3/multimedia-1/6855433417.jpg','https://cdn1.ozone.ru/s3/multimedia-e/6831130874.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6831130873.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6831130877.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-i/6831130878.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6855433339.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6831130872.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6855433311.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6855433350.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6831130880.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-j/6831130879.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6855433345.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6831130876.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-b/6831130871.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-f/6831130875.jpg',1,'Treat','Говяжий нос, натуральное для собак TM.',120,1,1,1,1,365,64.0,8.0,'Говяжьи носы являются источником полезных веществ, таких как белки и макроэлементы. Они представляют собой хороший источник глютена, коллагена и кальция, особенно в хрящевой ткани. Глютен, коллаген и кальций имеют важное значение для различных аспектов здоровья наших питомцев. Белки, которые содержатся в говяжьих носах, являются основным строительным материалом для клеток организма собаки. Они играют важную роль в поддержании мышечной массы, здоровья кожи и шерсти, а также обеспечивают энергию для нормального функционирования организма. Коллаген, также присутствующий в говяжьих носах, является существенным компонентом соединительной ткани. Он поддерживает здоровье суставов, хрящей и связок, что особенно важно для собак, особенно для тех, кто старше. Кальций, которого также много содержится в говяжьих носах, играет ключевую роль в поддержании здоровья костей и зубов собаки. Кальций является неотъемлемым элементом для формирования и укрепления костной ткани, а также для поддержания здоровья зубов, особенно важного аспекта для здоровья собак в любом возрасте. Таким образом, говяжьи носы представляют собой лакомство, которое приносит удовольствие питомцу, а также имеет ценность в качестве источника полезных веществ. Естественное происхождение и содержание глютена, коллагена и кальция делают их прекрасным дополнением к рациону собаки.',1,'говяжий нос, нос, лакомства, собака, натуральное, говядина',1,3,2,1,'100% говяжий нос','кальций',100,335,188,'2024-02-11 20:01:19',0),
(22,'SPRD-18393','Mini set #1, набор натуральных лакомств для собак SHEPHERD TM., 210гр.',550.00,730.00,0,1,NULL,'OZN1333183938',230,30,400,300,'https://cdn1.ozone.ru/s3/multimedia-a/6856067818.jpg','https://cdn1.ozone.ru/s3/multimedia-w/6824759144.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6825829765.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-t/6821227721.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6821021731.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6819493516.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6856067817.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6829404979.jpg',1,'Treat','Mini set #1',210,7,1,1,1,365,NULL,NULL,'1.       Говяжье легкое кубик: 100% натуральное лакомство для собак - говяжье лёгкое, являющееся одним из самых популярных угощений для наших четвероногих друзей. Это лакомство не только вкусное, но и полезное для организма собаки, благодаря своему низкому содержанию калорий и отличной усвояемости. Его главной особенностью является отсутствие жиров и углеводов, а обилие качественного белка делает его идеальным выбором для собак всех возрастов и пород.<br/><br/>2.       Рубец говяжий сушёный – это настоящее 100% натуральное лакомство для собак. Хотя его внешний вид и запах могут показаться специфическими, этот продукт обладает богатым содержанием полезных микроэлементов, минералов и витаминов. Интересно то, что внутренняя часть желудка покрыта ворсинками, содержащими максимальное количество витаминов, пищеварительных ферментов и микроэлементов.<br/><br/>3.       Вымя представляет собой сложный продукт, требующий правильного выбора и обработки. Рекомендуется выбирать вымя, которое не сильно жирное, чтобы избежать проблем с пищеварением у собак. Хотя некоторые мнения могут считать вымя жирным продуктом, на самом деле оно содержит умеренное количество жиров. Это делает его идеальным вариантом для включения в рацион вашего питомца без опасений о лишнем весе.<br/><br/>4.       Говяжьи семенники являются продуктом, содержащим важные витамины, такие как В1, В2, В5, В6, В9, В12, РР, Е и Н. Однако, при варке большая часть этих витаминов разрушается. Поэтому, дегидрированный продукт, то есть сушеные семенники, сохраняют в себе максимальную пользу, так как в этом процессе витамины сохраняются в большей степени.<br/><br/>5.       Говяжья печень является источником множества важных питательных веществ, необходимых для поддержания здоровья организма. Она содержит витамины D, Е, РР, К, С и А, которые играют ключевую роль в поддержании иммунной системы, здоровья костей, мышц, кожи и зрения. Кроме того, в составе говяжьей печени присутствуют также полезные минералы, такие как медь, магний, калий, фтор и железо.<br/><br/>6.       Говяжьи почки, по своему составу и вкусовым качествам, очень близки к говяжьей печени. Однако, стоит отметить, что почки обладают гораздо более низкой калорийностью. Благодаря содержащимся в них водорастворимым витаминам группы B1, B2, В3, B5, B6, В9, B12, D, C и E, почки становятся полезным и ценным продуктом для поддержания здоровья питомца. Также, именно в почках высокая концентрация таких важных микроэлементов, как натрий, фосфор, йод, калий и кальций.<br/><br/>7.       Добавление говяжьей трахеи в рацион особенно рекомендуется для растущих собак, особенно в период смены зубов. Период смены зубов может быть неприятным для собаки и может сопровождаться зудом и неприятными ощущениями в деснах. Чистая и жевательная трахея говяжья может помочь облегчить этот процесс, предоставляя собаке что-то, что она может постоянно жевать, может снять дискомфорт и помочь в удалении молочных зубов и прорезании новых.',1,'набор, лакомства, натуральное, собака, сушёное,',1,3,2,NULL,'100% говядина',NULL,100,NULL,11,'2024-02-11 20:01:19',0),
(23,'SPRD-53410','Medium set#2, набор натуральных лакомств для собак SHEPHERD TM., 270гр.',650.00,800.00,0,1,NULL,'OZN1334534100',281,30,400,300,'https://cdn1.ozone.ru/s3/multimedia-g/6856872208.jpg','https://cdn1.ozone.ru/s3/multimedia-0/6822951480.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6820294935.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6821021731.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-t/6821227721.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6825829765.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6856872191.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6829404979.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6821019156.jpg',1,'Treat','MEDIUM SET #2, набор натуральных лакомств для собак TM.',260,8,1,1,1,365,NULL,NULL,'1.       Говяжье легкое кубик: 100% натуральное лакомство для собак - говяжье лёгкое, являющееся одним из самых популярных угощений для наших четвероногих друзей. Это лакомство не только вкусное, но и полезное для организма собаки, благодаря своему низкому содержанию калорий и отличной усвояемости. Его главной особенностью является отсутствие жиров и углеводов, а обилие качественного белка делает его идеальным выбором для собак всех возрастов и пород.<br/><br/>2.       Рубец говяжий сушёный – это настоящее 100% натуральное лакомство для собак. Хотя его внешний вид и запах могут показаться специфическими, этот продукт обладает богатым содержанием полезных микроэлементов, минералов и витаминов. Интересно то, что внутренняя часть желудка покрыта ворсинками, содержащими максимальное количество витаминов, пищеварительных ферментов и микроэлементов.<br/><br/>3.       Вымя представляет собой сложный продукт, требующий правильного выбора и обработки. Рекомендуется выбирать вымя, которое не сильно жирное, чтобы избежать проблем с пищеварением у собак. Хотя некоторые мнения могут считать вымя жирным продуктом, на самом деле оно содержит умеренное количество жиров. Это делает его идеальным вариантом для включения в рацион вашего питомца без опасений о лишнем весе.<br/><br/>4.       Говяжьи семенники являются продуктом, содержащим важные витамины, такие как В1, В2, В5, В6, В9, В12, РР, Е и Н. Однако, при варке большая часть этих витаминов разрушается. Поэтому, дегидрированный продукт, то есть сушеные семенники, сохраняют в себе максимальную пользу, так как в этом процессе витамины сохраняются в большей степени.<br/><br/>5.       Говяжья печень является источником множества важных питательных веществ, необходимых для поддержания здоровья организма. Она содержит витамины D, Е, РР, К, С и А, которые играют ключевую роль в поддержании иммунной системы, здоровья костей, мышц, кожи и зрения. Кроме того, в составе говяжьей печени присутствуют также полезные минералы, такие как медь, магний, калий, фтор и железо.<br/><br/>6.       Говяжьи почки, по своему составу и вкусовым качествам, очень близки к говяжьей печени. Однако, стоит отметить, что почки обладают гораздо более низкой калорийностью. Благодаря содержащимся в них водорастворимым витаминам группы B1, B2, В3, B5, B6, В9, B12, D, C и E, почки становятся полезным и ценным продуктом для поддержания здоровья питомца. Также, именно в почках высокая концентрация таких важных микроэлементов, как натрий, фосфор, йод, калий и кальций.<br/><br/>7.       Добавление говяжьей трахеи в рацион особенно рекомендуется для растущих собак, особенно в период смены зубов. Период смены зубов может быть неприятным для собаки и может сопровождаться зудом и неприятными ощущениями в деснах. Чистая и жевательная трахея говяжья может помочь облегчить этот процесс, предоставляя собаке что-то, что она может постоянно жевать, может снять дискомфорт и помочь в удалении молочных зубов и прорезании новых.<br/><br/>8.       100% натуральное лакомство для собак - говяжье сердце, являющееся огромным источником животного белка. Это продукт содержит витаминов группы В на 6 раз больше, чем мясо говядины, а также необходимое для плотоядных железо в полтора раза больше. Включение сердца в рацион питомцев, которые испытывают значительные физические нагрузки, особенно полезно.',1,'набор, говядина, лакомства, натуральное, собака,',1,3,2,NULL,'100% лёгкое, рубец, вымя, семенники, сердце, печень, почки, трахея',NULL,100,NULL,11,'2024-02-11 20:01:19',0),
(24,'SPRD-61281','MAXI Set#3, набор натуральных лакомств для собак SHEPHERD TM., 310гр.',850.00,1000.00,0,1,NULL,'OZN1334612812',330,30,400,300,'https://cdn1.ozone.ru/s3/multimedia-4/6856918240.jpg','https://cdn1.ozone.ru/s3/multimedia-0/6822951480.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6821021731.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-4/6830866516.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-t/6821227721.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-0/6820289892.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6821019156.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6825829765.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6829404979.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6856872191.jpg',1,'Treat','Набор собачьих лакомств',310,9,1,1,1,365,NULL,NULL,'1.       Говяжье легкое: 100% натуральное лакомство для собак - говяжье лёгкое, являющееся одним из самых популярных угощений для наших четвероногих друзей. Это лакомство не только вкусное, но и полезное для организма собаки, благодаря своему низкому содержанию калорий и отличной усваяемости. Его главной особенностью является отсутствие жиров и углеводов, а обилие качественного белка делает его идеальным выбором для собак всех возрастов и пород.<br/><br/>2.       Рубец говяжий сушёный – это настоящее 100% натуральное лакомство для собак. Хотя его внешний вид и запах могут показаться специфическими, этот продукт обладает богатым содержанием полезных микроэлементов, минералов и витаминов. Интересно то, что внутренняя часть желудка покрыта ворсинками, содержащими максимальное количество витаминов, пищеварительных ферментов и микроэлементов.<br/><br/>3.       Вымя представляет собой сложный продукт, требующий правильного выбора и обработки. Рекомендуется выбирать вымя, которое не сильно жирное, чтобы избежать проблем с пищеварением у собак. Хотя некоторые мнения могут считать вымя жирным продуктом, на самом деле оно содержит умеренное количество жиров. Это делает его идеальным вариантом для включения в рацион вашего питомца без опасений о лишнем весе.<br/><br/>4.       Говяжьи семенники являются продуктом, содержащим важные витамины, такие как В1, В2, В5, В6, В9, В12, РР, Е и Н. Однако, при варке большая часть этих витаминов разрушается. Поэтому, дегидрированный продукт, то есть сушеные семенники, сохраняют в себе максимальную пользу, так как в этом процессе витамины сохраняются в большей степени.<br/><br/>5.       Говяжья печень является источником множества важных питательных веществ, необходимых для поддержания здоровья организма. Она содержит витамины D, Е, РР, К, С и А, которые играют ключевую роль в поддержании иммунной системы, здоровья костей, мышц, кожи и зрения. Кроме того, в составе говяжьей печени присутствуют также полезные минералы, такие как медь, магний, калий, фтор и железо.<br/><br/>6.       Говяжьи почки, по своему составу и вкусовым качествам, очень близки к говяжьей печени. Однако, стоит отметить, что почки обладают гораздо более низкой калорийностью. Благодаря содержащимся в них водорастворимым витаминам группы B1, B2, В3, B5, B6, В9, B12, D, C и E, почки становятся полезным и ценным продуктом для поддержания здоровья питомца. Также, именно в почках высокая концентрация таких важных микроэлементов, как натрий, фосфор, йод, калий и кальций.<br/><br/>7.       Добавление говяжьей трахеи в рацион особенно рекомендуется для растущих собак, особенно в период смены зубов. Период смены зубов может быть неприятным для собаки и может сопровождаться зудом и неприятными ощущениями в деснах. Чистая и жевательная трахея говяжья может помочь облегчить этот процесс, предоставляя собаке что-то, что она может постоянно жевать, может снять дискомфорт и помочь в удалении молочных зубов и прорезании новых.<br/><br/>8.       100% натуральное лакомство для собак - говяжье сердце, являющееся огромным источником животного белка. Это продукт содержит витаминов группы В на 6 раз больше, чем мясо говядины, а также необходимое для плотоядных железо в полтора раза больше. Включение сердца в рацион питомцев, которые испытывают значительные физические нагрузки, особенно полезно.<br/><br/>9.       Становая жила, или сухожилие, представляет собой структуру, основными компонентом который являются коллаген. Кроме того, она обладает достаточным содержанием кальция, фосфора, магния и множества аминокислот. В качестве лакомства для собак, сушеная говяжья жила может быть полезным долгоиграющим лакомством.',1,'набор, говядина, лакомства, натуральное, собака,',1,3,2,NULL,'100% лёгкое, рубец, вымя, семенники, печень, почки, трахея, сердце, становая жила',NULL,100,NULL,11,'2024-02-11 20:01:19',0),
(25,'SPRD-02666','Шея индейки 1/2, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 1000г.',2500.00,3500.00,0,0,NULL,'4680614026663',1025,30,400,400,'https://cdn1.ozone.ru/s3/multimedia-1/6860878345.jpg','https://cdn1.ozone.ru/s3/multimedia-e/6860878574.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6860878487.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-7/6860878243.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-s/6860878516.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6860878104.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-o/6860878656.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6860878271.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6860878429.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6860878177.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-u/6860878698.jpg',1,'Treat','Шея индейки 1/2',1000,9,7,1,1,365,49.0,23.0,'Шея индейки является долгоиграющим лакомством для собак, которое обладает высоким содержанием животного белка и важных аминокислот. Это натуральное лакомство позволяет собакам получить не только вкусное удовольствие, но и полезные питательные вещества. Шея индейки богата витаминами B2, B5, B6, B12, PP, которые нужны для поддержки общего здоровья и нормального функционирования организма собаки. Также она содержит важные минералы, такие как фосфор, железо, медь, селен и цинк, которые необходимы для поддержания здоровья костей, мышц, кожи и шерсти.Состав шеи индейки включает хрящи и мягкие кости, которые обернуты в мясную оболочку. Это делает ее привлекательной для собак, так как они могут не только наслаждаться вкусом, но и чистить зубы и укреплять челюсти при жевании. Мы рекомендуем шею индейки как натуральное лакомство для вашей собаки. Оно обеспечивает балансированное питание и позволяет вашему питомцу получать все необходимые питательные вещества. Кроме того, шея индейки создает длительное занятие для собаки, что полезно для ее физического и умственного здоровья. Не забывайте следить за своим питомцем во время его развлечения с шейкой индейки и убедиться, что он не проглотит крупные кости целиком. В случае, если ваш питомец страдает от аллергии или имеет особые потребности в питании, проконсультируйтесь с ветеринарным врачом перед введением новой пищи в его рацион.',2,'Индейка, лакомство, натуральное, шея, собака, сушёное',1,3,6,1,'100% шея индейки','фосфор, железо, медь, цинк',100,408,188,'2024-02-11 20:01:19',0),
(26,'SPRD-02667','Шея индейки 1/2, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 500г.',1400.00,1750.00,0,0,NULL,'4680614026670',520,30,400,300,'https://cdn1.ozone.ru/s3/multimedia-u/6860878698.jpg','https://cdn1.ozone.ru/s3/multimedia-e/6860878574.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6860878487.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-7/6860878243.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-s/6860878516.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6860878104.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-o/6860878656.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6860878271.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6860878429.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6860878177.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6860878345.jpg',1,'Treat','Шея индейки 1/2',500,4,7,1,1,365,49.0,23.0,'Шея индейки является долгоиграющим лакомством для собак, которое обладает высоким содержанием животного белка и важных аминокислот. Это натуральное лакомство позволяет собакам получить не только вкусное удовольствие, но и полезные питательные вещества. Шея индейки богата витаминами B2, B5, B6, B12, PP, которые нужны для поддержки общего здоровья и нормального функционирования организма собаки. Также она содержит важные минералы, такие как фосфор, железо, медь, селен и цинк, которые необходимы для поддержания здоровья костей, мышц, кожи и шерсти.Состав шеи индейки включает хрящи и мягкие кости, которые обернуты в мясную оболочку. Это делает ее привлекательной для собак, так как они могут не только наслаждаться вкусом, но и чистить зубы и укреплять челюсти при жевании. Мы рекомендуем шею индейки как натуральное лакомство для вашей собаки. Оно обеспечивает балансированное питание и позволяет вашему питомцу получать все необходимые питательные вещества. Кроме того, шея индейки создает длительное занятие для собаки, что полезно для ее физического и умственного здоровья. Не забывайте следить за своим питомцем во время его развлечения с шейкой индейки и убедиться, что он не проглотит крупные кости целиком. В случае, если ваш питомец страдает от аллергии или имеет особые потребности в питании, проконсультируйтесь с ветеринарным врачом перед введением новой пищи в его рацион.',2,'Индейка, лакомство, натуральное, шея, собака, сушёное',1,3,6,1,'100% шея индейки','фосфор, железо, медь, цинк',100,408,188,'2024-02-11 20:01:19',0),
(27,'SPRD-02665','Шея индейки 1/2, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 100г.',300.00,350.00,0,0,NULL,'4680614026656',110,20,300,200,'https://cdn1.ozone.ru/s3/multimedia-e/6860878574.jpg','https://cdn1.ozone.ru/s3/multimedia-z/6860878487.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-7/6860878243.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-s/6860878516.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6860878104.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-o/6860878656.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6860878271.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6860878429.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6860878177.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-u/6860878698.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6860878345.jpg',1,'Treat','Шея индейки 1/2',100,1,7,1,1,365,49.0,23.0,'Шея индейки является долгоиграющим лакомством для собак, которое обладает высоким содержанием животного белка и важных аминокислот. Это натуральное лакомство позволяет собакам получить не только вкусное удовольствие, но и полезные питательные вещества. Шея индейки богата витаминами B2, B5, B6, B12, PP, которые нужны для поддержки общего здоровья и нормального функционирования организма собаки. Также она содержит важные минералы, такие как фосфор, железо, медь, селен и цинк, которые необходимы для поддержания здоровья костей, мышц, кожи и шерсти.Состав шеи индейки включает хрящи и мягкие кости, которые обернуты в мясную оболочку. Это делает ее привлекательной для собак, так как они могут не только наслаждаться вкусом, но и чистить зубы и укреплять челюсти при жевании. Мы рекомендуем шею индейки как натуральное лакомство для вашей собаки. Оно обеспечивает балансированное питание и позволяет вашему питомцу получать все необходимые питательные вещества. Кроме того, шея индейки создает длительное занятие для собаки, что полезно для ее физического и умственного здоровья. Не забывайте следить за своим питомцем во время его развлечения с шейкой индейки и убедиться, что он не проглотит крупные кости целиком. В случае, если ваш питомец страдает от аллергии или имеет особые потребности в питании, проконсультируйтесь с ветеринарным врачом перед введением новой пищи в его рацион.',2,'Индейка, лакомство, натуральное, шея, собака, сушёное',1,3,6,1,'100% шея индейки','фосфор, железо, медь, цинк',100,408,188,'2024-02-11 20:01:19',0),
(28,'SPRD-02277','Шея индейки кусочками, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 1000г.',2800.00,3300.00,0,0,NULL,'4680614022771',1020,30,400,300,'https://cdn1.ozone.ru/s3/multimedia-c/6861001080.jpg','https://cdn1.ozone.ru/s3/multimedia-i/6861001086.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6861001107.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6861001113.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-7/6861001075.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-0/6861001068.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-8/6861001076.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6861001069.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-2/6861001070.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6861001077.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6861001116.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6861001090.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-5/6861001073.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6861001081.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6861001088.jpg',1,'Treat','Шея индейки кусочками, сушёное для собак, 100% натуральное TM.',1000,NULL,7,1,1,365,49.0,23.0,'Шея индейки является долгоиграющим лакомством для собак, которое обладает высоким содержанием животного белка и важных аминокислот. Это натуральное лакомство позволяет собакам получить не только вкусное удовольствие, но и полезные питательные вещества. Шея индейки богата витаминами B2, B5, B6, B12, PP, которые нужны для поддержки общего здоровья и нормального функционирования организма собаки. Также она содержит важные минералы, такие как фосфор, железо, медь, селен и цинк, которые необходимы для поддержания здоровья костей, мышц, кожи и шерсти. Состав шеи индейки включает хрящи и мягкие кости, которые обернуты в мясную оболочку. Это делает ее привлекательной для собак, так как они могут не только наслаждаться вкусом, но и чистить зубы и укреплять челюсти при жевании. Мы рекомендуем шею индейки как натуральное лакомство для вашей собаки. Оно обеспечивает балансированное питание и позволяет вашему питомцу получать все необходимые питательные вещества. Кроме того, шея индейки создает длительное занятие для собаки, что полезно для ее физического и умственного здоровья. Не забывайте следить за своим питомцем во время его развлечения с шейкой индейки и убедиться, что он не проглотит крупные кости целиком. В случае, если ваш питомец страдает от аллергии или имеет особые потребности в питании, проконсультируйтесь с ветеринарным врачом перед введением новой пищи в его рацион',2,'индейка, лакомства, собака, натуральное, кусочки, шея,',1,3,6,1,'100% шея индейки','фосфор, железо, медь, цинк',100,408,11,'2024-02-11 20:01:19',0),
(29,'SPRD-02275','Шея индейки кусочками, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 100г.',320.00,350.00,0,0,NULL,'4680614022757',105,20,200,120,'https://cdn1.ozone.ru/s3/multimedia-2/6861001070.jpg','https://cdn1.ozone.ru/s3/multimedia-i/6861001086.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6861001107.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6861001113.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-7/6861001075.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-0/6861001068.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-8/6861001076.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6861001069.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6861001077.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6861001116.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6861001090.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-5/6861001073.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6861001080.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6861001081.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6861001088.jpg',1,'Treat','Шея индейки кусочками, сушёное для собак, 100% натуральное TM.',100,NULL,7,1,1,365,49.0,23.0,'Шея индейки является долгоиграющим лакомством для собак, которое обладает высоким содержанием животного белка и важных аминокислот. Это натуральное лакомство позволяет собакам получить не только вкусное удовольствие, но и полезные питательные вещества. Шея индейки богата витаминами B2, B5, B6, B12, PP, которые нужны для поддержки общего здоровья и нормального функционирования организма собаки. Также она содержит важные минералы, такие как фосфор, железо, медь, селен и цинк, которые необходимы для поддержания здоровья костей, мышц, кожи и шерсти. Состав шеи индейки включает хрящи и мягкие кости, которые обернуты в мясную оболочку. Это делает ее привлекательной для собак, так как они могут не только наслаждаться вкусом, но и чистить зубы и укреплять челюсти при жевании. Мы рекомендуем шею индейки как натуральное лакомство для вашей собаки. Оно обеспечивает балансированное питание и позволяет вашему питомцу получать все необходимые питательные вещества. Кроме того, шея индейки создает длительное занятие для собаки, что полезно для ее физического и умственного здоровья. Не забывайте следить за своим питомцем во время его развлечения с шейкой индейки и убедиться, что он не проглотит крупные кости целиком. В случае, если ваш питомец страдает от аллергии или имеет особые потребности в питании, проконсультируйтесь с ветеринарным врачом перед введением новой пищи в его рацион',2,'индейка, лакомства, собака, натуральное, кусочки, шея,',1,3,6,1,'100% шея индейки','фосфор, железо, медь, цинк',100,408,11,'2024-02-11 20:01:19',0),
(30,'SPRD-02276','Шея индейки кусочками, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 500г.',1500.00,1750.00,0,0,NULL,'4680614022764',515,20,300,200,'https://cdn1.ozone.ru/s3/multimedia-1/6861001069.jpg','https://cdn1.ozone.ru/s3/multimedia-i/6861001086.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6861001107.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6861001113.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-7/6861001075.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-0/6861001068.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-8/6861001076.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-2/6861001070.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6861001077.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6861001116.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6861001090.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-5/6861001073.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6861001080.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6861001081.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6861001088.jpg',1,'Treat','Шея индейки кусочками, сушёное для собак, 100% натуральное TM.',500,NULL,7,1,1,365,49.0,23.0,'Шея индейки является долгоиграющим лакомством для собак, которое обладает высоким содержанием животного белка и важных аминокислот. Это натуральное лакомство позволяет собакам получить не только вкусное удовольствие, но и полезные питательные вещества. Шея индейки богата витаминами B2, B5, B6, B12, PP, которые нужны для поддержки общего здоровья и нормального функционирования организма собаки. Также она содержит важные минералы, такие как фосфор, железо, медь, селен и цинк, которые необходимы для поддержания здоровья костей, мышц, кожи и шерсти. Состав шеи индейки включает хрящи и мягкие кости, которые обернуты в мясную оболочку. Это делает ее привлекательной для собак, так как они могут не только наслаждаться вкусом, но и чистить зубы и укреплять челюсти при жевании. Мы рекомендуем шею индейки как натуральное лакомство для вашей собаки. Оно обеспечивает балансированное питание и позволяет вашему питомцу получать все необходимые питательные вещества. Кроме того, шея индейки создает длительное занятие для собаки, что полезно для ее физического и умственного здоровья. Не забывайте следить за своим питомцем во время его развлечения с шейкой индейки и убедиться, что он не проглотит крупные кости целиком. В случае, если ваш питомец страдает от аллергии или имеет особые потребности в питании, проконсультируйтесь с ветеринарным врачом перед введением новой пищи в его рацион',2,'индейка, лакомства, собака, натуральное, кусочки, шея,',1,3,6,1,'100% шея индейки','фосфор, железо, медь, цинк',100,408,11,'2024-02-11 20:01:19',0),
(31,'SPRD-02280','Шея индейки, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 1000г.',2800.00,3800.00,0,0,NULL,'4680614022801',1020,30,400,400,'https://cdn1.ozone.ru/s3/multimedia-u/6860878698.jpg','https://cdn1.ozone.ru/s3/multimedia-d/6860878429.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6860878271.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6860878177.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6860878345.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6860878574.jpg',1,'Treat','Шея индейки',1000,1,7,1,1,365,49.0,23.0,'Шея индейки является долгоиграющим лакомством для собак, которое обладает высоким содержанием животного белка и важных аминокислот. Это натуральное лакомство позволяет собакам получить не только вкусное удовольствие, но и полезные питательные вещества. Шея индейки богата витаминами B2, B5, B6, B12, PP, которые нужны для поддержки общего здоровья и нормального функционирования организма собаки. Также она содержит важные минералы, такие как фосфор, железо, медь, селен и цинк, которые необходимы для поддержания здоровья костей, мышц, кожи и шерсти.Состав шеи индейки включает хрящи и мягкие кости, которые обернуты в мясную оболочку. Это делает ее привлекательной для собак, так как они могут не только наслаждаться вкусом, но и чистить зубы и укреплять челюсти при жевании. Мы рекомендуем шею индейки как натуральное лакомство для вашей собаки. Оно обеспечивает балансированное питание и позволяет вашему питомцу получать все необходимые питательные вещества. Кроме того, шея индейки создает длительное занятие для собаки, что полезно для ее физического и умственного здоровья. Не забывайте следить за своим питомцем во время его развлечения с шейкой индейки и убедиться, что он не проглотит крупные кости целиком. В случае, если ваш питомец страдает от аллергии или имеет особые потребности в питании, проконсультируйтесь с ветеринарным врачом перед введением новой пищи в его рацион',2,'лакомства, индейка, шея, шейка, собака, натуральное, для собак',1,3,6,1,'100% шея индейки','фосфор, железо, медь, цинк',100,408,11,'2024-02-11 20:01:19',0),
(32,'SPRD-02584','Шея индейки, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 200г.',320.00,420.00,0,0,NULL,'4680614025840',210,20,300,200,'https://cdn1.ozone.ru/s3/multimedia-u/6860878698.jpg','https://cdn1.ozone.ru/s3/multimedia-d/6860878429.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6860878271.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6860878177.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6860878345.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6860878574.jpg',1,'Treat','Шея индейки',200,1,7,1,1,365,49.0,23.0,'Шея индейки является долгоиграющим лакомством для собак, которое обладает высоким содержанием животного белка и важных аминокислот. Это натуральное лакомство позволяет собакам получить не только вкусное удовольствие, но и полезные питательные вещества. Шея индейки богата витаминами B2, B5, B6, B12, PP, которые нужны для поддержки общего здоровья и нормального функционирования организма собаки. Также она содержит важные минералы, такие как фосфор, железо, медь, селен и цинк, которые необходимы для поддержания здоровья костей, мышц, кожи и шерсти.Состав шеи индейки включает хрящи и мягкие кости, которые обернуты в мясную оболочку. Это делает ее привлекательной для собак, так как они могут не только наслаждаться вкусом, но и чистить зубы и укреплять челюсти при жевании. Мы рекомендуем шею индейки как натуральное лакомство для вашей собаки. Оно обеспечивает балансированное питание и позволяет вашему питомцу получать все необходимые питательные вещества. Кроме того, шея индейки создает длительное занятие для собаки, что полезно для ее физического и умственного здоровья. Не забывайте следить за своим питомцем во время его развлечения с шейкой индейки и убедиться, что он не проглотит крупные кости целиком. В случае, если ваш питомец страдает от аллергии или имеет особые потребности в питании, проконсультируйтесь с ветеринарным врачом перед введением новой пищи в его рацион',2,'лакомства, индейка, шея, шейка, собака, натуральное, для собак',1,3,6,1,'100% шея индейки','фосфор, железо, медь, цинк',100,408,11,'2024-02-11 20:01:19',0),
(33,'SPRD-02279','Шея индейки, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 500г.',1500.00,2000.00,0,0,NULL,'4680614022795',515,30,400,300,'https://cdn1.ozone.ru/s3/multimedia-u/6860878698.jpg','https://cdn1.ozone.ru/s3/multimedia-d/6860878429.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6860878271.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6860878177.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6860878345.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6860878574.jpg',1,'Treat','Шея индейки',500,1,7,1,1,365,49.0,23.0,'Шея индейки является долгоиграющим лакомством для собак, которое обладает высоким содержанием животного белка и важных аминокислот. Это натуральное лакомство позволяет собакам получить не только вкусное удовольствие, но и полезные питательные вещества. Шея индейки богата витаминами B2, B5, B6, B12, PP, которые нужны для поддержки общего здоровья и нормального функционирования организма собаки. Также она содержит важные минералы, такие как фосфор, железо, медь, селен и цинк, которые необходимы для поддержания здоровья костей, мышц, кожи и шерсти.Состав шеи индейки включает хрящи и мягкие кости, которые обернуты в мясную оболочку. Это делает ее привлекательной для собак, так как они могут не только наслаждаться вкусом, но и чистить зубы и укреплять челюсти при жевании. Мы рекомендуем шею индейки как натуральное лакомство для вашей собаки. Оно обеспечивает балансированное питание и позволяет вашему питомцу получать все необходимые питательные вещества. Кроме того, шея индейки создает длительное занятие для собаки, что полезно для ее физического и умственного здоровья. Не забывайте следить за своим питомцем во время его развлечения с шейкой индейки и убедиться, что он не проглотит крупные кости целиком. В случае, если ваш питомец страдает от аллергии или имеет особые потребности в питании, проконсультируйтесь с ветеринарным врачом перед введением новой пищи в его рацион',2,'лакомства, индейка, шея, шейка, собака, натуральное, для собак',1,3,6,1,'100% шея индейки','фосфор, железо, медь, цинк',100,408,11,'2024-02-11 20:01:19',0),
(34,'SPRD-02309','Лопаточный хрящ, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 3шт.',550.00,680.00,0,0,NULL,'4680614023099',320,30,400,300,'https://cdn1.ozone.ru/s3/multimedia-z/6850292003.jpg','https://cdn1.ozone.ru/s3/multimedia-y/6850292002.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6839446355.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-u/6839446350.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6839446354.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-0/6839446356.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-t/6850291961.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6839446351.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-x/6850291929.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-x/6839446353.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-s/6850291996.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-o/6850291956.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6850291988.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6850291999.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-s/6850291960.jpg',1,'Treat','Лопаточный хрящ',300,NULL,1,1,1,365,54.0,18.0,'Это лакомство, насыщенное различными минералами и аминокислотами, которые считаются важными для поддержания здоровья и развития хрящевой и костной ткани у вашего домашнего питомца. Оно также содержит большое количество кальция и коллагена, которые известны своим положительным воздействием на организм собак.Особое внимание стоит уделить хрящу лопатки, который является соединительной тканью белого цвета, составляющей суставные поверхности животного. В связи с наличием широкого спектра питательных веществ, лопаточный хрящ считается одним из лучших источников хондроитина. Хондроитин является важным компонентом хрящевой ткани и способствует ее здоровью и функционированию.Помимо хондроитина, лопаточный хрящ также богат коллагеном, глюкозамином, протеином и кальцием. Коллаген является ключевым компонентом соединительной ткани и способствует поддержанию здоровья суставов и хрящей. Глюкозамин способствует синтезу хондроитина и помогает улучшить подвижность суставов. Протеин является важным элементом питания для роста и развития собак. Кальций же является необходимым минералом для здоровья костей и зубов.Это лакомство является 100% натуральным. Учитывая потребности растущих щенков и молодых собак, это отличное решение давать лопаточный хрящ, добавление его в рацион способствует правильному развитию жевательного аппарата. Благодаря содержащимся в нем полезным веществам, данное лакомство может обеспечить вашего питомца дополнительным источником необходимых питательных элементов для поддержания оптимального состояния его костей, хрящей и суставов.',1,'Хрящ, лакомства для собак, натуральное, собака, лакомства, лопаточный хрящ, лопаточный',1,3,6,NULL,'100% лопаточный хрящ','кальций',100,383,11,'2024-02-11 20:01:19',0),
(35,'SPRD-02206','Лопаточный хрящ, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 500гр.',900.00,1100.00,0,0,NULL,'4680614022061',520,30,400,300,'https://cdn1.ozone.ru/s3/multimedia-k/6850291988.jpg','https://cdn1.ozone.ru/s3/multimedia-z/6850292003.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6850292002.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6839446355.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-u/6839446350.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6839446354.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-0/6839446356.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-t/6850291961.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6839446351.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-x/6850291929.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-x/6839446353.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-s/6850291996.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-o/6850291956.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6850291999.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-s/6850291960.jpg',1,'Treat','Лопаточный хрящ',500,NULL,1,1,1,365,54.0,18.0,'Это лакомство, насыщенное различными минералами и аминокислотами, которые считаются важными для поддержания здоровья и развития хрящевой и костной ткани у вашего домашнего питомца. Оно также содержит большое количество кальция и коллагена, которые известны своим положительным воздействием на организм собак.Особое внимание стоит уделить хрящу лопатки, который является соединительной тканью белого цвета, составляющей суставные поверхности животного. В связи с наличием широкого спектра питательных веществ, лопаточный хрящ считается одним из лучших источников хондроитина. Хондроитин является важным компонентом хрящевой ткани и способствует ее здоровью и функционированию.Помимо хондроитина, лопаточный хрящ также богат коллагеном, глюкозамином, протеином и кальцием. Коллаген является ключевым компонентом соединительной ткани и способствует поддержанию здоровья суставов и хрящей. Глюкозамин способствует синтезу хондроитина и помогает улучшить подвижность суставов. Протеин является важным элементом питания для роста и развития собак. Кальций же является необходимым минералом для здоровья костей и зубов.Это лакомство является 100% натуральным. Учитывая потребности растущих щенков и молодых собак, это отличное решение давать лопаточный хрящ, добавление его в рацион способствует правильному развитию жевательного аппарата. Благодаря содержащимся в нем полезным веществам, данное лакомство может обеспечить вашего питомца дополнительным источником необходимых питательных элементов для поддержания оптимального состояния его костей, хрящей и суставов.',1,'Хрящ, лакомства для собак, натуральное, собака, лакомства, лопаточный хрящ, лопаточный',1,3,6,NULL,'100% лопаточный хрящ','кальций',100,383,11,'2024-02-11 20:01:19',0),
(36,'SPRD-02207','Лопаточный хрящ, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 1000гр.',1600.00,1700.00,0,0,NULL,'4680614022078',1025,50,400,400,'https://cdn1.ozone.ru/s3/multimedia-v/6850291999.jpg','https://cdn1.ozone.ru/s3/multimedia-z/6850292003.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6850292002.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6839446355.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-u/6839446350.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6839446354.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-0/6839446356.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-t/6850291961.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6839446351.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-x/6850291929.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-x/6839446353.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-s/6850291996.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-o/6850291956.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6850291988.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-s/6850291960.jpg',1,'Treat','Лопаточный хрящ',1000,NULL,1,1,1,365,54.0,18.0,'Это лакомство, насыщенное различными минералами и аминокислотами, которые считаются важными для поддержания здоровья и развития хрящевой и костной ткани у вашего домашнего питомца. Оно также содержит большое количество кальция и коллагена, которые известны своим положительным воздействием на организм собак.Особое внимание стоит уделить хрящу лопатки, который является соединительной тканью белого цвета, составляющей суставные поверхности животного. В связи с наличием широкого спектра питательных веществ, лопаточный хрящ считается одним из лучших источников хондроитина. Хондроитин является важным компонентом хрящевой ткани и способствует ее здоровью и функционированию.Помимо хондроитина, лопаточный хрящ также богат коллагеном, глюкозамином, протеином и кальцием. Коллаген является ключевым компонентом соединительной ткани и способствует поддержанию здоровья суставов и хрящей. Глюкозамин способствует синтезу хондроитина и помогает улучшить подвижность суставов. Протеин является важным элементом питания для роста и развития собак. Кальций же является необходимым минералом для здоровья костей и зубов.Это лакомство является 100% натуральным. Учитывая потребности растущих щенков и молодых собак, это отличное решение давать лопаточный хрящ, добавление его в рацион способствует правильному развитию жевательного аппарата. Благодаря содержащимся в нем полезным веществам, данное лакомство может обеспечить вашего питомца дополнительным источником необходимых питательных элементов для поддержания оптимального состояния его костей, хрящей и суставов.',1,'Хрящ, лакомства для собак, натуральное, собака, лакомства, лопаточный хрящ, лопаточный',1,3,6,NULL,'100% лопаточный хрящ','кальций',100,383,11,'2024-02-11 20:01:19',0),
(37,'SPRD-02461','Баранье лёгкое палочки, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 500г.',1450.00,1650.00,0,1,NULL,'4680614024614',515,40,400,300,'https://cdn1.ozone.ru/s3/multimedia-v/6866344327.jpg','https://cdn1.ozone.ru/s3/multimedia-2/6866344334.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6866344331.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6866344333.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6866344335.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-4/6866344336.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-x/6866344329.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6866344330.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-u/6866344326.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-5/6866344337.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-0/6866344332.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-w/6866344328.jpg',1,'Treat','Баранье лёгкое палочки',500,NULL,3,NULL,1,365,16.0,2.0,'Баранье лёгкое – одно из самых популярных лакомств для собак. Этот продукт является низкокалорийным и отлично усваивается организмом собаки. Главное преимущество бараньего лёгкого заключается в его гипоаллергенных свойствах, что означает, что он мало вероятно вызовет аллергическую реакцию у собаки.Одной из основных особенностей бараньего лёгкого является его отсутствие жиров и углеводов, но при этом его состав богат качественным белком. Белок играет важную роль в развитии и поддержании здоровья собаки, и баранье лёгкое содержит его в достаточном количестве.Баранье лёгкое также рекомендуется для собак, которые испытывают проблемы со здоровьем зубов и челюстей, такие как изменения в возрасте или наличие неполной зубной формулы. Благодаря невысокой калорийности, баранье лёгкое представляет собой идеальную закуску для собак, которым нужно контролировать свой вес. При этом, важно отметить, что баранье лёгкое богато полезными витаминами и минералами, которые необходимы для поддержания общего хорошего здоровья собаки.Это 100% натуральное лакомство для собак, что гарантирует отсутствие искусственных консервантов или добавок, которые могут быть вредными для здоровья собаки. Баранье лёгкое предоставляет не только вкусное удовольствие для собаки, но и ценные питательные вещества, которые помогают поддерживать ее общее благополучие.',1,'Баран, лёгкое, лакомства, палочки, натуральное, сушёное',1,3,2,NULL,'100% баранье лёгкое',NULL,100,92,11,'2024-02-11 20:01:19',0),
(38,'SPRD-02462','Баранье лёгкое палочки, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 1000г.',2700.00,3200.00,0,1,NULL,'4680614024621',1020,50,400,400,'https://cdn1.ozone.ru/s3/multimedia-w/6866344328.jpg','https://cdn1.ozone.ru/s3/multimedia-2/6866344334.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-z/6866344331.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6866344333.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6866344335.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-4/6866344336.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-x/6866344329.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6866344330.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-u/6866344326.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-5/6866344337.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-0/6866344332.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6866344327.jpg',1,'Treat','Баранье лёгкое палочки',1000,NULL,3,NULL,1,365,16.0,2.0,'Баранье лёгкое – одно из самых популярных лакомств для собак. Этот продукт является низкокалорийным и отлично усваивается организмом собаки. Главное преимущество бараньего лёгкого заключается в его гипоаллергенных свойствах, что означает, что он мало вероятно вызовет аллергическую реакцию у собаки.Одной из основных особенностей бараньего лёгкого является его отсутствие жиров и углеводов, но при этом его состав богат качественным белком. Белок играет важную роль в развитии и поддержании здоровья собаки, и баранье лёгкое содержит его в достаточном количестве.Баранье лёгкое также рекомендуется для собак, которые испытывают проблемы со здоровьем зубов и челюстей, такие как изменения в возрасте или наличие неполной зубной формулы. Благодаря невысокой калорийности, баранье лёгкое представляет собой идеальную закуску для собак, которым нужно контролировать свой вес. При этом, важно отметить, что баранье лёгкое богато полезными витаминами и минералами, которые необходимы для поддержания общего хорошего здоровья собаки.Это 100% натуральное лакомство для собак, что гарантирует отсутствие искусственных консервантов или добавок, которые могут быть вредными для здоровья собаки. Баранье лёгкое предоставляет не только вкусное удовольствие для собаки, но и ценные питательные вещества, которые помогают поддерживать ее общее благополучие.',1,'Баран, лёгкое, лакомства, палочки, натуральное, сушёное',1,3,2,NULL,'100% баранье лёгкое',NULL,100,92,11,'2024-02-11 20:01:19',0),
(39,'SPRD-02460','Баранье лёгкое палочки, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 100г.',330.00,390.00,0,1,NULL,'4680614024607',109,20,245,160,'https://cdn1.ozone.ru/s3/multimedia-2/6866344334.jpg','https://cdn1.ozone.ru/s3/multimedia-z/6866344331.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6866344333.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-3/6866344335.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-4/6866344336.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-x/6866344329.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-y/6866344330.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-u/6866344326.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-5/6866344337.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-0/6866344332.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-v/6866344327.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-w/6866344328.jpg',1,'Treat','Баранье лёгкое палочки',100,1,3,NULL,1,365,16.0,2.0,'Баранье лёгкое – одно из самых популярных лакомств для собак. Этот продукт является низкокалорийным и отлично усваивается организмом собаки. Главное преимущество бараньего лёгкого заключается в его гипоаллергенных свойствах, что означает, что он мало вероятно вызовет аллергическую реакцию у собаки.Одной из основных особенностей бараньего лёгкого является его отсутствие жиров и углеводов, но при этом его состав богат качественным белком. Белок играет важную роль в развитии и поддержании здоровья собаки, и баранье лёгкое содержит его в достаточном количестве.Баранье лёгкое также рекомендуется для собак, которые испытывают проблемы со здоровьем зубов и челюстей, такие как изменения в возрасте или наличие неполной зубной формулы. Благодаря невысокой калорийности, баранье лёгкое представляет собой идеальную закуску для собак, которым нужно контролировать свой вес. При этом, важно отметить, что баранье лёгкое богато полезными витаминами и минералами, которые необходимы для поддержания общего хорошего здоровья собаки.Это 100% натуральное лакомство для собак, что гарантирует отсутствие искусственных консервантов или добавок, которые могут быть вредными для здоровья собаки. Баранье лёгкое предоставляет не только вкусное удовольствие для собаки, но и ценные питательные вещества, которые помогают поддерживать ее общее благополучие.',1,'Баран, лёгкое, лакомства, палочки, натуральное, сушёное',1,3,1,NULL,'100% баранье лёгкое',NULL,100,92,11,'2024-02-11 20:01:19',0),
(40,'SPRD-02457','Баранье лёгкое XL, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 500г.',1550.00,1700.00,0,1,NULL,'4680614024577',515,30,400,300,'https://cdn1.ozone.ru/s3/multimedia-m/6866354614.jpg','https://cdn1.ozone.ru/s3/multimedia-7/6866354599.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6866354612.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-i/6866354610.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-f/6866354607.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-8/6866354600.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-a/6866354602.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6866354608.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6866354601.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6866354605.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6866354606.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6866354609.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6866354604.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-j/6866354611.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-b/6866354603.jpg',1,'Treat','Баранье лёгкое XL',500,NULL,3,1,1,365,16.0,2.0,'Баранье лёгкое – одно из самых популярных лакомств для собак. Этот продукт является низкокалорийным и отлично усваивается организмом собаки. Главное преимущество бараньего лёгкого заключается в его гипоаллергенных свойствах, что означает, что он мало вероятно вызовет аллергическую реакцию у собаки.Одной из основных особенностей бараньего лёгкого является его отсутствие жиров и углеводов, но при этом его состав богат качественным белком. Белок играет важную роль в развитии и поддержании здоровья собаки, и баранье лёгкое содержит его в достаточном количестве.Баранье лёгкое также рекомендуется для собак, которые испытывают проблемы со здоровьем зубов и челюстей, такие как изменения в возрасте или наличие неполной зубной формулы. Благодаря невысокой калорийности, баранье лёгкое представляет собой идеальную закуску для собак, которым нужно контролировать свой вес. При этом, важно отметить, что баранье лёгкое богато полезными витаминами и минералами, которые необходимы для поддержания общего хорошего здоровья собаки.Это 100% натуральное лакомство для собак, что гарантирует отсутствие искусственных консервантов или добавок, которые могут быть вредными для здоровья собаки. Баранье лёгкое предоставляет не только вкусное удовольствие для собаки, но и ценные питательные вещества, которые помогают поддерживать ее общее благополучие.',1,'лёгкое, лакомство, собака, натуральное, сушёное, баран, баранина,',1,3,14,NULL,'100% баранье лёгкое',NULL,100,92,11,'2024-02-11 20:01:19',0),
(41,'SPRD-02456','Баранье лёгкое XL, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 100г.',330.00,360.00,0,1,NULL,'4680614024560',105,30,300,200,'https://cdn1.ozone.ru/s3/multimedia-m/6866354614.jpg','https://cdn1.ozone.ru/s3/multimedia-7/6866354599.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6866354612.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-i/6866354610.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-f/6866354607.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-8/6866354600.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-a/6866354602.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6866354608.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6866354601.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6866354605.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6866354606.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6866354609.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6866354604.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-j/6866354611.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-b/6866354603.jpg',1,'Treat','Баранье лёгкое XL',100,NULL,3,1,1,365,16.0,2.0,'Баранье лёгкое – одно из самых популярных лакомств для собак. Этот продукт является низкокалорийным и отлично усваивается организмом собаки. Главное преимущество бараньего лёгкого заключается в его гипоаллергенных свойствах, что означает, что он мало вероятно вызовет аллергическую реакцию у собаки.Одной из основных особенностей бараньего лёгкого является его отсутствие жиров и углеводов, но при этом его состав богат качественным белком. Белок играет важную роль в развитии и поддержании здоровья собаки, и баранье лёгкое содержит его в достаточном количестве.Баранье лёгкое также рекомендуется для собак, которые испытывают проблемы со здоровьем зубов и челюстей, такие как изменения в возрасте или наличие неполной зубной формулы. Благодаря невысокой калорийности, баранье лёгкое представляет собой идеальную закуску для собак, которым нужно контролировать свой вес. При этом, важно отметить, что баранье лёгкое богато полезными витаминами и минералами, которые необходимы для поддержания общего хорошего здоровья собаки.Это 100% натуральное лакомство для собак, что гарантирует отсутствие искусственных консервантов или добавок, которые могут быть вредными для здоровья собаки. Баранье лёгкое предоставляет не только вкусное удовольствие для собаки, но и ценные питательные вещества, которые помогают поддерживать ее общее благополучие.',1,'лёгкое, лакомство, собака, натуральное, сушёное, баран, баранина,',1,3,14,NULL,'100% баранье лёгкое',NULL,100,92,11,'2024-02-11 20:01:19',0),
(42,'SPRD-02458','Баранье лёгкое XL, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 1000г.',2800.00,3300.00,0,1,NULL,'4680614024584',1020,40,400,400,'https://cdn1.ozone.ru/s3/multimedia-m/6866354614.jpg','https://cdn1.ozone.ru/s3/multimedia-7/6866354599.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6866354612.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-i/6866354610.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-f/6866354607.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-8/6866354600.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-a/6866354602.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6866354608.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6866354601.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6866354605.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6866354606.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6866354609.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6866354604.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-j/6866354611.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-b/6866354603.jpg',1,'Treat','Баранье лёгкое XL',1000,NULL,3,1,1,365,16.0,2.0,'Баранье лёгкое – одно из самых популярных лакомств для собак. Этот продукт является низкокалорийным и отлично усваивается организмом собаки. Главное преимущество бараньего лёгкого заключается в его гипоаллергенных свойствах, что означает, что он мало вероятно вызовет аллергическую реакцию у собаки.Одной из основных особенностей бараньего лёгкого является его отсутствие жиров и углеводов, но при этом его состав богат качественным белком. Белок играет важную роль в развитии и поддержании здоровья собаки, и баранье лёгкое содержит его в достаточном количестве.Баранье лёгкое также рекомендуется для собак, которые испытывают проблемы со здоровьем зубов и челюстей, такие как изменения в возрасте или наличие неполной зубной формулы. Благодаря невысокой калорийности, баранье лёгкое представляет собой идеальную закуску для собак, которым нужно контролировать свой вес. При этом, важно отметить, что баранье лёгкое богато полезными витаминами и минералами, которые необходимы для поддержания общего хорошего здоровья собаки.Это 100% натуральное лакомство для собак, что гарантирует отсутствие искусственных консервантов или добавок, которые могут быть вредными для здоровья собаки. Баранье лёгкое предоставляет не только вкусное удовольствие для собаки, но и ценные питательные вещества, которые помогают поддерживать ее общее благополучие.',1,'лёгкое, лакомство, собака, натуральное, сушёное, баран, баранина,',1,3,14,NULL,'100% баранье лёгкое',NULL,100,92,11,'2024-02-11 20:01:19',0),
(43,'SPRD-02304','Бараний набор XS, сушёное лакомство для собак SHEPHERD TM.',320.00,400.00,0,1,NULL,'4680614023044',100,30,225,135,'https://cdn1.ozone.ru/s3/multimedia-i/6866361054.jpg','https://cdn1.ozone.ru/s3/multimedia-h/6866361053.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-j/6866361055.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6866361056.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-n/6866361059.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-p/6866360989.jpg',1,'Treat','Бараний набор XS',110,1,3,1,1,365,NULL,NULL,NULL,1,'Баран, набор, лакомства, собака, натуральное',1,3,6,6,'100% калтык и трахея',NULL,100,NULL,11,'2024-02-11 20:01:19',0),
(44,'SPRD-02233','Бараний рубец мелкорубленый, натуральное лакомство для собак, 100% натуральное SHEPHERD TM., 100г.',320.00,350.00,0,1,NULL,'4680614022337',105,30,300,200,'https://cdn1.ozone.ru/s3/multimedia-b/6868481519.jpg','https://cdn1.ozone.ru/s3/multimedia-j/6868481527.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-p/6868481497.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6868481525.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-s/6868481500.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6868481485.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6868481498.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6868481494.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-j/6868481491.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-t/6868481501.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6868481528.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6868481488.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-u/6868481502.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-r/6868481499.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6868481534.jpg',1,'Treat','Бараний рубец мелкорубленый',100,NULL,3,NULL,1,365,11.0,4.0,'Рубец является первым отделом желудка у жвачных животных, таких как коровы, овцы и козы. Все мы знаем он весьма полезен для собак. Баранина сама по себе считается одним из наиболее полезных видов мяса для питания собак, и, следовательно, неудивительно, что и бараний рубец обладает ценными свойствами. В его составе содержится значительное количество ферментов и аминокислот, таких как витамин РР и различные химические элементы, включая кальций, серу, магний, натрий и калий. Эти полезные компоненты, содержащиеся в бараньем рубце, способны оказывать положительное влияние на пищеварительную систему собаки. Ферменты помогают улучшить пищеварение и обменные процессы в организме, а аминокислоты служат строительными блоками для формирования белка, необходимого для роста и развития собаки. Кроме того, витамин РР, содержащийся в бараньем рубце, играет важную роль в обеспечении здоровья кожи, нервной системы и обмена веществ собаки. Химические элементы в составе рубца также имеют важное значение для поддержания нормальной работы организма и обеспечения его энергией. Важно отметить, что бараний рубец, предлагаемый в качестве лакомства для собак, являются 100% натуральным. Безопасный источником питания, который может дополнить основной рацион собаки и обеспечить ей дополнительные питательные вещества. В заключение, бараний рубец признан полезным питанием для собак, благодаря их содержанию важных ферментов, аминокислот и других питательных веществ. Этот натуральный продукт может способствовать улучшению пищеварения и обмена веществ, а также поддерживать здоровье вашего питомца.Просим обратить внимание, что рубец - особенно богат белком, поэтому, чрезмерное употребление этого лакомства может привести к нарушению пищеварения Вашего питомца. Соблюдайте норму и помните, ЛАКОМСТВА - это не питание!',1,'Лакомства, SHEPHERD, ШЕПАРД, для собак, натуральное, для собак, рубец, бараний',1,3,6,NULL,'100% бараний рубец','кальций, магний, калий, натрий',100,82,11,'2024-02-11 20:01:19',0),
(45,'SPRD-02234','Бараний рубец мелкорубленый, натуральное лакомство для собак, 100% натуральное SHEPHERD TM., 500г.',1500.00,1700.00,0,1,NULL,'4680614022344',510,40,400,300,'https://cdn1.ozone.ru/s3/multimedia-h/6868481525.jpg','https://cdn1.ozone.ru/s3/multimedia-j/6868481527.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-p/6868481497.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-s/6868481500.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6868481485.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6868481498.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-b/6868481519.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6868481494.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-j/6868481491.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-t/6868481501.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6868481528.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6868481488.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-u/6868481502.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-r/6868481499.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6868481534.jpg',1,'Treat','Бараний рубец мелкорубленый',500,NULL,3,NULL,1,365,11.0,4.0,'Рубец является первым отделом желудка у жвачных животных, таких как коровы, овцы и козы. Все мы знаем он весьма полезен для собак. Баранина сама по себе считается одним из наиболее полезных видов мяса для питания собак, и, следовательно, неудивительно, что и бараний рубец обладает ценными свойствами. В его составе содержится значительное количество ферментов и аминокислот, таких как витамин РР и различные химические элементы, включая кальций, серу, магний, натрий и калий. Эти полезные компоненты, содержащиеся в бараньем рубце, способны оказывать положительное влияние на пищеварительную систему собаки. Ферменты помогают улучшить пищеварение и обменные процессы в организме, а аминокислоты служат строительными блоками для формирования белка, необходимого для роста и развития собаки. Кроме того, витамин РР, содержащийся в бараньем рубце, играет важную роль в обеспечении здоровья кожи, нервной системы и обмена веществ собаки. Химические элементы в составе рубца также имеют важное значение для поддержания нормальной работы организма и обеспечения его энергией. Важно отметить, что бараний рубец, предлагаемый в качестве лакомства для собак, являются 100% натуральным. Безопасный источником питания, который может дополнить основной рацион собаки и обеспечить ей дополнительные питательные вещества. В заключение, бараний рубец признан полезным питанием для собак, благодаря их содержанию важных ферментов, аминокислот и других питательных веществ. Этот натуральный продукт может способствовать улучшению пищеварения и обмена веществ, а также поддерживать здоровье вашего питомца.Просим обратить внимание, что рубец - особенно богат белком, поэтому, чрезмерное употребление этого лакомства может привести к нарушению пищеварения Вашего питомца. Соблюдайте норму и помните, ЛАКОМСТВА - это не питание!',1,'Лакомства, SHEPHERD, ШЕПАРД, для собак, натуральное, для собак, рубец, бараний',1,3,6,NULL,'100% бараний рубец','кальций, магний, калий, натрий',100,82,11,'2024-02-11 20:01:19',0),
(46,'SPRD-02235','Бараний рубец мелкорубленый, натуральное лакомство для собак, 100% натуральное SHEPHERD TM., 1000г.',2900.00,3200.00,0,1,NULL,'4680614022351',1020,50,400,400,'https://cdn1.ozone.ru/s3/multimedia-q/6868481498.jpg','https://cdn1.ozone.ru/s3/multimedia-j/6868481527.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-p/6868481497.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-h/6868481525.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-s/6868481500.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-d/6868481485.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-b/6868481519.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-m/6868481494.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-j/6868481491.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-t/6868481501.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-k/6868481528.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6868481488.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-u/6868481502.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-r/6868481499.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6868481534.jpg',1,'Treat','Бараний рубец мелкорубленый',1000,NULL,3,NULL,1,365,11.0,4.0,'Рубец является первым отделом желудка у жвачных животных, таких как коровы, овцы и козы. Все мы знаем он весьма полезен для собак. Баранина сама по себе считается одним из наиболее полезных видов мяса для питания собак, и, следовательно, неудивительно, что и бараний рубец обладает ценными свойствами. В его составе содержится значительное количество ферментов и аминокислот, таких как витамин РР и различные химические элементы, включая кальций, серу, магний, натрий и калий. Эти полезные компоненты, содержащиеся в бараньем рубце, способны оказывать положительное влияние на пищеварительную систему собаки. Ферменты помогают улучшить пищеварение и обменные процессы в организме, а аминокислоты служат строительными блоками для формирования белка, необходимого для роста и развития собаки. Кроме того, витамин РР, содержащийся в бараньем рубце, играет важную роль в обеспечении здоровья кожи, нервной системы и обмена веществ собаки. Химические элементы в составе рубца также имеют важное значение для поддержания нормальной работы организма и обеспечения его энергией. Важно отметить, что бараний рубец, предлагаемый в качестве лакомства для собак, являются 100% натуральным. Безопасный источником питания, который может дополнить основной рацион собаки и обеспечить ей дополнительные питательные вещества. В заключение, бараний рубец признан полезным питанием для собак, благодаря их содержанию важных ферментов, аминокислот и других питательных веществ. Этот натуральный продукт может способствовать улучшению пищеварения и обмена веществ, а также поддерживать здоровье вашего питомца.Просим обратить внимание, что рубец - особенно богат белком, поэтому, чрезмерное употребление этого лакомства может привести к нарушению пищеварения Вашего питомца. Соблюдайте норму и помните, ЛАКОМСТВА - это не питание!',1,'Лакомства, SHEPHERD, ШЕПАРД, для собак, натуральное, для собак, рубец, бараний',1,3,6,NULL,'100% бараний рубец','кальций, магний, калий, натрий',100,82,11,'2024-02-11 20:01:19',0),
(47,'SPRD-02319','Утиные трахеи, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 1000г.',3400.00,5100.00,0,1,NULL,'4680614023198',1020,50,400,400,'https://cdn1.ozone.ru/s3/multimedia-7/6876030499.jpg','https://cdn1.ozone.ru/s3/multimedia-4/6876030496.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6876030506.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-5/6876030533.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-p/6876030517.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6876030493.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6876030501.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-2/6876030494.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-t/6876030521.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6876030518.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6876030508.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-n/6876030515.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6876030504.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6876030534.jpg',1,'Treat','Утиные трахеи',1000,NULL,35,NULL,1,365,45.0,20.0,'Трахеи утиные – это натуральное и ароматное угощение для ваших домашних питомцев, которое рекомендуется давать животным старше 3 месяцев. Продукция создается с использованием деликатной технологии сушки в профессиональных дегидраторах, которая позволяет сохранить все ценные витамины и микроэлементы.Утиные трахеи полностью натуральные, и в их составе отсутствуют ГМО, консерванты, красители или аллергены. Это значит, что они безопасны для здоровья и благополучия вашего питомца.Этот субпродукт особенно полезен для щенков и котят в период смены зубов. В это время животные нуждаются в дополнительной поддержке для правильного роста и развития новых зубов. Утиные трахеи содержат в себе необходимые питательные вещества, которые помогают обеспечить здоровое и сильное зубочелюстной аппарат.Регулярное потребление утиных трахей помогает предотвратить проблемы, связанные с ухудшением зубного здоровья у питомца, такие как зубной камень, пародонтоз, воспаление десен и неприятный запах изо рта. Специалисты рекомендуют включать утиные трахеи в рацион домашнего питомца, чтобы поддерживать его зубы в здоровом состоянии и предотвращать развитие зубных проблем.Утиная трахея – это небольшая дыхательная трубка, не содержащая мясных или жировых отложений. Благодаря своей структуре и составу, этот продукт способствует укреплению сочленений и хрящей у ваших домашних питомцев. При потреблении утиных трахей, челюсти животных тренируются, а зубы освобождаются от налета и камня.Натуральные утиные трахеи являются превосходным дополнением к рациону вашего питомца, которое не только приносит удовольствие животному, но и способствует его общему здоровью. Благодаря содержащимся в них ценным питательным веществам, утиные трахеи помогают поддерживать здоровые зубы, суставы и хрящи у питомца.',2,'Трахея, утка, утиные трахеи, лакомство, для собак, натуральное',1,3,2,NULL,'100% утиная трахея',NULL,100,390,11,'2024-02-11 20:01:19',0),
(48,'SPRD-02318','Утиные трахеи, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 500г.',1800.00,2400.00,0,1,NULL,'4680614023181',515,40,400,300,'https://cdn1.ozone.ru/s3/multimedia-c/6876030504.jpg','https://cdn1.ozone.ru/s3/multimedia-4/6876030496.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-e/6876030506.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-5/6876030533.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-p/6876030517.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6876030493.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6876030501.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-7/6876030499.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-2/6876030494.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-t/6876030521.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6876030518.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6876030508.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-n/6876030515.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6876030534.jpg',1,'Treat','Утиные трахеи',500,NULL,35,NULL,1,365,45.0,20.0,'Трахеи утиные – это натуральное и ароматное угощение для ваших домашних питомцев, которое рекомендуется давать животным старше 3 месяцев. Продукция создается с использованием деликатной технологии сушки в профессиональных дегидраторах, которая позволяет сохранить все ценные витамины и микроэлементы.Утиные трахеи полностью натуральные, и в их составе отсутствуют ГМО, консерванты, красители или аллергены. Это значит, что они безопасны для здоровья и благополучия вашего питомца.Этот субпродукт особенно полезен для щенков и котят в период смены зубов. В это время животные нуждаются в дополнительной поддержке для правильного роста и развития новых зубов. Утиные трахеи содержат в себе необходимые питательные вещества, которые помогают обеспечить здоровое и сильное зубочелюстной аппарат.Регулярное потребление утиных трахей помогает предотвратить проблемы, связанные с ухудшением зубного здоровья у питомца, такие как зубной камень, пародонтоз, воспаление десен и неприятный запах изо рта. Специалисты рекомендуют включать утиные трахеи в рацион домашнего питомца, чтобы поддерживать его зубы в здоровом состоянии и предотвращать развитие зубных проблем.Утиная трахея – это небольшая дыхательная трубка, не содержащая мясных или жировых отложений. Благодаря своей структуре и составу, этот продукт способствует укреплению сочленений и хрящей у ваших домашних питомцев. При потреблении утиных трахей, челюсти животных тренируются, а зубы освобождаются от налета и камня.Натуральные утиные трахеи являются превосходным дополнением к рациону вашего питомца, которое не только приносит удовольствие животному, но и способствует его общему здоровью. Благодаря содержащимся в них ценным питательным веществам, утиные трахеи помогают поддерживать здоровые зубы, суставы и хрящи у питомца.',2,'Трахея, утка, утиные трахеи, лакомство, для собак, натуральное',1,3,2,NULL,'100% утиная трахея',NULL,100,390,11,'2024-02-11 20:01:19',0),
(49,'SPRD-02317','Утиные трахеи, сушёное лакомство для собак, 100% натуральное SHEPHERD TM., 100г.',400.00,550.00,0,1,NULL,'4680614023174',105,30,200,300,'https://cdn1.ozone.ru/s3/multimedia-4/6876030496.jpg','https://cdn1.ozone.ru/s3/multimedia-e/6876030506.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-5/6876030533.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-p/6876030517.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-1/6876030493.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-9/6876030501.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-7/6876030499.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-2/6876030494.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-t/6876030521.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-q/6876030518.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-g/6876030508.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-n/6876030515.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-c/6876030504.jpg\nhttps://cdn1.ozone.ru/s3/multimedia-6/6876030534.jpg',1,'Treat','Утиные трахеи',100,NULL,35,NULL,1,365,45.0,20.0,'Трахеи утиные – это натуральное и ароматное угощение для ваших домашних питомцев, которое рекомендуется давать животным старше 3 месяцев. Продукция создается с использованием деликатной технологии сушки в профессиональных дегидраторах, которая позволяет сохранить все ценные витамины и микроэлементы.Утиные трахеи полностью натуральные, и в их составе отсутствуют ГМО, консерванты, красители или аллергены. Это значит, что они безопасны для здоровья и благополучия вашего питомца.Этот субпродукт особенно полезен для щенков и котят в период смены зубов. В это время животные нуждаются в дополнительной поддержке для правильного роста и развития новых зубов. Утиные трахеи содержат в себе необходимые питательные вещества, которые помогают обеспечить здоровое и сильное зубочелюстной аппарат.Регулярное потребление утиных трахей помогает предотвратить проблемы, связанные с ухудшением зубного здоровья у питомца, такие как зубной камень, пародонтоз, воспаление десен и неприятный запах изо рта. Специалисты рекомендуют включать утиные трахеи в рацион домашнего питомца, чтобы поддерживать его зубы в здоровом состоянии и предотвращать развитие зубных проблем.Утиная трахея – это небольшая дыхательная трубка, не содержащая мясных или жировых отложений. Благодаря своей структуре и составу, этот продукт способствует укреплению сочленений и хрящей у ваших домашних питомцев. При потреблении утиных трахей, челюсти животных тренируются, а зубы освобождаются от налета и камня.Натуральные утиные трахеи являются превосходным дополнением к рациону вашего питомца, которое не только приносит удовольствие животному, но и способствует его общему здоровью. Благодаря содержащимся в них ценным питательным веществам, утиные трахеи помогают поддерживать здоровые зубы, суставы и хрящи у питомца.',2,'Трахея, утка, утиные трахеи, лакомство, для собак, натуральное',1,3,2,NULL,'100% утиная трахея',NULL,100,390,11,'2024-02-11 20:01:19',0);
/*!40000 ALTER TABLE `foods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hardness`
--

DROP TABLE IF EXISTS `hardness`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hardness` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `hardness_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hardness`
--

LOCK TABLES `hardness` WRITE;
/*!40000 ALTER TABLE `hardness` DISABLE KEYS */;
INSERT INTO `hardness` VALUES
(4,'Жевательные'),
(6,'Мягкие'),
(2,'Прессованные'),
(3,'Сушеные и вяленые'),
(1,'Твердые'),
(5,'Хрустящие');
/*!40000 ALTER TABLE `hardness` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingridients`
--

DROP TABLE IF EXISTS `ingridients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingridients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ingridients_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingridients`
--

LOCK TABLES `ingridients` WRITE;
/*!40000 ALTER TABLE `ingridients` DISABLE KEYS */;
INSERT INTO `ingridients` VALUES
(4,'Злаки'),
(1,'Мясо'),
(2,'Птица'),
(3,'Рыба');
/*!40000 ALTER TABLE `ingridients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `food_id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `quality` tinyint(4) NOT NULL,
  `ordered_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `orders_food_id_idx` (`food_id`),
  KEY `orders_user_id_fkey` (`user_id`),
  CONSTRAINT `orders_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `orders_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packages`
--

DROP TABLE IF EXISTS `packages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `packages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `packages_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=729 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packages`
--

LOCK TABLES `packages` WRITE;
/*!40000 ALTER TABLE `packages` DISABLE KEYS */;
INSERT INTO `packages` VALUES
(176,'Bag-in-Box'),
(177,'Box Set'),
(170,'Box Slider'),
(169,'DigiBook'),
(168,'DigiPak'),
(163,'DigiSleeve'),
(180,'DVD-BOX'),
(88,'Easy pack'),
(167,'Jewel Case'),
(166,'Keep case'),
(158,'Media-Box'),
(164,'RETAIL BOX'),
(162,'Slim Case'),
(159,'Super Jewel Box'),
(156,'Super jewel case'),
(104,'Аэрозольный баллон'),
(14,'Багетная рама, целлофановая упаковка'),
(157,'Банка'),
(10,'Банка металлическая'),
(115,'Банка с дозатором'),
(160,'Банка с ключом'),
(74,'Банка-туба'),
(66,'Бант'),
(51,'Без упаковки'),
(11,'Блистер'),
(84,'Блок'),
(165,'Бочонок'),
(161,'Бумажная банка'),
(5,'Бумажная обертка'),
(155,'Бумажный конверт'),
(33,'Бумажный пакет'),
(93,'Бумажный стакан'),
(94,'Бутылка с дозатором'),
(153,'Бутыль'),
(45,'Вакуумная упаковка'),
(8,'Ведерко'),
(181,'Воздушно-пузырчатая пленка'),
(151,'Гофропакет'),
(154,'Гофропачка'),
(100,'Гуала пак'),
(178,'Двойной шприц'),
(28,'Деревянная коробка'),
(70,'Деревянная шкатулка'),
(121,'Деревянный бочонок'),
(47,'Деревянный ящик'),
(145,'Джутовый мешок'),
(120,'Дип-пот'),
(40,'Дисплей'),
(72,'Дой-пак'),
(152,'Дой-пак с дозатором'),
(85,'Жестяная банка'),
(113,'Жестяная банка с ключом'),
(87,'Жестяная бутылка'),
(59,'Жестяная шкатулка'),
(171,'Жестяной баллон'),
(173,'Зип-пакет'),
(146,'Искусственная оболочка'),
(148,'Канистра металлическая'),
(89,'Картонная коробка'),
(63,'Картонная шкатулка'),
(172,'Картонно-набивной барабан'),
(143,'Картонный бокс + DigiPak'),
(147,'Картонный бокс + Jewel Case'),
(141,'Картонный бокс + конверт'),
(142,'Картридж'),
(3,'Кейс пластиковый'),
(83,'Керамическая чайница'),
(62,'Конверт'),
(6,'Контейнер'),
(144,'Корзина'),
(68,'Корзинка'),
(107,'Коробка'),
(9,'Коробка деревянная'),
(1,'Коробка металлическая'),
(2,'Коробка пластиковая'),
(128,'Коробка-\"книжка\"'),
(82,'Коррекс'),
(58,'Косметичка'),
(102,'Ламистер'),
(55,'Лента'),
(90,'Лоток'),
(149,'Мельница'),
(98,'Металлизированная полипропиленовая пленка'),
(23,'Металлическая банка'),
(182,'Металлическая бочка'),
(26,'Металлическая коробка'),
(150,'Металлический бокс'),
(140,'Металлический бокс + конверт'),
(50,'Металлический кейс'),
(133,'Металлическое ведро'),
(96,'Мешок'),
(35,'Мешок на кулиске'),
(60,'Музыкальная шкатулка'),
(71,'Набор 6/30'),
(131,'Натуральная оболочка'),
(65,'Органза'),
(109,'Пакет'),
(13,'Пакет бумажный'),
(79,'Пакет для бутылки'),
(12,'Пакет подарочный'),
(73,'Пакет с клапаном'),
(16,'Пакет-саше'),
(135,'Папка'),
(7,'Папка картонная'),
(103,'Пауч'),
(61,'Пачка'),
(22,'Пенал'),
(30,'Пенал деревянный'),
(41,'Пенал металлический'),
(4,'Пенал пластмассовый'),
(117,'Пергамент'),
(56,'Пластиковая \"книжка\"'),
(36,'Пластиковая банка'),
(76,'Пластиковая бутылка'),
(78,'Пластиковая канистра'),
(106,'Пластиковая капсула'),
(34,'Пластиковая коробка'),
(44,'Пластиковая сумка'),
(37,'Пластиковая сумка-чехол'),
(43,'Пластиковая шкатулка'),
(24,'Пластиковое ведро'),
(108,'Пластиковое яйцо'),
(130,'Пластиковый бокс'),
(57,'Пластиковый кейс'),
(136,'Пластиковый конверт'),
(137,'Пластиковый лоток'),
(80,'Пластиковый пакет'),
(64,'Пластиковый рюкзак'),
(105,'Пластиковый стакан'),
(129,'Пластиковый стаканчик'),
(17,'Пластиковый тубус'),
(118,'Пластиковый футляр'),
(18,'Пластмассовый кейс'),
(110,'Пленка'),
(20,'Подарочная коробка'),
(31,'Подарочная сумочка'),
(46,'Подарочная упаковка'),
(138,'Подарочное оформление'),
(32,'Подарочный мешочек'),
(21,'Подарочный пакет'),
(38,'Подарочный футляр'),
(112,'Подложка'),
(139,'Полимерная пленка'),
(97,'Призма'),
(127,'Прозрачный пакет'),
(132,'Пюр пак'),
(174,'Реторт-пакет'),
(175,'Рукав ПВД'),
(42,'Рюкзак'),
(15,'Сетка'),
(69,'Скотч праздничный'),
(134,'Солонка'),
(91,'Стакан'),
(95,'Стакан с мембраной'),
(67,'Стеклянная банка'),
(77,'Стеклянная бутылка'),
(99,'Стеклянная кружка'),
(92,'Стик'),
(52,'Сумка'),
(27,'Сумка-чехол'),
(39,'Сумочка'),
(125,'Тарелка'),
(75,'Тетра Пак'),
(101,'Тетра Топ'),
(48,'Туба'),
(53,'Тубус'),
(116,'Тюбик'),
(123,'Упаковка из комбинированных материалов'),
(54,'Упаковочная бумага'),
(25,'Флакон'),
(86,'Флоу пак'),
(119,'Фольга'),
(126,'Фольгированный пакет'),
(111,'Футляр'),
(49,'Хэппигам'),
(122,'Целлофановый конверт'),
(81,'Целлофановый пакет'),
(19,'Чемоданчик'),
(29,'Чехол'),
(179,'Шприц'),
(114,'Экобокс'),
(124,'Ящик');
/*!40000 ALTER TABLE `packages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pet_sizes`
--

DROP TABLE IF EXISTS `pet_sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pet_sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pet_sizes_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pet_sizes`
--

LOCK TABLES `pet_sizes` WRITE;
/*!40000 ALTER TABLE `pet_sizes` DISABLE KEYS */;
INSERT INTO `pet_sizes` VALUES
(3,'Крупный'),
(1,'Малый'),
(2,'Средний');
/*!40000 ALTER TABLE `pet_sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ratings` (
  `food_id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `score` tinyint(4) NOT NULL,
  `rated_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`food_id`,`user_id`),
  UNIQUE KEY `uniq_food_user_idx` (`food_id`,`user_id`),
  KEY `ratings_user_id_fkey` (`user_id`),
  CONSTRAINT `ratings_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `ratings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `special_needs`
--

DROP TABLE IF EXISTS `special_needs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `special_needs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `special_needs_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `special_needs`
--

LOCK TABLES `special_needs` WRITE;
/*!40000 ALTER TABLE `special_needs` DISABLE KEYS */;
INSERT INTO `special_needs` VALUES
(2,'Беременные и кормящие'),
(7,'Гиперактивные'),
(11,'Для длинношерстных пород'),
(19,'Для пения'),
(16,'Для поддержания окраса'),
(12,'Для профилактики проблем со зрением'),
(8,'Для стачивания роговой части клюва'),
(3,'Для улучшения оперения во время линьки'),
(10,'Защита суставов'),
(9,'Кастрированным и стерилизованным'),
(4,'Малоподвижные'),
(13,'Подавление избыточной агрессии'),
(5,'Предупреждение стрессов'),
(1,'При плохом аппетите'),
(6,'Профилактика зубного налета'),
(14,'С избыточным весом'),
(20,'С чувствительным пищеварением'),
(17,'Склонные к аллергии'),
(15,'Спортивные'),
(18,'Уход за кожей и шерстью');
/*!40000 ALTER TABLE `special_needs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tastes`
--

DROP TABLE IF EXISTS `tastes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tastes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tastes_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=655 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tastes`
--

LOCK TABLES `tastes` WRITE;
/*!40000 ALTER TABLE `tastes` DISABLE KEYS */;
INSERT INTO `tastes` VALUES
(122,'Абрикос'),
(127,'Авокадо'),
(137,'Алоэ'),
(59,'Ананас'),
(2,'Анчоусы'),
(119,'Апельсин'),
(129,'Арахис'),
(81,'Арбуз'),
(90,'Банан'),
(3,'Баранина'),
(4,'Белая рыба'),
(98,'Белок насекомых'),
(124,'Белый шоколад'),
(148,'Боярышник'),
(133,'Брусника'),
(6,'Буйвол'),
(84,'Вермишель'),
(9,'Ветчина'),
(28,'Водоросли'),
(57,'Гаммарус'),
(123,'Гималайская соль'),
(1,'Говядина'),
(128,'Голубика'),
(121,'Горох'),
(143,'Горошек мышиный'),
(78,'Гранат'),
(86,'Гречка'),
(114,'Груша'),
(8,'Гусь'),
(64,'Дафния'),
(113,'Дорадо'),
(58,'Ежевика'),
(104,'Женьшень'),
(85,'Земляника'),
(36,'Зерно'),
(38,'Злаки'),
(144,'Ива'),
(149,'Икра'),
(7,'Индейка'),
(68,'Йогурт'),
(5,'Кабан'),
(96,'Кабачок'),
(142,'Календула'),
(157,'Калтык'),
(13,'Кальмар'),
(17,'Камбала'),
(116,'Карамель'),
(109,'Картофель'),
(63,'Киви'),
(83,'Киноа'),
(107,'Клубника'),
(69,'Клюква'),
(147,'Козлятина'),
(136,'Козье молоко'),
(79,'Кокос'),
(11,'Конина'),
(131,'Косуля'),
(82,'Краб'),
(12,'Креветки'),
(140,'Криль'),
(20,'Кролик'),
(71,'Куколка тутового шелкопряда'),
(108,'Кукуруза'),
(115,'Кунжут'),
(15,'Курица'),
(34,'Куропатка'),
(25,'Лангуст'),
(102,'Лещ'),
(75,'Личинки мух'),
(100,'Лобстер'),
(150,'Лопух'),
(14,'Лосось'),
(146,'Лось'),
(156,'Луговая трава'),
(22,'Макрель'),
(92,'Малина'),
(490,'Маниока'),
(97,'Мед'),
(134,'Мидии'),
(101,'Минтай'),
(45,'Моллюски'),
(99,'Молоко'),
(118,'Молочный шоколад'),
(87,'Морковь'),
(117,'Морошка'),
(153,'Морской гребешок'),
(56,'Мотыль сублимированный'),
(50,'Мучной червь'),
(10,'Мясо'),
(77,'Мята'),
(91,'Облепиха'),
(41,'Овес'),
(46,'Овощи'),
(73,'Окунь'),
(16,'Олень'),
(105,'Омар'),
(37,'Орехи'),
(18,'Осетр'),
(103,'Палтус'),
(55,'Папайя'),
(106,'Пастернак'),
(29,'Перепел'),
(163,'Персик'),
(62,'Печень'),
(155,'Пижма'),
(39,'Планктон'),
(93,'Помидор'),
(67,'Потрошки'),
(65,'Прованские травы'),
(44,'Просо'),
(48,'Птица'),
(47,'Пшеница'),
(139,'Пшено'),
(141,'Рачки'),
(52,'Рис'),
(160,'Роза'),
(135,'Розмарин'),
(132,'Рубец'),
(21,'Рыба'),
(19,'Сайра'),
(23,'Сардины'),
(125,'Свекла'),
(30,'Свинина'),
(138,'Сельдерей'),
(32,'Сельдь'),
(110,'Семга'),
(42,'Семена'),
(49,'Сено'),
(151,'Сердце'),
(33,'Сибас'),
(40,'Скумбрия'),
(111,'Соя'),
(152,'Страус'),
(27,'Субпродукты'),
(158,'Судак'),
(66,'Сыр'),
(145,'Таволга'),
(80,'Творог'),
(76,'Телятина'),
(126,'Темный шоколад'),
(54,'Тилапия'),
(26,'Треска'),
(88,'Тростник'),
(24,'Тунец'),
(61,'Тыква'),
(162,'Устрица'),
(35,'Утка'),
(70,'Фазан'),
(120,'Фасоль'),
(31,'Форель'),
(51,'Фрукты'),
(60,'Хлорелла'),
(154,'Цесарка'),
(94,'Цуккини'),
(159,'Цыпленок'),
(72,'Черника'),
(95,'Шпинат'),
(53,'Яблоко'),
(43,'Ягнёнок'),
(161,'Ягода'),
(74,'Язык'),
(89,'Яйцо'),
(130,'Яйцо перепелиное'),
(112,'Ячмень');
/*!40000 ALTER TABLE `tastes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_treats`
--

DROP TABLE IF EXISTS `type_treats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type_treats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `type_treats_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=221 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_treats`
--

LOCK TABLES `type_treats` WRITE;
/*!40000 ALTER TABLE `type_treats` DISABLE KEYS */;
INSERT INTO `type_treats` VALUES
(51,'Аорта'),
(5,'Вымя'),
(1,'Голень'),
(48,'Голова'),
(40,'Гранулы'),
(4,'Губы'),
(7,'Дропсы'),
(47,'Калтык'),
(10,'Кишки'),
(24,'Колбаска'),
(11,'Копыто'),
(2,'Корень'),
(6,'Косичка'),
(3,'Кость'),
(17,'Кость из жил'),
(31,'Крем-суп'),
(9,'Кусочки'),
(8,'Лапки'),
(13,'Легкое'),
(41,'Лизунец'),
(53,'Ломтики'),
(50,'Лопатка'),
(45,'Медальоны'),
(52,'Нос'),
(12,'Палочки'),
(39,'Печень'),
(14,'Печенье'),
(46,'Пиво'),
(33,'Пищевод'),
(15,'Подушечки'),
(19,'Полоски'),
(18,'Почки'),
(16,'Пюре'),
(22,'Пятачок'),
(23,'Рог'),
(25,'Рубец'),
(54,'Рулетики'),
(44,'Селезенка'),
(43,'Семенники'),
(20,'Сердце'),
(36,'Соус'),
(21,'Сухожилия'),
(37,'Сычуг'),
(49,'Сэндвич'),
(26,'Трахея'),
(27,'Трубочки'),
(55,'Тушка'),
(29,'Ушки'),
(28,'Филе'),
(35,'Хвост'),
(34,'Хрящ'),
(42,'Шарики'),
(30,'Шейка'),
(32,'Шоколад'),
(38,'Щеки');
/*!40000 ALTER TABLE `type_treats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `balance` decimal(15,2) NOT NULL DEFAULT 0.00,
  `nickname` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nickname` (`nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'shepherd_pet'
--

--
-- Dumping routines for database 'shepherd_pet'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-28  9:44:45
