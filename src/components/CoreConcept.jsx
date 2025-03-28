import { CORE_CONCEPTS } from '../data';

function CoreConceptComponent({ image, title, description }) {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

export default function CoreConcept() {
    return (
        <main>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                    <CoreConceptComponent
                        title={CORE_CONCEPTS[0].title}
                        description={CORE_CONCEPTS[0].description}
                        image={CORE_CONCEPTS[0].image}
                    />
                    <CoreConceptComponent {...CORE_CONCEPTS[1]} />
                    <CoreConceptComponent {...CORE_CONCEPTS[2]} />
                    <CoreConceptComponent {...CORE_CONCEPTS[3]} />
                </ul>
            </section>
        </main>
    )
}