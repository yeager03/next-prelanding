// meta
import Head from "next/head";
import theme from "../config/chakraConfig";
// chakra
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>Prelandigs</title>
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
