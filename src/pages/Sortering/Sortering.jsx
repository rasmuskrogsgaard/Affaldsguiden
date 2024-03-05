
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import styles from './sortering.module.scss';

const Sortering = () => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
   
        fetch('http://localhost:3000/section')
            .then(response => response.json())
            .then(data => setSections(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className={styles.sortering}>
            <h2>Sorteringspage</h2>
            <div className={styles.cardContainer}>
                {sections.map(section => (
                    <Link key={section.id} to={`/section/${section.id}`}>
                        <Card
                            title={section.title}
                            backgroundColor={`#${section.color}`}
                            imageSrc={section.filepath}
                            imageAlt={section.title}
                            width="300px"
                            padding="20px"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sortering;
