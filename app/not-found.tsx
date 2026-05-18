import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#030303] text-white p-6">
      <h1 className="text-9xl font-display font-black text-indigo-500 mb-4 animate-pulse">404</h1>
      <h2 className="text-2xl font-bold uppercase tracking-widest mb-8">Page Disconnected</h2>
      <p className="text-white/40 mb-12 text-center max-w-md">
        The requested module could not be found in the current architectural grid.
      </p>
      <Link 
        href="/" 
        className="px-8 py-4 bg-indigo-600 rounded-2xl font-bold uppercase text-[10px] tracking-widest hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20"
      >
        Return to Source
      </Link>
    </div>
  );
}
