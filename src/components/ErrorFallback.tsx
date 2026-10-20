import { getErrorMessage, type FallbackProps } from 'react-error-boundary'

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {

    return (
        <div className="rounded-xl border boreder-red-200 bg-red-50 p-6 text-center">
            <p className="font-medium text-red-800">Algo quebrou nesta parte da página</p>

            <p className="mt-2 whitespace-pre-wrap font-mono text-xs text-red-700">{getErrorMessage(error)}</p>

            <button className="mt-3 rounded-full bg-red-600 px-4 py-1.5 text-sm text-white hover:bg-red-700" onClick={resetErrorBoundary}>Tentar novamente</button>
        </div>
    )

}