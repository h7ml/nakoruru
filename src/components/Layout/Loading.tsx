export function Loading() {
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center bg-[rgba(0,0,0,0.6)] z-1">
      <div
        className="w-25 h-25 bg-cover"
        style={{
          backgroundImage: 'url("/loading.webp")',
        }}
      />
    </div>
  )
}
