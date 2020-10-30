import React, { Component } from 'react'
import Courses from './Courses'

class Coursesales extends Component {
    sumPrice(price) {
        this.setState({ total: this.state.total + price })
    }
    constructor(props) {
        super(props);

        this.state = {
            total: 0
        };
        
        this.sumPrice = this.sumPrice.bind(this);
    }

    render() {
        var courses = this.props.items.map((item,i)=>{
            return <Courses name={item.name} price={item.price}
            key={i} sumPrice = {this.sumPrice} active={item.active} />
        })
        return (
            <div>
                <h2>You can buy courses </h2>
                <div id="courses">
                    {courses}
                    <p id="total">
                        Total
                        <b>{this.state.total}</b>
                    </p>
                </div>
            </div>
        )
    }
}



export default Coursesales;