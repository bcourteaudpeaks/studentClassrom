import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addStudent} from '../../actions/index';
import './AddStudent.css';


const mapDispatchToProps = dispatch => {
    return {
        addStudent: student => dispatch(addStudent(student))
    };
};

class AddStudent extends Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({'fullName': event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const {fullName} = this.state;
        if (fullName) {
            const id = new Date().getUTCMilliseconds();
            this.props.addStudent({fullName, id});
            this.resetNewStudent()
        }
    }

    resetNewStudent() {
        this.setState({fullName: ''})
    }

    render() {
        const {fullName} = this.state;
        return (
            <form className="header" onSubmit={this.handleSubmit}>
                <label className="label" htmlFor="fullname">Nom Complet:</label>
                <input className="input" id="fullname" type="text" value={fullName}
                       onChange={this.handleChange}/>
                <input className="button" type="submit" value="Ajouter"/>
            </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(AddStudent);

export default Form;