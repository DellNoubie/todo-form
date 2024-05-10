import React from 'react'
import { persons } from '../../../utils/persons';

export const PersonItem = (props) => {
    const { person } = props;
    const [personsList, setPersonsList] = React.useState(persons);
    const deletePerson = (id) => {
  const index = personsList.findIndex(item => item.id === id);
  if (index !== -1) {
    personsList.splice(index, 1);
    setPersonsList([...personsList]); // Mettre à jour l'état avec une nouvelle référence de tableau
  }
};
    
    const { nom, age, sexe, adresse, matricule, id } = person;
    return (
        <div className='flex border mt-5'>
            <div>
                <h6>Nom: {nom}</h6>
                <h6>Age: {age}</h6>
                <h6>Sexe: {sexe}</h6>
                <h6>Adresse: {adresse}</h6>
                <h6>Matricule: {matricule}</h6>
            </div>
            <div>
                <button className='btn-small btn-primary'>modifier</button>
                <button className='btn-small btn-danger'onClick={() => deletePerson(id)}>supprimer</button>
            </div>
        </div>
    )
}
