import React from "react"
import SEO from "./seo"
import "../utils/fontawesome"

const Header = props => {
  return (
    <div className="header py-2 bg-gray-100 border border-orange-600 border-2 border-t-0 border-l-0 border-r-0">
      <SEO title={props.title} description={props.description}></SEO>
      <h1 className="uppercase text-center text-orange-500 text-xl font-thin tracking-widest">
        Shoppin
      </h1>
    </div>
  )
}

export default Header
