import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // for demo we'll just fake a submission
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Thanks for reaching out! We'll be in touch soon.");
      setForm({ email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white/5 dark:bg-gray-200/20 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white/5 dark:bg-gray-200/20 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white btn-transition"
            >
              Submit
            </button>
          </div>
          {status && <p className="text-green-300 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}
