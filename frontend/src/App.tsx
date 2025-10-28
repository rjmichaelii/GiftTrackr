export default function App() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 36, margin: 0 }}>Hello, GiftTrackr 👋</h1>
        <p style={{ opacity: 0.8, marginTop: 8 }}>
          Phase 1: Frontend skeleton deployed to GitHub Pages.
        </p>
        <a href="https://github.com/rjmichaelii/GiftTrackr" style={{ display:'inline-block', marginTop:16 }}>
          View on GitHub
        </a>
      </div>
    </main>
  )
}
