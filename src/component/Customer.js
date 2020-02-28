import React,{Component} from 'react';
import "./Customer.css"

class Customer extends Component {
    render() {
        return (
            <>
                <tr>
                    <td>{this.props.id}</td>
                    <td><img src={this.props.image} alt={this.props.name}/></td>
                    <td>{this.props.name}</td>
                    <td>{this.props.birthday}</td>
                    <td>{this.props.gender}</td>
                    <td>{this.props.job}</td>
                </tr>
            </>
        )
    }
}

export default Customer;