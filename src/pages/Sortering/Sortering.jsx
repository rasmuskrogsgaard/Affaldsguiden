import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import styles from './sortering.module.scss';

const Sortering = () => {
    const [sections, setSections] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/section')
            .then(response => response.json())
            .then(data => setSections(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filteredSections = sections.filter(section =>
        section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.id.toString().includes(searchTerm) ||
        section.color.toLowerCase().includes(searchTerm.toLowerCase())
  
    );

    return (
        <div className={styles.sortering}>
            <h2>Din guide til affaldsortering</h2>
            <input
                type="text"
                placeholder="søg på affald"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className={styles.searchBar}
            />
            <div className={styles.cardContainer}>
                {filteredSections.map(section => (
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
