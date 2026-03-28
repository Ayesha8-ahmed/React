import './Child.css'
function Child({theme}){
    return(
        <div className={theme}>
            <h1>CHILD THEME</h1>
        </div>
    );
}
export default Child;