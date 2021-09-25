import './Loader.css'

const Loader = (props) => {
    return (
        <div className="loaderContainer" style={{visibility:props.isLoading?"visible":"hidden"}}>
            <div className="loader"></div>
            <h5>Saving counter value</h5>
        </div>
    )
}

export default Loader;