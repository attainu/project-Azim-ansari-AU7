import React, {useState} from 'react';
import Layout from '../components/Layout';
import { API } from '../config';

const Signup = () => {
    const [values, setValues] = useState({name: "",email: "",password:"",error:"",Success: false})

    const {name, email, password} = values

    const signup = (user) => {
        // console.log(name, email, password)
        // fetching the data..
        fetch(`${ API }/signup`,{
            method: "POST",
            header: {
                Accept: 'application/json',"Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            return response.json();
        }) 
        .catch(err => {
            console.log(err);
        })
    }

    

    const handleChange = name => event => {
        setValues({...values,error: false, [name]: event.target.value });
    }
    // const formSubmit = (event) => {
    //     event.preventDefault()
    //     signup({name, email, password})
    // }

    // const signup = (name, email ,password) => {
    //     console.log(name, email, password);
    // }

    const clickSubmit = (event) => {
        event.preventDefault()
        signup({name, email, password})
    }

    const SignUpForm = () => (
        <form>
           <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange("name")} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange("email")} type="email" className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange("password")} type="Password" className="form-control" />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">READY</button>
        </form>
    );

    return(
        <Layout title="Sign up " description=" Sign up to Ecommerce App"className="container col-md-7 offset-md-3">
            {API}
        {SignUpForm()}
        {JSON.stringify(values)}
        </Layout>
    )
}

export default Signup ;
 