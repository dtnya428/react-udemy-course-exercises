import './Concept.css'
import ConceptItem from './ConceptItem';

const Concept = (concepts) => {

    // console.log(concepts);


    return (

        <div>
            <ConceptItem concept={concepts.concepts[0]}></ConceptItem>
            <ConceptItem concept={concepts.concepts[1]}></ConceptItem>
            <ConceptItem concept={concepts.concepts[2]}></ConceptItem>
        </div>

    );

}

export default Concept;