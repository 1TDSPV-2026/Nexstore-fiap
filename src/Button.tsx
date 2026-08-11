interface ButtonProps {
    text: string
}

export function Button(props:ButtonProps) {

    return (
        <>
            <h2>Esse botão pode ser alterado</h2>
            <button>{props.text}</button>
        </>
    )

}