import React, { Component } from 'react';
import axios from 'axios';

export class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeGroup = this.onChangeGroup.bind(this);
        this.onChangeTransaction = this.onChangeTransaction.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            group: '',
            transaction: null,
            
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeGroup(e) {
        this.setState({
            group: e.target.value
        });
    }

    onChangeTransaction(e) {
        this.setState({
            transaction: e.target.value
        });
    }

    

    onSubmit(e) {
        e.preventDefault();
        const { history } = this.props;

        let memberObject = {
            Id: Math.floor(Math.random() * 1000),
            name: this.state.name,
            group: this.state.group,
            transaction: this.state.transaction
            
        }

        axios.post("api/Members/AddMember", memberObject).then(result => {
            history.push("/members");
        })
    }

    render() {
        return (
            <div className="member-form" >
                <h3>Add new member</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Member name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={ this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Member Group: </label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.group}
                            onChange={this.onChangeGroup}
                        />
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Transaction:  </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.transaction}
                                    onChange={this.onChangeTransaction}
                                />
                            </div>
                        </div>

                        </div>
                    


                    <div className="form-group">
                        <input type="submit" value="Add member" className="btn btn-primary" />
                    </div>
                </form>
            </div>            
            )

    }
}
