// components
import Layout from "../components/Layout/Layout";
// chakra
import { Container, Heading } from "@chakra-ui/react";

export default function Home() {
	return (
		<Layout>
			<section>
				<Container maxWidth={1024}>
					<Heading>Main</Heading>
				</Container>
			</section>
		</Layout>
	);
}
