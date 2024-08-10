import "./Button.css"

export default function Button({ title = "Click Me", clickFn }) {
    return (
        <button className="Button" onClick={clickFn}>{title}</button>
    )
}