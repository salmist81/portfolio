function Image(props) {

    const {imgSource, captionText, hasBorder} = props;
    return (
        <div>
        <img src={imgSource}
        className={hasBorder ? "border" : ""}
        
        />

        <p>{captionText}</p>
        
        </div>
    );
    
}
export default Image;