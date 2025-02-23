import { useStore } from '@nanostores/react'
import { counterStore } from '../../store'

function TestComponent() {
  const count = useStore(counterStore)

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-bold mb-4">Test Component React</h2>
      <p className="mb-4">Contatore: {count}</p>
      <button
        onClick={() => counterStore.set(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Incrementa
      </button>
    </div>
  )
}

export default TestComponent
