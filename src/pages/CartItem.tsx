


export function CartItem() {

    return (
        <section>
            <h1>Carrinho</h1>
            <ul>
                <li>

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMphlspWtoOFycNkCgKkuJmJmPLgTkBEYU-eXsAygXiNZXTNfTZBHJ-4&s=10" alt="imagem da fiap" />

                    <div>
                        <p>Curso de IA</p>
                        <p>R$1.000,00</p>
                    </div>

                    <div>
                        <button>Diminuir quantidade</button>
                        <button>Aumentar quantidade</button>
                    </div>

                    <button>Remover</button>
                </li>
            </ul>
        </section>
    )

}