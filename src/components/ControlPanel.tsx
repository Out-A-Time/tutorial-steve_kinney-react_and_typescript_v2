// interface ControlPanelProps {
//     name: string;
//     onChange: React.ChangeEventHandler<HTMLInputElement>;
// }

// interface SpecialControlPanelForAdmins extends ControlPanelProps {
//     isAdmin: true;
// }

type ControlPanelProps = {
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

type AdminControls = ControlPanelProps & { admin: true }

const ControlPanel = ({ name, onChange }: ControlPanelProps) => {
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