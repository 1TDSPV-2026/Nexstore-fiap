
interface CartPageProps {
    items: number
}


export function CartPage({items}: CartPageProps) {

    return (
        <section className="mx-auto max-w-2xl">
            <h1 className="mb-5 font-display text-2xl font-bold">Carrinho</h1>
            
            <ul>
                <li>

                    <img src="" alt="" />
                    <p>Produto</p>
                    <p>R$100,00</p>
                </li>
            </ul>

            <div>
                <p>Total</p>
                <p>R$500,00</p>
            </div>
        </section>
    )

}