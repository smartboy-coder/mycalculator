import './index.css'
import { Component } from 'react'
import Button from '../Button/index'

const buttonList = [

    {
        id: 3,
        value: '%'
    },
    {
        id: 4,
        value: '/'
    },
    {
        id: 5,
        value: '7'
    },
    {
        id: 6,
        value: '8'
    },
    {
        id: 7,
        value: '9'
    },
    {
        id: 8,
        value: '*'
    },
    {
        id: 9,
        value: '4'
    },
    {
        id: 10,
        value: '5'
    },
    {
        id: 11,
        value: '6'
    },
    {
        id: 12,
        value: '-'
    },
    {
        id: 13,
        value: '1'
    },
    {
        id: 14,
        value: '2'
    },
    {
        id: 15,
        value: '3'
    },
    {
        id: 16,
        value: '+'
    },
    {
        id: 17,
        value: '0'
    },
    {
        id: 18,
        value: '.'
    }
]

class Home extends Component {
    state = { content: "" }

    toDisplay = (value) => {
       const content = this.state
       console.log(content)
       if(content==="Syntax Error"){
        this.setState(prevState => ({ content:value }))
       }
       else{
        this.setState(prevState => ({ content: prevState.content + value }))
       }
        

    }
    toClear = () => {
        this.setState(({ content: "" }))
    }
    toDel = () => {
        const { content } = this.state
        content.slice(0, -1)
        this.setState(prevState => ({ content: prevState.content.slice(0, -1) }))
    }
    toEval = () => {
        const { content } = this.state
        let calculateValue;

        try {
            calculateValue = eval(content)
        }
        catch
        {
            calculateValue = "Syntax Error";
        }
        this.setState({ content: calculateValue })
    }

    render() {
        const { content } = this.state
        return (
            <div className='container'>
                <div className='calci-box'>
                    <div className='display'>{content}</div>
                    <ul className='buttons-container'>
                        <li>
                            <button className='btn' onClick={this.toClear}>AC</button>
                        </li>
                        <li>
                            <button className='btn' onClick={this.toDel}>DEL</button>
                        </li>
                        {buttonList.map(item => (
                            <Button key={item.id} value={item.value} toDisplay={this.toDisplay} onClick />
                        ))}
                        <li>
                            <button className='equal-btn btn' onClick={this.toEval}>=</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home