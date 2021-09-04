import React, { Component } from 'react';
import axios from 'axios'
export class Trips extends Component {
    constructor(props) {
        super(props);

        this.onMemberpUpdate = this.onMemberUpdate.bind(this);

        this.state = {
            members: [],
            loading: true
        }
    }

    componentDidMount() {
        this.populateMembersData();
    }

    onMemberUpdate(id) {
        const { history } = this.props;
        history.push("/update/" + id);
    }

    populateMembersData() {
        axios.get("api/Members/GetMembers").then(result => {
            const response = result.data;
            this.setState({members: response, loading: false});
        })
    }

    renderAllMembersTable(members) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Group</th>
                        <th>Transaction</th>
                        
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        members.map(members => (
                            <tr key={member.id}>
                        <td>{member.name}</td>
                        <td>{member.group}</td>
                        <td>{member.transaction}</td>
                        
                                <td>
                                    <div className="form-group">
                                        <button onClick={() => this.onMemberUpdate(member.id)} className="btn btn-success">
                                            Update
                                    </button>
                                    </div>
                                </td>
                    </tr>
                        ))
                    }                    
                </tbody>
            </table>            
        );
    }

    render() {
        let content = this.state.loading ? (<p><em>Loading...</em></p>) : (this.renderAllMembersTable(this.state.memers));

        return (
            <div>
                <h1>All Members</h1>
                <p>View  all transactions</p>
                {content}
            </div>
            );
    }
}