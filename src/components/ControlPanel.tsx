import PropTypes from 'prop-types'

type ControlPanelProps = {
    name: string;
    onChange: any;
}

const ControlPanel = ({ name, onChange }: { name: string, onChange: any }) => {
    return (
        <form action="" className="flex flex-row gap-4 text-white bg-primary" onSubmit={(event) => event.preventDefault()}>
            <div>
                <label className='font-bold'>Your Name</label>
                <input name="name" className='w-full' type="text" value={name} onChange={onChange} />
            </div>
        </form>
    )
}

export default ControlPanel