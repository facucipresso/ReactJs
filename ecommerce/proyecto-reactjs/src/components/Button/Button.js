import './Button.css'

const Button = ({children, style, handleOnClick}) => {
    return (
    <button 
        className='Button'
        style={style}
        onClick={()=>handleOnClick(children)}>
        
        {children}
        
        </button>
    )
}

export default Button
