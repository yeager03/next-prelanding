// styles
import styles from "./styles/Landings.module.sass";
// components
import Layout from "../../components/Layout/Layout";
// chakra
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home({ landings }) {
	const container = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { y: -30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<Layout>
			<section className={styles["content"]}>
				<Container maxWidth={1024}>
					<Grid
						templateColumns="repeat(6, 1fr)"
						gap={4}
						gridAutoRows="100px"
						as={motion.div}
						variants={container}
						initial="hidden"
						animate="visible"
					>
						<GridItem
							colSpan={6}
							rowSpan={4}
							background={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url(${landings[0].img})`}
							className={styles["content-item"]}
							key={landings[0].id}
							as={motion.div}
							variants={item}
						>
							<Link href={`/landings/${landings[0].id}`}>
								<a href="" className={styles["content-item-link"]}>
									<h2>{landings[0].title}</h2>
									<p>{landings[0].content}</p>
								</a>
							</Link>
						</GridItem>

						{landings?.slice(1).map((land) => {
							return (
								<GridItem
									colSpan={2}
									rowSpan={2}
									background={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url(${land.img})`}
									className={styles["content-item"]}
									key={land.id - 1}
									as={motion.div}
									variants={item}
								>
									<Link href={`/landings/${land.id}`}>
										<a
											href=""
											className={`${styles["content-item-link"]} ${styles["content-item-link__sm"]}`}
										>
											<h2>{land.title}</h2>
											<p>
												{land.content.length > 100
													? land.content.slice(0, 100) + "..."
													: land.content}
											</p>
										</a>
									</Link>
								</GridItem>
							);
						})}
					</Grid>
				</Container>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch("http://localhost:3000/api/landings");
	const landings = await res.json();

	if (!landings) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			landings,
		},
	};
}
