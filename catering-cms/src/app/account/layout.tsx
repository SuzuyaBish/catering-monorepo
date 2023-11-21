import { SiteHeader } from "@/components/layout/SiteHeader"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <div className="flex-1">{children}</div>
    </>
  )
}
