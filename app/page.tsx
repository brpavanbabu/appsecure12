// Check if your main page component is properly defined
// Make sure it's exporting a default component
// ... 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Secure Chat Application</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">Welcome to our secure chat platform. This application provides:</p>
          
          <ul className="list-disc pl-5 mb-4">
            <li>End-to-end encrypted messaging</li>
            <li>Secure authentication with NextAuth.js</li>
            <li>Private conversations</li>
            <li>Message history</li>
          </ul>
          
          <div className="mt-6">
            <a 
              href="/api/auth/signin" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign In to Start Chatting
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 