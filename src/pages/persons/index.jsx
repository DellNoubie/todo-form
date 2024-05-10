import React from 'react'
import { Form } from '../../components/Persons/Forms'
import { Input } from '../../components/Persons/Forms/textInput'
import { PersonItem } from '../../components/Persons/PersonItem'
import { persons } from '../../utils/persons'

export const Persons = () => {
    const [isAddPerson,setIsAddPerson]=React.useState(false);
  return (
    <div>
        <h1 className='center'>Personnal Management</h1>
        <div className='mt-5'>
            <div className='grid'>
                <div>
                    <h5>Visualisation</h5>
                    <Input type="search"
                    name="search"
                    value=""
                    placeholder="Effectuer une recherche"
                    onChange={()=>{}}/>
                    {
                        persons.map((person,index)=>(
                            <PersonItem person={person}/>

                        ))
                    }
                </div>
                <div className='mt-5'>
                    <h5 className='center'>Formulaire</h5>
                    <Form onAddPerson={() => setIsAddPerson(!isAddPerson)}/>
                </div>
            </div>
        </div>
    </div>
  )
}
