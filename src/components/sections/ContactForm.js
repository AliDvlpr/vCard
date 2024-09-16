/* eslint-disable no-unused-vars */
import { Formik } from "formik";

const ContactForm = (props) => {
	const formData = {
		formspreeURL: "https://formspree.io/f/xpzobwob",
	};

	return (
		<div className="content contacts">
			{/* title */}
			<div className="title">فرم تماس</div>
			<div className="body">					
				در حال بروزرسانی
			</div>
		</div>
	);
};
export default ContactForm;
