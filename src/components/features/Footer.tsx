import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<footer className="mt-12 border-t border-white/10 sm:mt-16 md:mt-20">
			<div className="container">
				<div className="flex flex-col gap-8 border-b border-gray-800 py-6 md:flex-row md:justify-between md:gap-12">
				<div className="mb-0">
					<div className="flex gap-3 items-center text-nowrap mb-4 sm:gap-4">
				<span>
					<Image
						src="/assets/logo.png"
						alt="Arduino Days 2026 Philippines Logo"
						width={200}
						height={80}
						className="block w-auto h-10 object-contain"
					/>
				</span>
						<p className="font-semibold">Arduino Day Philippines</p>
					</div>
					<p className="max-w-[40ch] text-sm text-gray-400 sm:text-base">
						Empowering ideas, building innovations, and bringing projects to
						life!
					</p>
				<div className="flex gap-4 mt-4 mb-4">
					<a
						href="https://www.facebook.com/arduinodayph"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
					>
						<svg
							width="37"
							height="37"
							viewBox="0 0 37 37"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="18.3707"
								cy="18.3609"
								r="18.3707"
								fill="#D9D9D9"
								className="hover:fill-primary duration-300"
							/>
							<path
								d="M19.3746 19.808V26.1415H16.4653V19.808H14.0482V17.2399H16.4653V16.3055C16.4653 12.8367 17.9144 11.0127 20.9804 11.0127C21.9204 11.0127 22.1553 11.1638 22.6701 11.2868V13.827C22.0938 13.7263 21.9315 13.6703 21.3329 13.6703C20.6223 13.6703 20.2419 13.8717 19.895 14.269C19.5481 14.6662 19.3746 15.3544 19.3746 16.3391V17.2455H22.6701L21.7861 19.8136H19.3746V19.808Z"
								fill="#131118"
							/>
						</svg>
					</a>
					<a
						href="https://www.tiktok.com/@arduinodayph"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="TikTok"
					>
						<svg
							width="37"
							height="37"
							viewBox="0 0 37 37"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="18.3707"
								cy="18.3609"
								r="18.3707"
								fill="#D9D9D9"
								className="hover:fill-primary duration-300"
							/>
							<path
								d="M21.5237 11.5892L21.1587 11.0137H18.9499V16.197L18.9424 21.26C18.9461 21.2976 18.9499 21.339 18.9499 21.3766C18.9499 22.6443 17.9188 23.6787 16.647 23.6787C15.3751 23.6787 14.344 22.648 14.344 21.3766C14.344 20.109 15.3751 19.0746 16.647 19.0746C16.9104 19.0746 17.1662 19.1235 17.4033 19.2062V16.6785C17.1587 16.6371 16.9066 16.6146 16.647 16.6146C14.0242 16.6183 11.8868 18.7549 11.8868 21.3804C11.8868 24.0059 14.0242 26.1425 16.6507 26.1425C19.2773 26.1425 21.4146 24.0059 21.4146 21.3804V15.3582C22.3666 16.3099 23.5971 17.239 24.9593 17.5361V14.952C23.4805 14.2975 22.0092 12.3641 21.5237 11.5892Z"
								fill="#131118"
							/>
						</svg>
					</a>
					<a
						href="https://www.linkedin.com/company/arduinodayph"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<svg
							width="37"
							height="37"
							viewBox="0 0 37 37"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="18.3707"
								cy="18.3609"
								r="18.3707"
								fill="#D9D9D9"
								className="hover:fill-primary duration-300"
							/>
							<path
								d="M14.2224 15.9883H11.0611V26.0693H14.2224V15.9883Z"
								fill="#131118"
							/>
							<path
								d="M22.7739 15.77C22.6574 15.7555 22.5335 15.7482 22.4097 15.7409C20.6397 15.6681 19.6418 16.717 19.2922 17.1686C19.1975 17.2924 19.1538 17.3652 19.1538 17.3652V16.0177H16.1309V26.0987H19.1538H19.2922C19.2922 25.0717 19.2922 24.0519 19.2922 23.0249C19.2922 22.4713 19.2922 21.9177 19.2922 21.3641C19.2922 20.6795 19.2412 19.9511 19.5835 19.3246C19.8749 18.8002 20.3993 18.538 20.9893 18.538C22.7375 18.538 22.7739 20.1186 22.7739 20.2643C22.7739 20.2715 22.7739 20.2788 22.7739 20.2788V26.1424H25.9352V19.565C25.9352 17.3143 24.7916 15.9886 22.7739 15.77Z"
								fill="#131118"
							/>
							<path
								d="M12.6418 14.6838C13.6556 14.6838 14.4774 13.862 14.4774 12.8483C14.4774 11.8345 13.6556 11.0127 12.6418 11.0127C11.6281 11.0127 10.8063 11.8345 10.8063 12.8483C10.8063 13.862 11.6281 14.6838 12.6418 14.6838Z"
								fill="#131118"
							/>
						</svg>
					</a>
					<a
						href="mailto:contact@arduinodayphilippines.com"
					>
						<svg
							width="37"
							height="37"
							viewBox="0 0 37 37"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="18.5"
								cy="18.5"
								r="18.3707"
								fill="#D9D9D9"
								className="hover:fill-primary duration-300"
							/>
							<path
								d="M25.5 13.5H11.5C10.95 13.5 10.505 13.95 10.505 14.5L10.5 22.5C10.5 23.05 10.95 23.5 11.5 23.5H25.5C26.05 23.5 26.5 23.05 26.5 22.5V14.5C26.5 13.95 26.05 13.5 25.5 13.5ZM25.5 15.5L18.5 19.75L11.5 15.5V14.5L18.5 18.75L25.5 14.5V15.5Z"
								fill="#131118"
							/>
						</svg>
					</a>
				</div>
				</div>

				<div className="grid grid-cols-2 gap-8 sm:gap-10 md:gap-20">
					<div>
						<p className="font-semibold mb-2">Navigate</p>
						<ul className="text-gray-400 space-y-1">
							<li>
								<a href="#about" className="hover:text-primary duration-300">
									About
								</a>
							</li>
							<li>
								<a href="#speakers" className="hover:text-primary duration-300">
									Speakers
								</a>
							</li>
							<li>
								<a href="#agenda" className="hover:text-primary duration-300">
									Agenda
								</a>
							</li>
						<li>
							<a href="#faqs" className="hover:text-primary duration-300">
								FAQs
							</a>
						</li>
						</ul>
					</div>
					<div>
						<p className="font-semibold mb-2">Get Involved</p>
						<ul className="text-gray-400 space-y-1">
							<li>
								<a href="mailto:arduinodayph@gmail.com" className="hover:text-primary duration-300">
									Contact Us
								</a>
							</li>
							<li>
								<a href="#partners" className="hover:text-primary duration-300">
									Partners
								</a>
							</li>
						</ul>
					</div>
				</div>
				</div>
				<div className="flex justify-center items-center text-xs text-center py-6 text-gray-400 sm:text-sm sm:py-8 md:text-base">
					<p>© 2026 Arduino Day Philippines. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
