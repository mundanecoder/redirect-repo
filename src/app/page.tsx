import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4 overflow-hidden">
      <div className="relative">
        {/* Decorative background shapes */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-300 rounded-full opacity-30 blur-3xl"></div>

        {/* Main content container */}
        <div className="relative z-10 bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 sm:p-12 max-w-md w-full transform transition-all hover:scale-[1.02]">
          {/* Logo Placeholder - Replace with your actual logo */}

          <div className="flex justify-center mb-6 ">
            <div className="bg-black shadow-lg">
              <Image
                src="/logo.svg"
                alt="Chop Finance Logo"
                width={96}
                height={96}
                className="rounded-full shadow-lg"
              />
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">
            Website Relocated
          </h1>

          <p className="text-gray-600 text-center mb-6 leading-relaxed">
            We&apos;ve moved to a new digital home. Please update your bookmarks
            and follow the link below.
          </p>

          <div className="text-center">
            <a
              href="https://www.chat.chopfinance.ai"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              www.chat.chopfinance.ai
            </a>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500 space-y-2">
            <p>Redirecting automatically in 3 seconds...</p>
            <p className="text-xs">Having trouble? Click the link above.</p>
          </div>
        </div>
      </div>

      {/* Auto-redirect script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            setTimeout(() => {
              window.location.href = 'https://www.chat.chopfinance.ai';
            }, 900000);
          `,
        }}
      />
    </div>
  );
}
