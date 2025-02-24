export default function GetApp() {
    return (
      <div className="max-w-md bg-white dark:bg-neutral-700 shadow-md rounded-lg p-6 w-96 border-black border py-8">
        {/* Title & Description */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white/80">Get Verified On Our Mobile App</h2>
        <p className="text-gray-500 text-sm mt-2 dark:text-white/60">
          Verifying your identity on our mobile app makes it more secure, faster, and reliable.
        </p>
  
        {/* Download Buttons */}
        <div className="flex items-center mt-4">
          {/* Google Play Button */}
          <a 
            href="#" 
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
          </a>
  
          {/* App Store Button */}
          <a 
            href="#"
          >
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10 w-56" />
          </a>
        </div>
      </div>
    );
  }
  