-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sistema
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20210602094148-department.js'),('20210602101017-users.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_department` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'Adaptadores','2021-06-08 23:18:48','2021-06-08 23:18:48'),(2,'Ferramentas','2021-06-08 23:18:48','2021-06-08 23:18:48'),(3,'Eletronicos','2021-06-08 23:18:48','2021-06-08 23:18:48'),(4,'Casa','2021-06-08 23:18:48','2021-06-08 23:18:48'),(5,'Acessorios','2021-06-08 23:18:48','2021-06-08 23:18:48'),(6,'Moveis','2021-06-08 23:18:48','2021-06-08 23:18:48'),(7,'Tablets e Celulares','2021-06-08 23:18:48','2021-06-08 23:18:48'),(8,'Games','2021-06-08 23:18:48','2021-06-08 23:18:48'),(9,'Informatica','2021-06-08 23:18:48','2021-06-08 23:18:48');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `preco` int NOT NULL,
  `disponivel` int NOT NULL,
  `destaque` int NOT NULL,
  `estoque` int NOT NULL,
  `id_dep` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_dep` (`id_dep`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_dep`) REFERENCES `departments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Siberia v2 Steel Series','Dota 2 Edition',900,1,1,50,5,'2021-06-08 23:18:48','2021-06-08 23:18:48'),(2,'Cabo USB C','USB 5.0 Type C',30,1,1,150,1,'2021-06-08 23:18:48','2021-06-09 00:27:26'),(3,'Televisão Samsung 49\"','Smart TV',3000,1,1,10,3,'2021-06-08 23:18:48','2021-06-08 23:18:48'),(4,'Sofá Cama','Reclinavel',1500,1,1,5,4,'2021-06-08 23:18:48','2021-06-08 23:18:48'),(6,'Painel de televisão','2m * 2m',300,1,1,3,6,'2021-06-08 23:18:48','2021-06-08 23:18:48'),(7,'Iphone 12','Apple',80000,1,1,1,7,'2021-06-08 23:18:48','2021-06-08 23:18:48'),(8,'Dark Souls','Git Gud',150,1,1,100,8,'2021-06-08 23:18:48','2021-06-08 23:18:48'),(9,'RJ 45 ','Conector para cabo de rede',2,1,1,1000,9,'2021-06-08 23:18:48','2021-06-08 23:18:48'),(10,'Calça Mengao','Vai timão',200,1,1,1,5,'2021-06-08 23:29:29','2021-06-08 23:31:13'),(11,'Playstation','Video Game Legal',5000,1,1,1,5,'2021-06-09 00:15:11','2021-06-09 00:15:11');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-17 17:51:06
