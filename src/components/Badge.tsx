const addTwo = (n: number): number => n + 2

const Badge = (props: { name: string }): JSX.Element => {
    // const Badge = ({ name }: { name: string }) => {
    // if (Math.random()) return null
    return (
        <section>
            <header className="badge-header">
                <h1 className="text-5xl">HELLO</h1>
                <p>My name is...</p>
            </header>
            <div className="badge-body">
                <p className="badge-name">{props.name}</p>
                {/* <p className="badge-name">{name}</p> */}

            </div>
            <footer className="badge-footer"></footer>
        </section>
    )
}

export default Badge