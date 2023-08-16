import './ConceptItem.css';

const ConceptItem = (concepts) => {
    const title = concepts.concept.title;
    const description = concepts.concept.description;


    console.log();

    return (
        <li className='concept'>
            <img src="TODO: IMAGE" alt="TODO: TITLE" />
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    );

}

export default ConceptItem;