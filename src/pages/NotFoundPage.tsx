import { Link } from "react-router-dom";


export function NotFoundPage() {

    return (
        <section className="py-24 text-center">
            <p className="font-display text-5xl font-bold text-stone-300">404</p>

            <h1 className="mb-2 mt-3 font-display text-xl font-bold">Página não encontrada</h1>

            <p className="mb-5 text-sm text-neutral-500">O endereço digitado não existe no Nexstore</p>

            <Link className="btn-primary" to="/">Voltar ao catálogo</Link>
        </section>
    )

}