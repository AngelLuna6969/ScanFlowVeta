-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-11-2024 a las 00:33:39
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inventarios_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mobiliario`
--

CREATE TABLE `mobiliario` (
  `id_mobiliario` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `tipo` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `activo` int(11) NOT NULL,
  `codigo` varchar(100) NOT NULL,
  `id_ubicacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mobiliario`
--

INSERT INTO `mobiliario` (`id_mobiliario`, `nombre`, `descripcion`, `tipo`, `estado`, `fecha_registro`, `activo`, `codigo`, `id_ubicacion`) VALUES
(1, 'CPU Computadora 001', 'Computadora de escritorio negra', 1, 1, '2024-09-27 17:25:42', 1, '75869461313', 1),
(2, 'mesa', 'computadora', 1, 1, '2024-09-27 16:57:12', 1, '12345', 1),
(3, 'CPU 001', 'Computadora de escritorio negra', 1, 1, '2024-09-27 17:27:39', 1, '75246989562', 2),
(4, 'Escritorio', 'Escritorio color cafe', 1, 1, '0000-00-00 00:00:00', 1, '7589562345', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id_persona` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apaterno` varchar(100) NOT NULL,
  `amaterno` varchar(100) NOT NULL,
  `matricula` varchar(20) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `correo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id_persona`, `nombre`, `apaterno`, `amaterno`, `matricula`, `telefono`, `correo`) VALUES
(1, 'angel', 'luna', 'sedeño', 'utp0149290', '2213719019', 'angel@gmail.com'),
(2, 'nidian', 'salas', 'amaro', 'utp0149900', '2228091690', 'nidian@gmail.com'),
(3, 'alejandro', 'alarcon', 'briones', 'utp0150808', '2224568923', 'alejangro@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resguardo`
--

CREATE TABLE `resguardo` (
  `id_resguardo` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `id_mobiliario` int(11) NOT NULL,
  `fecha_asignacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `resguardo`
--

INSERT INTO `resguardo` (`id_resguardo`, `id_persona`, `id_mobiliario`, `fecha_asignacion`) VALUES
(1, 3, 3, '2024-09-27 17:30:03'),
(2, 1, 2, '2024-09-27 17:29:51'),
(3, 2, 1, '2024-09-27 17:30:03'),
(5, 2, 2, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion`
--

CREATE TABLE `ubicacion` (
  `id_ubicacion` int(11) NOT NULL,
  `edificio` varchar(100) NOT NULL,
  `departamento` varchar(100) NOT NULL,
  `area` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ubicacion`
--

INSERT INTO `ubicacion` (`id_ubicacion`, `edificio`, `departamento`, `area`) VALUES
(1, 'K5', 'Tecnologías de la Información', 'Laboratorio 108'),
(2, 'D-5', 'Ingenieria', 'TICS'),
(3, 'D-8', 'Vinculacion', 'Mobilidad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `email` varchar(65) NOT NULL,
  `pass` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mobiliario`
--
ALTER TABLE `mobiliario`
  ADD PRIMARY KEY (`id_mobiliario`),
  ADD KEY `id_ubicacion` (`id_ubicacion`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id_persona`);

--
-- Indices de la tabla `resguardo`
--
ALTER TABLE `resguardo`
  ADD PRIMARY KEY (`id_resguardo`),
  ADD KEY `id_mobiliario` (`id_mobiliario`),
  ADD KEY `id_persona` (`id_persona`);

--
-- Indices de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  ADD PRIMARY KEY (`id_ubicacion`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mobiliario`
--
ALTER TABLE `mobiliario`
  MODIFY `id_mobiliario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id_persona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `resguardo`
--
ALTER TABLE `resguardo`
  MODIFY `id_resguardo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  MODIFY `id_ubicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `mobiliario`
--
ALTER TABLE `mobiliario`
  ADD CONSTRAINT `mobiliario_ibfk_1` FOREIGN KEY (`id_ubicacion`) REFERENCES `ubicacion` (`id_ubicacion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `resguardo`
--
ALTER TABLE `resguardo`
  ADD CONSTRAINT `resguardo_ibfk_1` FOREIGN KEY (`id_mobiliario`) REFERENCES `mobiliario` (`id_mobiliario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `resguardo_ibfk_2` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
