import React, {Component} from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import {Media, Form, FormGroup, FormControl, Button, Nav} from 'react-bootstrap';

class GitHub extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            isLoading:false,
            searchTerm:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        //this.getGitHubData('greg');
    }

    getGitHubData(_searchTerm) {
        axios.get(`https://api.github.com/search/users?q=${_searchTerm}`)
            .then(response => {
                console.log(response.data);
                setTimeout(() => {
                    this.setState({
                        isLoading:false,
                        data: response.data.items
                    });
                }, 1000);
            });
    }

    handleChange(e) {
        this.setState({searchTerm:e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading:true
        });
        this.getGitHubData(this.state.searchTerm);
    }

    render() {
        const listUsers = this.state.data.map((user) =>         
            <Media key={user.id}>
                <Nav.Link href={`/github/user/${user.login}/${user.id}`}>
                    <img 
                        width={64}
                        height={64}
                        className="mr-3"
                        src={user.avatar_url}
                        alt="Generic placeholder"
                    />
                </Nav.Link>
                
                <Media.Body>
                    <h5>Login:{user.login}</h5>
                    <p>Id:{user.id}</p>
                </Media.Body>
            </Media>
        );

        const inputForm = 
        <Form inline onSubmit={this.handleSubmit}>
            <FormGroup controlId="formInlineName">
                <FormControl
                    type="text"
                    value={this.state.searchTerm}
                    placeholder="Enter Search Term"
                    onChange={this.handleChange}
                />
                {''}
                <Button type='submit'>
                    Search
                </Button>
            </FormGroup>
        </Form>;

        return(
            <div>
                {inputForm}
                <h3>Github Users Results</h3>
                {this.state.isLoading && <ReactLoading type="spokes" color="#444"/>}
                {listUsers}
            </div>
        );
    }
}
export default GitHub;