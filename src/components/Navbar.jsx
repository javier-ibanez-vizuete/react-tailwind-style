import { Link, NavLink } from "react-router-dom";
import petWorldTitle from "../assets/pictures/petworld.png";
import petWorldLogo from "../assets/pictures/petworld-logo.png";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { useDevice } from "../hooks/useDevice";

export const Navbar = () => {
	const { getText } = useContext(LanguageContext);
	const { isDesktop } = useDevice();

	return (
		<nav className="flex flex-col py-5.5">
			<div className="flex justify-between px-5 xl:px-30">
				<NavLink to="/" className={"flex flex-row py-2 items-center gap-2.5"}>
					<div className="flex flex-row w-[35px]">
						<img src={petWorldLogo} alt="Logo PetWorld" />
					</div>
					<div className="flex flex-row w-[109px]">
						<img src={petWorldTitle} alt={getText("altPetWorldLogoText")} className="flex-1" />
					</div>
				</NavLink>
				{isDesktop && (
					<div className="flex justify-center gap-2 items-center">
						<Link to={"/register-page"} className="mr-4">
							{getText("navSignUp")}
						</Link>
						<Link to={"/login-page"} className="p-3 px-6 bg-[#3366FF] rounded-md">
							{getText("navLogIn")}
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};
