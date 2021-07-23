const DropDown = ({ title, options, onChange }) => {
    return (
        <div>
            {/* <label>{title}</label> */}
            <select className="custom-select d-block w-100" onChange={onChange} required>
                <option value="all">seleccionar {title}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDown;