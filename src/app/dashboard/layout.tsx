import React from 'react'

export default function DashboardLayout({children}:{children : React.ReactNode}) {
  return (
    <div>
        <section>
            <nav>
                {children}
            </nav>
        </section>
    </div>
  )
}
