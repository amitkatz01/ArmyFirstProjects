// Custom Input component

function Input({ label, id, error, ...props }) {
    return (
        <div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                {...props} />
            <div className="control-error"> {/* Error message container */}
                {error && <p>{error}</p>}
            </div>
        </div>
    )
};

export default Input;