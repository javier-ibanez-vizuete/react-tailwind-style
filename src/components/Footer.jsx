import petWorldTitle from "../assets/pictures/petworld.png";
import petWorldLogo from "../assets/pictures/petworld-logo.png";
import iconFacebook from "../assets/icons/icon-facebook.png";
import iconLinkedin from "../assets/icons/icon-linkedin.png";
import iconInstagram from "../assets/icons/icon-instagram.png";
import iconTwitter from "../assets/icons/icon-twitter.png";

import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { NewsForm } from "./NewsForm";
import { useDevice } from "../hooks/useDevice";

export const Footer = () => {
	const { lang, languages, getText, handleLang } = useContext(LanguageContext);
	const { isMobile, isDesktop } = useDevice();

	return (
		<footer className="flex flex-col py-10 px-5 gap-10 xl:py-[70px] xl:px-20">
			<div className="flex flex-col gap-10 xl:flex-row xl:justify-between xl:gap-[233px]">
				<div className="flex flex-col gap-10 xl:gap-[76px]">
					<Link to="/" className={"flex flex-row py-2 items-center gap-2.5"}>
						<div className="flex flex-row w-[35px]">
							<img src={petWorldLogo} alt="Logo PetWorld" />
						</div>
						<div className="flex flex-row w-[109px]">
							<img src={petWorldTitle} alt={getText("altPetWorldLogoText")} className="flex-1" />
						</div>
					</Link>

					<NewsForm />
				</div>
				{isMobile && (
					<div className="flex">
						<ul className="flex-1 flex flex-col gap-5">
							<li className="text-[18px] font-semibold">{getText("linksFooterSectionLi1")}</li>
							<li className="text-[18px] font-semibold">{getText("linksFooterSectionLi2")}</li>
							<li className="text-[18px] font-semibold">{getText("linksFooterSectionLi3")}</li>
						</ul>
					</div>
				)}
				{isDesktop && (
					<div className="flex gap-14">
						<div className="flex flex-col gap-4">
							<h5 className="text-[18px] font-semibold">{getText("linksFooterSectionLi1")}</h5>
							<ul className="flex flex-col gap-4">
								<li>
									<Link to="*" className="text-[#2d2d2d]">
										FAQ
									</Link>
								</li>
								<li>
									<Link to="/contact" className="text-[#2d2d2d]">
										{getText("linksFooterSectionLi4")}
									</Link>
								</li>
							</ul>
						</div>
						<div className="flex flex-col gap-4">
							<h5 className="text-[18px] font-semibold">{getText("linksFooterSectionLi2")}</h5>
							<ul className="flex flex-col gap-4">
								<li>
									<Link to="*" className="text-[#2d2d2d]">
										{getText("linksFooterSectionLi5")}
									</Link>
								</li>
								<li>
									<Link to="*" className="text-[#2d2d2d]">
										{getText("linksFooterSectionLi6")}
									</Link>
								</li>
								<li>
									<Link to="*" className="text-[#2d2d2d]">
										{getText("linksFooterSectionLi7")}
									</Link>
								</li>
							</ul>
						</div>
						<div className="flex flex-col gap-4">
							<h5 className="text-[18px] font-semibold">{getText("linksFooterSectionLi3")}</h5>
							<ul className="flex flex-col gap-4">
								<li>
									<Link to="*" className="text-[#2d2d2d]">
										{getText("linksFooterSectionLi8")}
									</Link>
								</li>
								<li>
									<Link to="*" className="text-[#2d2d2d]">
										{getText("linksFooterSectionLi9")}
									</Link>
								</li>
								<li>
									<Link to="*" className="text-[#2d2d2d]">
										{getText("linksFooterSectionLi910")}
									</Link>
								</li>
							</ul>
						</div>
					</div>
				)}
			</div>
			<div className="flex flex-col gap-10 xl:flex-row xl:justify-between xl:items-center">
				<div className="flex flex-col gap-5 xl:flex-row-reverse xl:justify-end">
					<Link to={"/policy-terms"} className="text-[#2d2d2d] font-semibold text-[18px]">
						{getText("linksFooterPolicyTerms")}
					</Link>
					<Link to={"/privacy-policy"} className="text-[#2d2d2d] font-semibold text-[18px]">
						{getText("linksFooterPrivacyPolicy")}
					</Link>
					<p className="text-[#2d2d2d] font-semibold text-[18px]">© PETWORLD 2022</p>
				</div>
				<div className="flex justify-center items-center">
					<select className="px-2 py-1 border-1" name="lang" id="lang" value={lang} onChange={(event) => handleLang(event.target.value)}>
						{Object.entries(languages).map(([codeLang, language]) => {
							return (
								<option key={language} value={codeLang}>
									{language}
								</option>
							);
						})}
					</select>
				</div>
				<div className="flex gap-5">
					<div className="flex justify-center items-center w-[30px]">
						<img className="w-full" src={iconFacebook} alt="Icon Facebook" />
					</div>
					<div className="flex justify-center items-center w-">
						<img className="w-full" src={iconLinkedin} alt="Icon Linkedin" />
					</div>
					<div className="flex justify-center items-center w-">
						<img className="w-full" src={iconInstagram} alt="Icon Instagram" />
					</div>
					<div className="flex justify-center items-center w-">
						<img className="w-full" src={iconTwitter} alt="Icon Twitter" />
					</div>
				</div>
			</div>
		</footer>
	);
};
