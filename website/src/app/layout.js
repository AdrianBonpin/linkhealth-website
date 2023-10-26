import './globals.css'

export const metadata = {
  title: 'LinkHealth',
  description: 'Linking health and wellness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {children}
    </html>
  )
}
