import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <title>INMONUEVO - Servicios Jurídicos, Contables e Inmobiliarios</title>
        <meta name="description" content="Estudio jurídico, contable e inmobiliario en Almagro, Buenos Aires. Servicios profesionales personalizados desde 1996." />
      </head>
      <body>{children}</body>
    </html>
  )
}