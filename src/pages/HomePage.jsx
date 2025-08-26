import { Section } from "../components/Section";
import heroImage from "../assets/pictures/hero-image.png";
import { Link } from "react-router-dom";

export const HomePage = () => {
	return (
		<div>
			<Section className={"flex flex-col px-5 py-20 bg-[#F7F5FD] gap-10 xl:flex-row xl:gap-20 xl:px-25"}>
				<article className="flex flex-col gap-10 text-center items-center flex-1 xl:text-left xl:items-start xl:gap-12">
					<h1 className="text-5xl text-[#2D2D2D] font-bold xl:text-[6rem]">Pet Store & Beyond</h1>
					<p className="text-[#2D2D2D]">
						This is a sample landing page, created with Figma and Anima. No coding involved.
					</p>
					<Link to="/login-page" className="bg-[#F8D57E] px-8 py-2 rounded-lg xl:px-13 xl:py-4">Get Started</Link>
				</article>
				<div className="flex w-[500]">
					<img className="w-full" src={heroImage} alt="Hero Image" />
				</div>
			</Section>
			<div>VIDEO CONTAINER</div>
			<div>SPONSOR BRANDS CONTAINER</div>
			<div>SERIVCES CONTAINER</div>
			<article>CITA CONTAINER</article>
			<section>Contactanos section</section>
		</div>
	);
};
