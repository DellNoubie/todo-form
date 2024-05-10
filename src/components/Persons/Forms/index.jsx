
import React from 'react'
import { Input } from './textInput';
import { persons } from '../../../utils/persons';

export const Form = (props) => {
    const {onAddPerson}=props;
    const [person, setPerson] = React.useState({
        nom: '',
        age: '',
        sexe: '',
        adresse: '',
        matricule: ''
    });
    const { nom, age, sexe, adresse, matricule } = person;
    const handleChange=(e)=>{
        setPerson((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }));
    }
    const handleSamePerson=()=> {
        persons.push(person);
        onAddPerson();

    }
    
    return (
        <div>
            <Input type="text"
                name="nom"
                placeholder="entrer votre nom"
                value={nom}
                onChange={(e) => {handleChange(e) }} />
            <Input type="number"
                name="age"
                placeholder="entrer votre age"
                value={age}
                onChange={(e) => {handleChange(e) }} />
            <Input type="text"
                name="adresse"
                placeholder="entrer votre adresse"
                value={adresse}
                onChange={(e) => {handleChange(e) }} />
            <Input type="text"
                name="sexe"
                placeholder="entrer votre sexe"
                value={sexe}
                onChange={(e) => {handleChange(e) }} />
            <Input type="text"
                name="matricule"
                placeholder="entrer votre matricule"
                value={matricule}
                onChange={(e) => {handleChange(e) }} />
                <div className='mt-5'>
                    <button className='btn btn-primary' 
                    disabled={nom.trim().length==0} 
                    onClick={handleSamePerson}>
                            Ajouter
                    </button>
                </div>
        </div>
    )
}
