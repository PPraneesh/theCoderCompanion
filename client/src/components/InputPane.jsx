
export default function InputPane(props) {
    const handleChange = (e) => {
        props.setInput(e.target.value)
    }
    return (
        <div>
            <textarea name="" id="" cols="30" rows="1" onChange={handleChange} >
                {props.input}
            </textarea>

        </div>
    )
}