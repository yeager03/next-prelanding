import { useState, useEffect } from "react";
//styles
import styles from "./styles/Landing.module.sass";
//components
import Layout from "../../components/Layout/Layout";
// chakra
import { Container, Grid, GridItem, Box, Heading, Text, Link } from "@chakra-ui/react";
// services
import LandingService from "../../lib/LandingService";

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

const Landing = ({ landing }) => {
	const { title, img, content, id } = landing;
	const [landings, setLandings] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { getLandings } = LandingService(),
				landings = await getLandings();
			setLandings(shuffle(landings.filter((el) => el.id !== id)).slice(0, 4));
		};
		fetchData();
	}, []);

	return (
		<Layout>
			<section className={styles["content"]}>
				<Container maxWidth={1024}>
					<Grid
						templateAreas={`"main sidebar"`}
						gridTemplateRows={"1fr"}
						gridTemplateColumns={"1fr 250px"}
						gap="4"
					>
						<GridItem area={"sidebar"}>
							{landings?.map((land) => {
								return (
									<Link
										href={`/landings/${land.id}`}
										key={land.id}
										rounded={"15px"}
										display={"flex"}
										flexDirection={"column"}
										justifyContent={"flex-end"}
										maxW={"100%"}
										h={"250px"}
										p="15px"
										background={`linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .9)), url(${land.img})`}
										backgroundSize={"cover"}
										backgroundPosition={"center"}
										backgroundRepeat={"no-repeat"}
										textDecoration={"none"}
										mb={"30px"}
									>
										<Heading fontSize={"16px"} color={"white"}>
											{land.title}
										</Heading>
									</Link>
								);
							})}
						</GridItem>
						<GridItem area={"main"} className={styles["content-main"]}>
							<Box
								className={styles["content-main__img"]}
								background={`linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .9)), url(${img})`}
								p={15}
								w={"100%"}
								h={"500px"}
							>
								<Heading color={"white"} fontSize={"32px"}>
									{title}
								</Heading>
							</Box>
							<Text fontSize="19px" mt={"10px"} fontWeight={500} p={"0 15px"}>
								{content}
							</Text>
						</GridItem>
					</Grid>
				</Container>
			</section>
		</Layout>
	);
};

export const getStaticPaths = async () => {
	const { getLandings } = LandingService();
	const landings = await getLandings();

	const paths = landings.map((land) => {
		return {
			params: { id: land.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export async function getStaticProps({ params }) {
	const { getLanding } = LandingService();
	const landing = await getLanding(params.id);

	if (!landing) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			landing,
		},
		revalidate: 60,
	};
}

export default Landing;
