const PLANS = [
	{
		id: "starter",
		name: "Starter",
		price: "$0",
		cadence: "/mo",
		tagline: "For individual developers",
		perks: ["Core editor", "Community support", "Unlimited public projects"],
	},
	{
		id: "professional",
		name: "Professional",
		price: "$29",
		cadence: "/mo",
		tagline: "Best for teams",
		perks: ["Everything in Starter", "Private repos", "CI test runner", "Priority support"],
		popular: true,
	},
	{
		id: "enterprise",
		name: "Enterprise",
		price: "$199+",
		cadence: "/mo",
		tagline: "Scale & SSO",
		perks: ["All Professional features", "SAML/SSO", "Dedicated success manager", "SLAs"],
	},
];

export default function Pricing() {
	return (
		<section id="pricing" className="py-20">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-3xl font-bold mb-6">Pricing</h2>
				<div className="grid gap-6 md:grid-cols-3">
					{PLANS.map((p) => (
						<div
							key={p.id}
							className={`p-6 rounded-2xl border bg-white/4 backdrop-blur-md border-white/6 card-hover ${p.popular ? 'transform scale-105 ring-2 ring-blue-400/25 shadow-lg' : ''}`}
						>
							{p.popular && (
								<div className="mb-3 inline-block px-3 py-1 rounded-full text-sm bg-blue-500/25 text-blue-200">Most popular</div>
							)}
							<h3 className="text-xl font-semibold">{p.name}</h3>
							<div className="mt-2 flex items-baseline gap-2">
								<div className="text-3xl font-bold">{p.price}</div>
								<div className="text-sm text-gray-300">{p.cadence}</div>
							</div>
							<div className="text-sm text-gray-300 mt-1">{p.tagline}</div>

							<ul className="mt-4 space-y-2 text-gray-300">
								{p.perks.map((t) => (
									<li key={t} className="flex items-start gap-2"> 
										<span className="text-blue-300">✓</span>
										<span>{t}</span>
									</li>
								))}
							</ul>
							<div className="mt-6">
								{p.id === 'enterprise' ? (
									<button className="w-full py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white btn-transition">Contact Sales</button>
								) : (
									<button className="w-full py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white btn-transition">Get {p.id === 'starter' ? 'Started' : 'Pro'}</button>
								)}
							</div>
						</div>
					))}
				</div>

				<div className="mt-6 text-sm text-gray-300">
					Need a custom plan? <a href="#" className="text-white underline">Contact sales</a>
				</div>
			</div>
		</section>
	);
}