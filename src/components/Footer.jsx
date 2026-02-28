export default function Footer() {
	return (
<footer className="border-t border-white/6 dark:border-gray-300/20 mt-12 py-8">
		<div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-300 dark:text-gray-700">
				<div>© {new Date().getFullYear()} CodeFlow — All rights reserved.</div>
				<div className="mt-2">
					<a href="#" className="underline mr-3">Privacy</a>
					<a href="#" className="underline">Terms</a>
				</div>
			</div>
		</footer>
	);
}