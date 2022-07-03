import './index.css'

const Button = (props)=>{
    const {value,toDisplay} = props
    const display= ()=>{
        toDisplay(value)
    }
    return(
        <li className='button-container'>
            <button className='btn' type='button' value={value} onClick={display}>{value}</button>
        </li>
    )
}

export default Button