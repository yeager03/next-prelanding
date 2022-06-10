// styles
import styles from "./Header.module.sass";
// chakra
import { Container, Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

// next
import Link from "next/link";

const Header = () => {
	const { toggleColorMode } = useColorMode();

	return (
		<header className={styles["header"]} style={{ background: useColorModeValue("#fffefd", "#1a202c") }}>
			<Container maxW={768} display="flex" justifyContent={"space-between"} alignItems="center" height={"100%"}>
				<Link href="/">
					<a href="" className={styles["header-logo"]}>
						DTV CPA
					</a>
				</Link>
				<Flex alignItems={"center"}>
					<nav className={styles["header-nav"]}>
						<ul className={styles["header-nav__list"]}>
							<li className={styles["header-nav__item"]}>
								<Link href="/landings">
									<a href="">Страницы</a>
								</Link>
							</li>
							<li className={styles["header-nav__item"]}>
								<Link href="/">
									<a href="">CPA сеть</a>
								</Link>
							</li>
							<li className={styles["header-nav__item"]}>
								<Link href="/">
									<a href="">О нас</a>
								</Link>
							</li>
						</ul>
					</nav>
					<AnimatePresence exitBeforeEnter initial={false}>
						<motion.div
							style={{ display: "inline-block" }}
							key={useColorModeValue("light", "dark")}
							initial={{ y: -5, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 5, opacity: 0 }}
							transition={{ duration: 0.2 }}
						>
							<IconButton
								colorScheme={useColorModeValue("purple", "orange")}
								icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
								onClick={toggleColorMode}
							></IconButton>
						</motion.div>
					</AnimatePresence>
				</Flex>
			</Container>
		</header>
	);
};

export default Header;
