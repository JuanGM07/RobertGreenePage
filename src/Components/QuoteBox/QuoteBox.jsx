// src/components/QuoteBox.jsx
// src/components/QuoteBox.jsx
import React, { useState } from 'react';
import './QuoteBox.css';

const quotes = [
  { text: "When you show yourself to the world and display your talents, you naturally stir all kinds of resentment, envy, and other manifestations of insecurity... you cannot spend your life worrying about the petty feelings of others.", book: " The 48 Laws of Power" },
  { text: "Keep your friends for friendship, but work with the skilled and competent.", book: "The 48 Laws of Power" },
  { text: "Do not leave your reputation to chance or gossip; it is your life's artwork, and you must craft it, hone it, and display it with the care of an artist.", book: "The 48 Laws of Power" },
  { text: "Appearing better than others is always dangerous, but most dangerous of all is to appear to have no faults or weaknesses. Envy creates silent enemies.", book: "The 48 Laws of Power" },
  { text: "There is nothing more intoxicating than victory, and nothing more dangerous.", book: "The 48 Laws of Power" },
  { text: "When our emotions are engaged, we often have trouble seeing things as they are.", book: "The 48 Laws of Power" },
  { text: "The time that leads to mastery is dependent on the intensity of our focus.", book: "Mastery" },
  { text: "People are more complicated than the masks they wear in society.", book: "The Art of Seduction" },
  { text: "They are leaving one world behind and entering another. Once isolated like this, they have no outside support, and in their confusion they are easily led astray.", book: "The Art of Seduction" },
  { text: "Feeling motivated and energized, we can overcome almost anything. Feeling bored and restless, our minds shut off and we become increasingly passive.", book: "Mastery" },
  { text: "In order to master a field, you must love the subject and feel a profound connection to it. Your interest must transcend the field itself and border on the religious.", book: "Mastery" },
  { text: "Practical knowledge is the ultimate commodity, and is what will pay you dividends for decades to come.", book: "Mastery" },
  { text: "The recurrence of this mirrors the recurrence in our own lives of the same problems and mistakes, forming negative patterns. It is hard to learn from experience", book: "The Laws of Human Nature" },
  { text: "Results are important, but the way they are achieved, the process, is equally important.", book: "The Laws of Human Nature" },
  { text: "Your mind is the starting point of all war and all strategy. A mind that is easily overwhelmed by emotion, that is rooted in the past instead of the present, that cannot see the world with clarity and urgency, will create strategies that will always miss the mark.", book: "The 33 Strategies of War" },
  { text: "When you have success, be extra wary. When you are angry, take no action. When you are fearful, know you are going to exaggerate the dangers you face.", book: "The 33 Strategies of War" },
  { text: "Life has more meaning in the face of death.", book: "The 33 Strategies of War" },
  { text: "Being attacked is a sign that you are important enough to be a target. You should relish the attention and the chance to prove yourself.", book: "The 33 Strategies of War" },
  { text: "We must create our own world or we will die from inaction.", book: "Mastery" },
  { text: "The secret to success is retaining your child-like qualities.", book: "Mastery" },
  { text: "If the happiness and prosperity of other people depend on you, you have nothing to fear anymore.", book: "Mastery" },
  { text: "People who conceal their desires for power behind the appearance of humility and selflessness tend to be the most politically aggressive and manipulative.", book: "The Laws of Human Nature" },
  { text: "Understand: people are not out to do you good; they are out to further their own interests. It is naïve to expect them to be otherwise.", book: "The Laws of Human Nature" },
  { text: "Understand: We don't attract what we want; we attract what we are.", book: "The Laws of Human Nature" },
  { text: "  Generally, what causes us to go astray in the first place, what leads to bad decisions and miscalculations, is our deep-rooted irrationality, the extent to which our minds are governed by emotion.", book: "The Laws of Human Nature" },




];

const QuoteBox = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [fade, setFade] = useState(true);

  const generateNewQuote = () => {
    setFade(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
      setFade(true);
    }, 500); // Tiempo debe coincidir con la transición de CSS
  };

  return (
    <div className="quote-box">
      <p className={`quote ${fade ? 'fade-in' : 'fade-out'}`}>{currentQuote.text}</p>
      <p className={`book ${fade ? 'fade-in' : 'fade-out'}`}>{currentQuote.book}</p>
      <button onClick={generateNewQuote}>Generate New Quote</button>
    </div>
  );
};

export default QuoteBox;

