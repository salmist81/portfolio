function PostIt(props) {

    const {title, message, color} = props;
    
    const dynamicStyles = {
        backgroundColor: color,   
    }

    return (
        <div style={dynamicStyles} className="postcard">
           <h3>{title}</h3> 
            <p>{message}</p>
        </div>
    )
    
}
export default PostIt;