import { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const INITIAL_NEWS_FORM_DATA = {
	userEmail: "",
};

export const NewsForm = () => {
	const { getText } = useContext(LanguageContext);

	const [newsFormData, setNewsFormData] = useState(INITIAL_NEWS_FORM_DATA);
	const [errorKey, setErrorKey] = useState("");

	const onInputChange = (event) => {
		const { name, value } = event.target;

		setErrorKey("");
		setNewsFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleNewsForm = () => {
		if (!newsFormData?.userEmail) return setErrorKey("errorNotEmailAdded");
		if (!newsFormData?.userEmail.includes("@")) return setErrorKey("errorEmailAdded1");
		if (!newsFormData?.userEmail.includes(".")) return setErrorKey("errorEmailAdded2");
		if (newsFormData?.userEmail.length < 4) return setErrorKey("errorEmailAddedShorter");
		if (newsFormData?.userEmail.length > 30) return setErrorKey("errorEmailAddedLonger");
		console.log("Email Registrado", newsFormData);
		return setNewsFormData(INITIAL_NEWS_FORM_DATA);
	};

	return (
		<div className="news-form flex flex-col gap-3">
			<label htmlFor="userEmail" className="text-[18px] text-[#2D2D2D]">
				{getText("textNewsFormLabel")}
			</label>
			<div className="flex flex-col gap-5 xl:flex-row">
				<input
					className="px-5 py-3 border-1 border-[#D0D0D0] rounded-lg text-[#2D2D2D] text-[18px] placeholder:text-[#2D2D2D] xl:min-w-[320px]"
					type="email"
					name="userEmail"
					id="userEmail"
					value={newsFormData?.userEmail}
					onChange={onInputChange}
					placeholder={getText("textNewsFormInputPlaceholder")}
				/>
				<button
					className="py-3 bg-[#3366FF] text-white rounded-lg shadow-md/40 transition active:shadow-transparent active:inset-shadow-sm/50 active:inset-shadow-[#23315b] xl:px-9"
					onClick={handleNewsForm}
				>
					{getText("textNewsFormButton1")}
				</button>
				{errorKey && <p className="text-red-500 italic">{getText(errorKey)}</p>}
			</div>
		</div>
	);
};
