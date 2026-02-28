const TESTIMONIALS = [
	{
		name: "Ava Turner",
		role: "Frontend Engineer",
		quote: "This tool halved our development time — it's become part of our workflow.",
		image: "https://i.pravatar.cc/150?img=12",
	},
	{
		name: "Liam Chen",
		role: "Product Lead",
		quote: "Design + dev collaboration is effortless now.",
		image: "https://i.pravatar.cc/150?img=32",
	},
	{
		name: "Sofia Martín",
		role: "CTO",
		quote: "Reliable, fast, and the previews are fantastic.",
		image: "https://i.pravatar.cc/150?img=44",
	},
];

export default function Testimonials() {
	return (
		<section id="testimonials" className="py-20">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-3xl md:text-4xl font-bold mb-6">What customers say</h2>

				{/* Featured testimonial */}
				<div className="grid gap-6 md:grid-cols-3">
					{TESTIMONIALS.map((t) => (
						<div key={t.name} className="p-8 rounded-2xl bg-white/5 dark:bg-gray-200/10 border border-white/8 dark:border-gray-300/20 shadow-lg">
							<div className="flex items-start gap-4">
								<img loading="lazy" src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover shrink-0" />
								<div>
									<div className="text-lg font-semibold">{t.name}</div>
									<div className="text-sm text-gray-700 dark:text-gray-300">{t.role}</div>
									<p className="mt-3 text-gray-700 dark:text-gray-200">“{t.quote}”</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}