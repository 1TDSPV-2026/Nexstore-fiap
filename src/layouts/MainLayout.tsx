import { Link, Outlet } from "react-router-dom";


export function MainLayout() {

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Catalogo</Link>
                    </li>
                    <li>
                        <Link to="/cart">Itens disponiveis</Link>
                    </li>
                </ul>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer>Nexstore - projeto acadêmico</footer>
        </div>
    )

}