import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{

    constructor(){
        super();
        this.state = {
            form: {
                Equipo: "",
                Inicial: "",
                body: ""
            }
        }
    }

    handleSubmit = (e) => {
        const base_url = "http://localhost:3000/api";
        e.preventDefault();

        let url = this.props.match.params.id ? `${base_url}/posts/${this.props.match.params.id}` :  `${base_url}/posts/`;
        let verb = this.props.match.params.id ? "patch" : "post";
        const {form} = this.state;


        axios[verb](url, form)
            .then(() => {
                this.props.history.push("/");
            })
            .catch(err => {
                alert(err.msg);
            })
    };

    componentWillMount() {
        if(!this.props.match.params.id) return;
        const base_url = "http://localhost:3000/api";
        axios.get(`${base_url}/posts/${this.props.match.params.id}`)
            .then(res => {
                const {post} = res.data;
                this.setState({form:post});
            })
    }

    handleChange = (e) => {
        const {form} = this.state;
        let field = e.target.name;
        form[field] = e.target.value;
        this.setState({form});
    };

    render(){
        let {Equipo, Inicial, body} = this.state.form;
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="">
                        Equipo:
                        <input
                            value={Equipo}
                            type="text"
                            name="Equipo"
                            onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        Iniciales:
                        <input
                            value={Inicial}
                            type="text"
                            name="Inicial"
                            onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        <textarea
                            onChange={this.handleChange}
                            value={body}
                            name="body"
                            id=""
                            cols="20"
                            rows="10"
                            placeholder="Lema de tu equipo">
                        </textarea>
                    </label>
                </div>
                <button type="submit">Crear</button>
            </form>
        )
    }
}

export default Form;