import { useContext, useEffect } from "react";
// import TypingAnimation from "../components/TypingAnimation";
import Context from "../context/context";

const headerMenus = [
	{ title: "About", link: "about", icon: "icon fa fa-user-o" },
	{ title: "Resume", link: "resume", icon: "icon fa fa-list-alt" },
	{ title: "Projects", link: "works", icon: "icon fa fa-object-ungroup" },
	{ title: "Blog", link: "blog", icon: "icon fa fa-commenting-o" },
	{ title: "Contact", link: "contacts", icon: "icon fa fa-envelope-o" },
];

const Header = ({ noSideBarBtn, menus }) => {
	const { changeNav, nav, changeSideBar } = useContext(Context);
	useEffect(() => {
		const sctionScroll = () => {};
		window.addEventListener("scroll", sctionScroll);
	}, []);

	const headerMenus_ = menus ? menus : headerMenus;

	return (
		<header className="header">
			{/* menu btn */}
			{!noSideBarBtn && (
				<button
					href="#"
					onClick={() => changeSideBar(true)}
					className="menu-btn"
				>
					<span />
				</button>
			)}
			{/* menu */}
			<div className="top-menu menu-minimal">
				<ul>
					{headerMenus_.map((menu, i) => (
						<li className={`${nav === menu.link ? "active" : ""}`} key={i}>
							<a href={`#${menu.link}`} onClick={() => changeNav(menu.link)}>
								<span className={menu.icon} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};
export default Header;
