
export default function InputPane(props) {
    const handleChange = (e) => {
        props.setInput(e.target.value)
    }
    console.log(props.input)
    return (
        <div className="inputPane">
            <h2>Input</h2>
            <textarea onChange={handleChange} defaultValue={props.input} />
        </div>
    )
}