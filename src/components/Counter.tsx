import { useEffect, useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    const [input, setInput] = useState(counter)

    useEffect(() => { setInput(0) }, [counter])

    return (
        <section>
            <h1>Days Since the Last Accident</h1>
            <p>{counter}</p>
            <div>
                <button onClick={() => setCounter(counter => counter + 1)}>+1</button>
                <button onClick={() => setCounter(0)}>Reset</button>
                <button onClick={() => setCounter(counter => counter - 1)}>-1</button>
            </div>
            <div>
                <form onSubmit={(e) => { e.preventDefault(); setCounter(input); }}>
                    <input type="number" value={input} onChange={(e) => { setInput(e.target.valueAsNumber) }} />
                    <button type='submit'>Update Counter</button>
                </form>
            </div>
        </section >
    )
}

export default Counter