-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 07 Jul 2018 pada 04.16
-- Versi Server: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cyduck`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `comment`
--

CREATE TABLE `comment` (
  `commentid` bigint(255) NOT NULL,
  `usernim` varchar(10) NOT NULL,
  `postid` bigint(255) NOT NULL,
  `text` text NOT NULL,
  `date_time` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `comment`
--

INSERT INTO `comment` (`commentid`, `usernim`, `postid`, `text`, `date_time`) VALUES
(1, 'E2160203', 44, 'haha', 1530722200762),
(2, 'E2160203', 44, 'nonono', 1530722539748),
(3, 'E2160203', 44, 'hehe', 1530722702838),
(4, 'E2160203', 44, 'haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 1530727163025),
(5, 'E2160203', 44, 'huhu', 1530731214116),
(6, 'E2160203', 44, 'hoho', 1530731228023),
(8, 'E2160203', 43, 'Payungnya kecil', 1530845646828),
(10, 'E2160203', 37, 'Apakah dompetnya berwarna ungu?', 1530846809461),
(11, 'E2160203', 37, 'Sepertinya saya menemukannya', 1530846894640),
(12, 'E2160203', 37, 'Silakan hubungi saya', 1530846907376),
(13, 'E2160203', 37, 'Test', 1530914603505),
(14, 'G14160071', 43, 'Apakah payungnya hilang saat hari sedang hujan?', 1530914892036),
(18, '111111', 43, 'Test', 1530921394071),
(19, 'E2160203', 43, 'Test', 1530921578677),
(23, '111111', 37, 'tEST', 1530928391525);

-- --------------------------------------------------------

--
-- Struktur dari tabel `notification`
--

CREATE TABLE `notification` (
  `notifid` bigint(20) NOT NULL,
  `commentid` bigint(20) NOT NULL,
  `usernim` varchar(10) NOT NULL,
  `issuer_usernim` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `post`
--

CREATE TABLE `post` (
  `postid` bigint(255) NOT NULL,
  `usernim` varchar(10) NOT NULL,
  `jenis` varchar(11) NOT NULL,
  `judul` varchar(25) NOT NULL,
  `deskripsi` text NOT NULL,
  `foto` blob NOT NULL,
  `date_time` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `post`
--

INSERT INTO `post` (`postid`, `usernim`, `jenis`, `judul`, `deskripsi`, `foto`, `date_time`) VALUES
(8, 'G14160071', 'penemuan', 'Ilang akal', 'Ilang di jalan', '', 1527683974076),
(9, 'G14160071', 'penemuan', 'Nemu mobil', 'Nemu di garasi orang', '', 1527745494822),
(10, 'G14160071', 'penemuan', 'Nemu handphone', 'Nemu di kantong temen', '', 1527751668305),
(11, 'G14160071', 'penemuan', 'Penemuan sepeda motor', 'Sepeda motor ditemukan di Cibanteng dengan plat nomor B 6153 SAO dengan ciri-ciri model NMAX warna coklat', '', 1527755813041),
(12, 'g64160000', 'penemuan', 'Kehilangan Struk Belanja', 'Struk belanja di Indomaret saya hilang di IPB. Ciri-ciri struknya bernomina total belanja sebesar Rp 1000', '', 1527755917694),
(13, 'g64160000', 'penemuan', 'Nemu duit', 'Goceng', '', 1527762419066),
(14, 'g64160000', 'kehilangan', 'Hilang', 'Ke angkasa ku akan terbang', '', 1527762278350),
(15, 'g64160000', 'kehilangan', 'Ada ilang', 'Ilang \'apa ayo', '', 1527763002724),
(16, 'g64160000', 'kehilangan', 'HilangHilangHilangHilangH', 'Ke angkasa ku akan terbang', '', 1527762278350),
(17, 'g64160000', 'kehilangan', 'HilangHilangHilangHilangH', 'Ke angkasa ku akan terbang', '', 1527762278350),
(18, 'g64160000', 'kehilangan', 'HIlang akal', 'Akalnya h\'ilang', '', 1527764896375),
(19, 'g64160000', 'kehilangan', 'TolongTolongTolongTolong', 'Tolongin:(', '', 1527764959735),
(20, 'g64160000', 'penemuan', 'Ada anak ketemu\'', 'Di pinggir kali', '', 1527765190126),
(21, 'g64160000', 'penemuan', 'Ada bebek', 'Tekoek tekoek di pinggir kali tekoek tekoek', '', 1527765331896),
(22, 'G14160071', 'kehilangan', 'Chargeran Hilang', 'Hilang di sekitar lab statistika - Pomi', '', 1527804244991),
(23, 'G14160071', 'penemuan', 'Akhirnya \'ku menemukanmu', 'Saat hati ini mulai merapuh', '', 1527804278836),
(24, 'G14160071', 'penemuan', 'Ditemukan KTM', 'Atas nama cinta', '', 1527804568778),
(25, 'G14160071', 'penemuan', 'Nemu sesuatu', 'Nemu ini', '', 1527805156354),
(26, 'G14160071', 'penemuan', 'Penemuan ATM', 'Nemu ATM di ATM Center', '', 1527805468825),
(27, 'G14160071', 'kehilangan', 'Kehilangan Uang', 'Uang sejumlah Rp 5000', '', 1527805502093),
(28, 'G14160071', 'kehilangan', 'Hilang', 'Hilang aja', '', 1527805557795),
(29, 'G14160071', 'kehilangan', 'Aku ilang barang', 'Ilangnya pas lagi tidur', '', 1527805722091),
(30, 'G14160071', 'kehilangan', 'Hilangkan saja', 'Aku pada ibuku, atau ayahku', '', 1527806032942),
(31, 'G14160071', 'kehilangan', 'Hmm', 'Huaa ilang', '', 1527807793207),
(32, 'G14160071', 'kehilangan', 'Kalo ilang', 'Ya ikhlasin', '', 1527808035997),
(33, 'G14160071', 'penemuan', 'EEEE', 'AAA', '', 1527808066649),
(34, 'G14160071', 'kehilangan', 'Ilang', 'Aja', '', 1527808759991),
(35, 'G14160071', 'kehilangan', 'Mancing Mania', 'Mantap', '', 1527809296950),
(36, 'G14160071', 'penemuan', 'Mata Pancing', 'Yeah!', '', 1527809323038),
(37, '111111', 'kehilangan', 'Kehilangan Dompet', 'Kehilangan di sekitar astri, pukul 14.00 1 Juni. Kemungkinan tercecer saat sedang berjalan', '', 1527881272763),
(43, 'E2160203', 'penemuan', 'Penemuan Payung', 'Ditemukan payung di depan gedung CCR bermotif polkadot berwarna ungu', '', 1527908008131),
(44, 'g64160000', 'penemuan', 'TUPPERWARE DAN TOPI', 'Ciri-ciri tupperware berwarna pink bertutup kuning. Topi berwarna hijau model army. Ditemuka dekat audit FPIK pada pukul 16.00 kemarin', '', 1527908193151),
(45, 'g64160000', 'kehilangan', 'Hilang Ragaku Melayang', 'Jauh tak terbayang. Ke angkasa \'ku akan terbang', '', 1527908279415);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `nim` varchar(10) NOT NULL,
  `nama` varchar(25) NOT NULL,
  `username` varchar(20) NOT NULL,
  `pw` varchar(25) NOT NULL,
  `email` varchar(50) NOT NULL,
  `no_hp` varchar(13) NOT NULL,
  `token` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`nim`, `nama`, `username`, `pw`, `email`, `no_hp`, `token`) VALUES
('111111', 'Binar Gelegar', 'bbbinar', '11111111', 'p@apps.ipb.ac.id', '0878115000', NULL),
('E2160203', 'Alima Nafisa', 'almnfs', '12345678', 'almnfs@apps.ipb.ac.id', '083814156678', NULL),
('F41414141', 'Nana', 'nanaaa', '12345678', '', '0898989898', ''),
('G14160071', 'Amitabacan', 'amtbcn', 'homina', 'amita@apps.ipb.ac.id', '0872777777', ''),
('g64160000', 'masduki', 'msdk', 'abcdefgh', 'masduki@apps.ipb.ac.id', '72777777', ''),
('g6666', 'Kautsar Ibrahim Hilmi', 'hilmi_kautsar11', 'cyduck123', '', '09009090', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`commentid`),
  ADD KEY `comment_ibfk_1` (`usernim`),
  ADD KEY `comment_ibfk_2` (`postid`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notifid`),
  ADD KEY `notification_ibfk_1` (`usernim`),
  ADD KEY `notification_ibfk_2` (`commentid`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`postid`),
  ADD KEY `post_ibfk_1` (`usernim`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`nim`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `commentid` bigint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `notifid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `postid` bigint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`usernim`) REFERENCES `user` (`nim`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`postid`) REFERENCES `post` (`postid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`usernim`) REFERENCES `user` (`nim`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `notification_ibfk_2` FOREIGN KEY (`commentid`) REFERENCES `comment` (`commentid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`usernim`) REFERENCES `user` (`nim`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
