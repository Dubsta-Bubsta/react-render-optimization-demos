export const Paragraph = (props) => <p class="h5 mt-3">{props.children}</p>


export const Button = (props) => (
    <button
        type="button"
        class="btn btn-primary mt-3"
        onClick={props.onClick}
    >
        <p className="h4">{props.children}</p>
    </button>
)

export const Input = (props) => (
    <input
        type="text"
        class="form-control mb-3"
        placeholder="Text"
        value={props.value}
        onChange={props.onChange}
    />
)


export const Container = (props) => <div style={{ margin: "10vh auto", maxWidth: 500 }}>{props.children}</div>