import React from "react";
const Location = () => {
	return (
		<div className="container grid grid-cols-1 items-center gap-6 md:gap-12 md:grid-cols-2 justify-between w-full">
			<div className="text-center md:text-left">
				<h2>
					<span className="text-secondary">191</span> total events around the
					world only <span className="text-secondary">1</span> in the
					Philippines.
				</h2>
				<p className="mt-3 md:text-xl">
					Join us in this annual technology event.
				</p>
			</div>
			<div>
				<iframe
					title="STI College Cubao Map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6958210270936!2d121.05148187582098!3d14.61639597668832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7c19c3b5f3b%3A0xbf690aabaf3313d2!2sSTI%20College%20Cubao!5e0!3m2!1sen!2sph!4v1741893810604!5m2!1sen!2sph" 
					className="rounded-3xl w-full h-[350px] md:h-[400px]"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
				<noscript>
					<p>
						Google Maps is not available. Please enable JavaScript to view the
						map.
					</p>
				</noscript>
			</div>
		</div>
	);
};
export default Location;
