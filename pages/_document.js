import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

import theme from "../config/chakraConfig";

export default function Document() {
	return (
		<Html lang="ru">
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
				<link
					href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
			</Head>
			<body>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
