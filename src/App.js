import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
	const [currentTab, setCurrentTab] = useState("about");

	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div className="mobile-header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;