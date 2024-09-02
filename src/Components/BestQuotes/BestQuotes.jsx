import React, { useState, useEffect } from 'react';
import './BestQuotes.css';

const BestQuotes = () => {
    // Definir los datos localmente
    const booksData = [
        {
            title: 'The 48 Laws of Power',
            cover: 'power.jpg',  // Cambia esto a la ruta correcta de la imagen
            quotes: [
                'Never outshine the master.',
                'Never put too much trust in friends. Learn how to use enemies.',
                'Get others to do the work for you, but always take the credit.',
                'Win through your actions, never through argument.',
                'Make other people come to you—use bait if necessary.',
                'Many a serious thinker has been produced in prisons, where we have nothing to do but think.',
            ]
        },
        {
            title: 'Mastery',
            cover: 'mastery.jpg',  // Cambia esto a la ruta correcta de la imagen
            quotes: [
                'The future belongs to those who learn more skills and combine them in creative ways.',
                'The time that leads to mastery is dependent on the intensity of our focus.',
                'Become who you are by learning who you are.',
                'Everything that happens to you is a form of instruction if you pay attention.',
                'Our natural tendency is to project onto other people our own belief and value systems, in ways in which we are not even aware.',
                'If we don’t try too much in life, if we limit our circle of action, we can give ourselves the illusion of control.'
            ]
        },
        {
            title: 'Seduction',
            cover: 'seduction.jpg',  // Cambia esto a la ruta correcta de la imagen
            quotes: [
                'Seduction is an art that ignites desire in the heart.',
                'When our emotions are engaged, we often have trouble seeing things as they are.',
                'People are more complicated than the masks they wear in society.',
                'There is too little mystery in the world; too many people say exactly what they feel or want.',
                'Your greatest power in seduction is your ability to turn away, to make others come after you, delaying their satisfaction.',
                'At certain points in history it may be fashionable to be different and rebellious, but if a lot of people are playing that role, there is nothing different or rebellious about it.'
            ]
        },
        {
            title: 'The Laws of Human Nature',
            cover: 'human_nature.jpg',  // Cambia esto a la ruta correcta de la imagen
            quotes: [
                'Results are important, but the way they are achieved, the process, is equally important.',
                'The recurrence of this mirrors the recurrence in our own lives of the same problems and mistakes, forming negative patterns. It is hard to learn from experience',
                'Nobody likes to believe that they are operating under some kind of compulsion beyond their control. It is too disturbing a thought.',
                'Rationality is not a power you are born with but one you acquire through training and practice.',
                'Through our work and through getting what we need on our own, without depending on others, we can stand tall and realize our potential as humans.',
                'This is so important to the human animal, people will do almost anything to get attention, including committing a crime or attempting suicide. Look behind almost any action, and you will see this need as a primary motivation.'
             ]
        },
        {
            title: 'The 33 Strategies of War',
            cover: 'war.jpg',  // Cambia esto a la ruta correcta de la imagen
            quotes: [
                'Results are important, but the way they are achieved, the process, is equally important.',
                'The recurrence of this mirrors the recurrence in our own lives of the same problems and mistakes, forming negative patterns. It is hard to learn from experience',
                'Nobody likes to believe that they are operating under some kind of compulsion beyond their control. It is too disturbing a thought.',
                'Rationality is not a power you are born with but one you acquire through training and practice.',
                'Through our work and through getting what we need on our own, without depending on others, we can stand tall and realize our potential as humans.',
                'This is so important to the human animal, people will do almost anything to get attention, including committing a crime or attempting suicide. Look behind almost any action, and you will see this need as a primary motivation.'
             ]
        },
        {
            title: 'The 50th Law',
            cover: 'The50thLawBook.jpg',  // Cambia esto a la ruta correcta de la imagen
            quotes: [
                'Every negative is a positive. The bad things that happen to me, I somehow make them good.That means you can’t do anything to hurt me.',
                'Slavery was a system that depended on the creation of deep levels of fear.',
                'The greatest danger you face is your mind growing soft and your eye getting dull.',
                'Fears are a kind of prison that confines you within a limited range of action. The less you fear, the more power you will have and the more fully you will live.',
                'The knife’s edge that separates failure from success in life. That edge is your attitude, which has the power to help shape your reality.',
                'Things merely happen to you. It is your mind that chooses to interpret them as negative or positive.'

             ]
        },
        {
            title: 'The Daily Laws',
            cover: 'daily_laws.jpg',  // Cambia esto a la ruta correcta de la imagen
            quotes: [
                'Work at what connects to you emotionally and ideas will come to you.',
                'What you need is a mental filtering system based on a scale of priorities and your long-term goals.',
                'Embrace your strangeness. Identify what makes you different. Fuse those things together and become an anomaly.',
                'Everyone carries a shadow, and the less it is embodied in the individual’s conscious life, the blacker and denser it is.',
                'Youth is happy because it has the capacity to see beauty. Anyone who keeps the ability to see beauty never grows old.',
                'Wisdom is not a product of schooling but of the lifelong attempt to acquire it.'

             ]
        }
    ];

    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Establecer los datos localmente al estado
        setBooks(booksData);
    }, []);

    return (
        <div className="BestQuotes">
            <h1>Quotes from Robert Greene's Books</h1>
            <div className="quotes-container">
                {books.map((book, index) => (
                    <div key={index} className="book-quotes">
                        <img src={book.cover} alt={book.title} className="book-cover" />
                        <div className="quotes">
                            {book.quotes.map((quote, idx) => (
                                <p key={idx} className="quote">{quote}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestQuotes;
