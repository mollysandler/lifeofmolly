// "use client"

// import { usePathname, useSearchParams } from "next/navigation"
// import { useEffect } from "react"

// export function Analytics() {
//   const pathname = usePathname()
//   const searchParams = useSearchParams()

//   useEffect(() => {
//     // Add your analytics code here
//     const url = `${pathname}${searchParams?.toString() ? `?${searchParams}` : ""}`
//     console.log(`Page view: ${url}`)
//   }, [pathname, searchParams])

//   return null
// }
