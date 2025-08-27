import petWorldTitle from "../assets/pictures/petworld.png";
import petWorldLogo from "../assets/pictures/petworld-logo.png";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { NewsForm } from "./NewsForm";

export const Footer = () => {
	const { lang, languages, getText } = useContext(LanguageContext);

	return (
		<footer className="flex flex-col py-10 px-5">
			<div className="flex flex-col gap-10 ">
				<div className="flex flex-col gap-10">
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
				<div>

                </div>
				<div>ENLACES OUR STORY DESKTOP</div>
			</div>
			<div>
				<div>ENLACES PRIVACY POLICY</div>
				<div>
					<select name="lang" id="lang" value={lang} onChange={(event) => handleLang(event.target.value)}>
						{Object.entries(languages).map(([codeLang, language]) => {
							return (
								<option key={language} value={codeLang}>
									{language}
								</option>
							);
						})}
					</select>
				</div>
				<div>ENLACES REDES SOCIALES</div>
			</div>
		</footer>
	);
};
