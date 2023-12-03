export default function Checkbox ({label, isChecked}){
    return (
        <>
            <label>{label}</label>
            <input type="checkbox" checked={isChecked} />
        </>
    )
}