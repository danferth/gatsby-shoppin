import React from "react"

const Footer = () => {
  const y = new Date()
  return (
    <div className="footer pt-1 pb-2 border border-2 border-orange-500 border-r-0 border-l-0 border-b-0">
      <p className="text-center font-hairline text-xs text-gray-500">
        &copy; {y.getFullYear()} | devferth
      </p>
    </div>
  )
}

export default Footer
