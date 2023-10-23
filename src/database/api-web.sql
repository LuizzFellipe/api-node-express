-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23-Out-2023 às 22:14
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `api-web`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `product`
--

CREATE TABLE `product` (
  `id` int(50) NOT NULL,
  `modelo` varchar(100) COLLATE utf8_german2_ci NOT NULL,
  `marca` varchar(100) COLLATE utf8_german2_ci NOT NULL,
  `preco` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Extraindo dados da tabela `product`
--

INSERT INTO `product` (`id`, `modelo`, `marca`, `preco`) VALUES
(1, 'iPhone 14 Pro Max', 'Apple', 7000),
(2, 'Galaxy M54 5G', 'Samsung', 2000),
(3, 'Galaxy Z Fold4 5G', 'Samsung', 8000),
(4, 'Redmi Note 12', 'Xiaomi', 1000),
(5, 'Iphone X', 'Apple', 3000);

-- --------------------------------------------------------

--
-- Estrutura da tabela `sessions`
--

CREATE TABLE `sessions` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `token` varchar(300) COLLATE utf8_german2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(50) NOT NULL,
  `nome` varchar(100) COLLATE utf8_german2_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_german2_ci NOT NULL,
  `senha` varchar(256) COLLATE utf8_german2_ci NOT NULL,
  `photo` text COLLATE utf8_german2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `nome`, `email`, `senha`, `photo`) VALUES
(18, 'Anne', 'anne@gmail.com', '12345', 'https://i.pinimg.com/originals/fd/ce/58/fdce58d944bd8b9b6faf860958c96691.jpg'),
(19, 'Leandro', 'leandro@gamilc.om', '12345', 'https://i.pinimg.com/236x/6a/b6/ea/6ab6ea307df8cba834425ac77912ca71.jpg'),
(21, 'Annita', 'annita@gmail.com', '12345', 'https://i.pinimg.com/originals/fd/ce/58/fdce58d944bd8b9b6faf860958c96691.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `index_token` (`token`) USING BTREE,
  ADD KEY `id_user_user_id` (`id`) USING BTREE;

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `product`
--
ALTER TABLE `product`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
