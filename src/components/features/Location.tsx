import React from "react";

const Location = () => {
	const venueName = "Asia Pacific College";
	const mapQuery = encodeURIComponent("Asia Pacific College, Makati, Metro Manila, Philippines");
	const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

	return (
		<div className="container grid w-full grid-cols-1 items-center justify-between gap-6 md:grid-cols-2 md:gap-12">
			<div className="text-center md:text-left">
				<h2>
					Venue is at <span className="text-secondary">{venueName}</span>
				</h2>
				<p className="mt-3 md:text-xl">
					Join us at {venueName}. Full address details and onsite logistics will be shared closer to the event.
				</p>
			</div>
			<div className="rounded-3xl border border-white/10 bg-[#0d0f17] px-6 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
				<div className="flex flex-col items-center gap-3 text-center">
					<p className="text-xs uppercase tracking-[0.22em] text-white/60">Location</p>
					<p className="text-2xl font-semibold">{venueName}</p>
					<p className="text-sm text-white/70 md:text-base">Makati, Metro Manila, Philippines</p>
					<div className="mt-4 w-full overflow-hidden rounded-2xl border border-white/10">
						<div className="aspect-[16/10] w-full">
							<iframe
								title={`${venueName} map`}
								src={mapSrc}
								className="h-full w-full"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Location;
