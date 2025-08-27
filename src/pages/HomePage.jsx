import { Section } from "../components/Section";

import heroImage from "../assets/pictures/hero-image.png";
import videoHomePage from "../assets/pictures/video-home-page.png";
import nestleLogo from "../assets/logos/nestle.png";
import appleLogo from "../assets/logos/apple_logo_black 1.png";
import becoLogo from "../assets/logos/beco.png";
import amazonLogo from "../assets/logos/amazon_logo 2.png";
import googleLogo from "../assets/logos/google.png";
import walmartLogo from "../assets/logos/walmart.png";
import iconBone from "../assets/icons/pet_food_icon.png";
import iconAccesorie from "../assets/icons/accesories_icon.png";
import iconPetMedical from "../assets/icons/medical_icon.png";
import iconPetGrooming from "../assets/icons/grooming_icon.png";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const HomePage = () => {
	const { getText } = useContext(LanguageContext);

	return (
		<div>
			<Section className={"flex flex-col px-5 py-20 bg-[#F7F5FD] gap-[60px] xl:flex-row xl:gap-20 xl:px-25"}>
				<article className="flex flex-col gap-[30px] text-center items-center flex-1 xl:text-left xl:items-start xl:gap-12">
					<h1 className="text-5xl text-[#2D2D2D] font-bold xl:text-[6rem]">
						{getText("textHeroSectionHeading1")}
					</h1>
					<p className="text-[#2D2D2D]">{getText("textHeroSectionBody1")}</p>
					<Link to="/login-page" className="bg-[#F8D57E] px-13 py-4 rounded-lg xl:px-13 xl:py-4">
						{getText("textHeroSectionButton1")}
					</Link>
				</article>
				<div className="flex w-[320px] xl:w-[500px] justify-center items-center">
					<img className="w-full" src={heroImage} alt="Hero Image" />
				</div>
			</Section>
			<div className="flex flex-row px-5 py-14 bg-[#F7F5FD] xl:px-64 xl:py-[70px]">
				<div className="flex justify-center items-center">
					<img src={videoHomePage} alt="PetWorldVideo" />
				</div>
			</div>
			<div className="flex justify-center items-center py-10 px-9 gap-6 flex-wrap xl:gap-16">
				<div className="flex justify-center items-center w-20 xl:w-32">
					<img className="w-full" src={nestleLogo} alt="Logo Nestle" />
				</div>
				<div className="flex justify-center items-center w-4 xl:w-7">
					<img className="w-full" src={appleLogo} alt="Logo Apple" />
				</div>
				<div className="flex justify-center items-center w-9 xl:w-14">
					<img className="w-full" src={becoLogo} alt="Logo Beco" />
				</div>
				<div className="flex justify-center items-center w-16 xl:w-28">
					<img className="w-full" src={amazonLogo} alt="Logo Amazon" />
				</div>
				<div className="flex justify-center items-center w-16 xl:w-28">
					<img className="w-full" src={googleLogo} alt="Logo Google" />
				</div>
				<div className="flex justify-center items-center w-20 xl:w-36">
					<img className="w-full" src={walmartLogo} alt="Logo Walmart" />
				</div>
			</div>
			<section className="flex py-20 px-16 xl:px-[90px] xl:py-[116px]">
				<div className="flex flex-col justify-center flex-1 gap-14 xl:flex-row xl:gap-[60px]">
					<article className="flex flex-col gap-10 items-center">
						<div className="flex justify-center items-center w-[85px]">
							<img className="w-full" src={iconBone} alt="Icon Bone" />
						</div>
						<h3 className="text-[18px] font-semibold">{getText("textServiceSectionQualityHeading")}</h3>
						<p>{getText("textServiceSectionQualityBody1")}</p>
					</article>
					<article className="flex flex-col gap-10 items-center">
						<div className="flex justify-center items-center w-[85px]">
							<img className="w-full" src={iconAccesorie} alt="Icon Tennis Balls" />
						</div>
						<h3 className="text-[18px] font-semibold">{getText("textServiceSectionToysHeading")}</h3>
						<p>{getText("textServiceSectionToysBody1")}</p>
					</article>
					<article className="flex flex-col gap-10 items-center">
						<div className="flex justify-center items-center w-[85px]">
							<img className="w-full" src={iconPetMedical} alt="Icon Medical Sign" />
						</div>
						<h3 className="text-[18px] font-semibold">{getText("textServiceSectionMedicalHeading")}</h3>
						<p>{getText("textServiceSectionMedicalBody1")}</p>
					</article>
					<article className="flex flex-col gap-10 items-center">
						<div className="flex justify-center items-center w-[85px]">
							<img className="w-full" src={iconPetGrooming} alt="Icon Scissors" />
						</div>
						<h3 className="text-[18px] font-semibold">{getText("textServiceSectionGroomingHeading")}</h3>
						<p>{getText("textServiceSectionGroomingBody1")}</p>
					</article>
				</div>
			</section>
			<article>CITA CONTAINER</article>
			<section>Contactanos section</section>
		</div>
	);
};
