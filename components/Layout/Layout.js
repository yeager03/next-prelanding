import styles from "./Layout.module.sass";
// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
