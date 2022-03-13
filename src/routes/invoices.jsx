import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom"
import { getInvoices } from "../data"

export default function Invoices() {
  let invoices = getInvoices()
  let [searchParams, setSearchParams] = useSearchParams()

  return (
    <div style={{display: "flex"}}>
      <nav style={{
        borderRight: "solid 1px",
        padding: "1rem"
      }}>
        <input 
          value={searchParams.get("xxx") || ""}
          onChange={(event)=> {
            let xxx = event.target.value;
            if(xxx) {
              setSearchParams({xxx, b: 111});
            } else {
              setSearchParams({})
            }
          }} />
        {invoices
        .filter((invoice) => {
          let xxx = searchParams.get("xxx")
          if (!xxx) return true;
          let name = invoice.name.toLowerCase()
          return name.startsWith(xxx.toLowerCase())
        })
        .map((invoice) => (
          <NavLink 
            style={({isActive}) => (
              {
                display: "block", 
                margin: "1rem 0",
                color: isActive ? "red" : ""
              })}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}>
              {invoice.name}
          </NavLink>
        ))}

      </nav>
      <Outlet />
    </div>
  )
}