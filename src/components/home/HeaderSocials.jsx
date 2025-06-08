import React from "react";
import {
	FaGithub,
	FaFacebookF,
	FaLinkedinIn,
	FaTwitter,
	FaDev,
	FaInstagram,
} from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const HeaderSocials = () => {
	return (
		<div className="home__socials">
			<a
				href="https://github.com/shubhyadav426"
				className="home__social-link"
				target="_blank"
				rel="noreferrer">
				<FaGithub />
			</a>

			<a
				href="https://www.linkedin.com/in/shubham-yadav-9b91b3273//"
				className="home__social-link"
				target="_blank"
				rel="noreferrer">
				<FaLinkedinIn />
			</a>
			<a
				href="https://www.instagram.com/shubhxthetic/"
				className="home__social-link"
				target="_blank"
				rel="noreferrer">
				<FaInstagram />
			</a>
		</div>
	);
};

export default HeaderSocials;
