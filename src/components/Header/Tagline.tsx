export default function Tagline() {
  return (
    <div
      className='col-[2/4] flex animate-shine flex-col justify-center border-r border-black-light bg-clip-text p-5 font-atariClassic text-xs leading-6 text-[#e3e3e38b]'
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 70%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
      }}
    >
      <h2>GET MORE OUT CREARIVITY.</h2>
      <h2>
        NEW IDEAS STILL NEEDED<span className='animate-blink'>.</span>
      </h2>
    </div>
  );
}
