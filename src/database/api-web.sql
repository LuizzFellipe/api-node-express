-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25-Set-2023 às 20:45
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
(1, 'Luiz', 'luiz@gmail.com', '124234', 'https://i.pinimg.com/736x/a0/5a/1d/a05a1d8ce76262357f6ea2a9db72a371.jpg'),
(2, 'Maria Luiza', 'marialuiza@gmail.com', '56789', 'https://image-service.onefootball.com/transform?w=280&h=210&dpr=2&image=https%3A%2F%2Fwp-images.onefootball.com%2Fwp-content%2Fuploads%2Fsites%2F12%2F2023%2F06%2FBrazil-v-Guinea-International-Friendly-1687051939-1000x667.jpg'),
(3, 'Pedro', 'henrique@gmail.com', '12345', 'https://i.pinimg.com/736x/cf/36/e8/cf36e83ffe707345195fb1234266406f.jpg'),
(9, 'Annita', 'annita@gmail.com', '564564', 'https://i.pinimg.com/736x/e4/fc/53/e4fc53e4d84f84734bc93883bf194630.jpg'),
(10, 'Gabriel Martinelli', 'gabrielmartinelli@gmail.com', '12312312', 'https://i.pinimg.com/736x/ce/66/ec/ce66ecff0f21b86022ec46d002aae106.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
