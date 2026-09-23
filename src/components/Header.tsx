import { ShoppingCart } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

interface HeaderProps {
    totalItems: number
}

type IsActive = { isActive: boolean }

const linkClass = ({ isActive } :IsActive ):string => {
    return `rounded-full px-3 py-1.5 text-sm font-medium transition ${isActive ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-stone-200"}`
}

export function Header({totalItems}: HeaderProps) {

    return (
        <header className="sticky top-0 z-10 border-b border-stone-200 bg-stone-50/95 backdrop-blur-sm">

            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 ">

                <Link to='/' className="flex max-w-6xl items-center text-xl font-bold"> 
                    Nex<span className="text-indigo-600">Store</span>
                </Link>

                <nav className="flex items-center gap-1">

                    <NavLink to="/" className={linkClass}>
                        Catálogo
                    </NavLink>

                    <NavLink to="/carrinho" className={linkClass}>
                        <span className="flex items-center gap-1.5">
                            <ShoppingCart size={15} />
                            Carrinho

                            {totalItems > 0 && (
                                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">
                                    {totalItems}
                                </span>
                            )}
                        </span>
                    </NavLink>

                </nav>

            </div>

        </header>
    )

}