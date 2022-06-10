import { extendTheme } from "@chakra-ui/react";

const styles = {
	global: (props) => ({
		body: {
			bg: props.colorMode === "dark" ? "blueDark" : "white",
		},
	}),
};

const fonts = {
	body: "'Source Code Pro', monospace",
	heading: "'Source Code Pro', monospace",
};

const colors = {
	white: "#fffefd",
	blueDark: "#1a202c",
};

const config = {
	initialColorMode: "light",
};

const theme = extendTheme({ config, styles, colors, fonts });

export default theme;
