// src/pages/Books.jsx
import React from 'react';
import BookItem from '/src/Components/BookItem/BookItem.jsx';
import './Books.css';

const books = [
  { 
    image: 'public/power.jpg', 
    title: '48 Laws of Power', 
    description: 'It is a guide designed to show the reader what personal qualities one must have to achieve power in sociological terms.', 
    year: "1998",
    link: 'https://www.amazon.es/Laws-Power-Robert-Greene-Collection/dp/1861972784/ref=sr_1_2?adgrpid=54648121845&dib=eyJ2IjoiMSJ9.OhHnj40ohmk6gl2q_cV27KONMWteYoDu1tDvml2ItvmkOEcmT6Rxrof3g13LnToJ1A9TMr804MAr_D3Fps2fSIKH5w_iVVKT6HG8VbhloW3PK1zFLKOPy-Rfn4O90GPAki9kbeuO6P7sHdpBhN7RZee_3N4LDiSv5VqxKp0rYRXVbbLDh6sOyj1yQwjg2zettJIpx6L9DeIf6kPr9ctDpm5mlgnnKKvUNuLzJWiik004Zehz3aNjEYDc8K-O47v-yUzl3kEg6Kl9Xpl5w5ntSSpiJgs0rCn_s1IJUwdGSkc.TWImtRsof-IHKx524jIRMuB3nJv_DVWbrR6JRB-2hvg&dib_tag=se&hvadid=601382831195&hvdev=c&hvlocphy=9047035&hvnetw=g&hvqmt=e&hvrand=715245585532321091&hvtargid=kwd-366004063637&hydadcr=22507_2277381&keywords=48+leyes+del+poder&qid=1725114808&sr=8-2'  // Enlace al libro
  },
  { 
    image: 'public/seduction.jpg', 
    title: 'The Art of Seduction', 
    description: 'Not only a book about sexual seduction, but rather a universal guide on seduction in the most general terms whether it be politically, socially, or otherwise. Its a book that should be read by all.', 
    year: "2001",
    link: 'https://www.amazon.es/Art-Seduction-Vv-Aa/dp/1861977697/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2KM65J1ZFQQJV&dib=eyJ2IjoiMSJ9.Dzptkmu-kyYywNdaogEWr4sNXbzQOAua1gMnjOcqrmA_MWkoqBca7f-tRCbh1t2NFEzuE_nMbI3MPDaBetFEEdKXzzD5fydJaZ9IXEtIHFK0rF_i4_Pi9FaLe9ql5THvTKloyi2IvjosW4zzEiJPVm7R1XxiMKSx2vbJeBV6nlsMTMYKVNxY70Pf4w1HhkAoWXiafKou-ZM_GtDVixkzcA7CdLhbkji_BhJfWpgaJq8T80akkE2ZpQ9gB2jJcapMBIskEUT29OI3p-ZD33J3DMMz1Mayb6OqwX2ZGBEW9Q8.khD0ldqSQfjBoF30GGQ6WFg0ay4vheHegdiogWIemzU&dib_tag=se&keywords=seduction&qid=1725114888&sprefix=seduction%2Caps%2C108&sr=8-1'  // Enlace al libro
  },
  { 
    image: 'public/war.jpg', 
    title: 'The 33 Strategies of War', 
    description: 'The 33 Strategies of War is a book by Robert Greene that explores the psychological and tactical strategies used in warfare and conflict. The book is divided into three parts, each covering a different aspect of warfare.', 
    year: "2006",
    link: 'https://www.amazon.es/Strategies-War-Robert-Greene-Collection/dp/1861979789/ref=sr_1_1?crid=3L062XVYJMPBI&dib=eyJ2IjoiMSJ9.jP6PTPXIcaTu5qbNpg1iBEaHy7DcHkn6BCMkkOaWoNkvs1xMN4DhUcQbhuinxTfIZqc69iFHzzvO-14oKxEFH9FeZS2LOMWuEH9L5IsmZQoYoQm6nlcIu5uHB-3DHrFQaHrSF1UYzG_rjDpm9QSk5yICsuTF4MqlRnx08Ky8sc7bKVal2HbtWjq6gEnSTKV263nntLkAxnw7tTRUwUa9JZMYwhnwNrp9bR-NQWjxBsA.j9fSka7bSP88UkkfVrWqHIGrUqNzmoDpXBsQK5qvoDw&dib_tag=se&keywords=the+33+strategies+of+war&qid=1725114935&sprefix=the+33+s%2Caps%2C111&sr=8-1'  // Enlace al libro
  },
  { 
    image: 'public/The50thLawBook.jpg', 
    title: 'The 50th Law', 
    description: 'The 50th Law combines the street-smart insights of 50 Cent with the strategic expertise of author Robert Greene to teach readers how to overcome fear and become more empowered in their lives.', 
    year:"2009",
    link: 'https://www.amazon.es/50th-Law-Robert-Greene-Collection/dp/1846680794/ref=sr_1_1?crid=1Y6FKW7R28J2G&dib=eyJ2IjoiMSJ9.C1X0QqojI_In4kk5JW2Cyr3zTSMlYNQOjDGOYXaB_K3smtnSoC_6YbEHaNgA1M6PYgexFPQi5xvdaFiTsTw2Z2OG0Goi1hC5YrygW2doCWQa0OfNQatK9RTwZXirVqqd_L1aAFKT_U4-64fLNzGgkOJ4muv1wiynm6dX-hb7d2yT7Vj7ep_W-P5iHnXm5pkHVm3JTYqKkCrpzSxrqZ0F_xB90I5SYSBLYEiVEpVzPd_aVsVQk48z52azOLKdzwbPfUzUaLjcKiV0n5vP-GHH8Kdvz_-3hR71LSiJR5O1xWE.pcsT5bi07nllOZXJcP_Ubt-4Oz28fv6y6qxyRxkbP8A&dib_tag=se&keywords=the+50th+law&qid=1725114967&sprefix=the+50%2Caps%2C100&sr=8-1'  // Enlace al libro
  },
  { 
    image: 'public/mastery.jpg', 
    title: 'Mastery', 
    description: 'Mastery explores the journey to becoming a master in any field. Through inspiring stories and historical examples, Greene details the essential elements required to achieve mastery, including dedication, patience, and learning from mentors.', 
    year:"2012",
    link: 'https://www.amazon.es/Mastery-Robert-Greene-Collection/dp/178125091X/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3JXM2JWN3DMR9&dib=eyJ2IjoiMSJ9.IFymg5tFvHqV19lISbL3HmhY48DR5rQFIc28XrLFQaFrX-CuI4nhHGA7zcEItIhh3jS442KVVbVJPlbeb2G8HOJInRcyxeaMLN65Y6ALgrKT3e3Zfkc2aN0j4meAF-HX0uERLaFhtUMisBUwEAKsVFhJ491Ye7d9T-9g8IKUCYwH-g3oXPGDBAnvyFrfLE7_05-b6IHZNvH_VnV5gyMOJyOJpyBf7VoO65fOtrtJN9OzOEC28eZM4WEfK9NTAZqb5vv63fDZbLEIfsrT35aflXaIow60m1xjcB2jE47jJ-M.W-R9y2WpNeMcooXNjk8yFaokQW3LVuG_BCBUJbHBxdU&dib_tag=se&keywords=mastery&qid=1725114869&sprefix=mastery%2Caps%2C112&sr=8-1'  // Enlace al libro
  },
  { 
    image: 'public/human_nature.jpg', 
    title: 'The Laws of Human Nature', 
    description: 'The Laws Of Human Nature by Robert Greene is a guide to understanding human behavior and using this knowledge to improve your relationships, career, and personal growth.', 
    year: "2018",
    link: 'https://www.amazon.es/Laws-Human-Nature-Robert-Greene/dp/1781259194/ref=sr_1_1?crid=203F2786OQ61X&dib=eyJ2IjoiMSJ9.QKyXOG2NcuPukbIaVsla0WWeTQiSkkOcQYFHCrcKJiFb4mmwPnQDgKssdOnR_4yXk0o_kjJTAJCkwmDG9Nnap6t00zemoMiNtwrtsQHtMIhV5p-X6-ircjnq_y6Hh_dPcdQkPmxzF-e22y5eBIZviXhiUXaz3Xm1sUVKtQlABjVn4071h3iTTzXPWtrBSC8SrebgS2mmM3r5DHQ2faRAgM9gi6hLUMmIAHhTrlYdrY5Y6tlln3YAuESevbI7MO08pD8Vfs5WvgFuUuW9sSfZoCv6Uam0_oCTZqxZ0_35cTo.4sZUvcZ-AVdWb9wNZraBWzDAsXAA_frFm7s1ADztnKQ&dib_tag=se&keywords=the+laws+of+human+nature&qid=1725114908&sprefix=the+laws%2Caps%2C108&sr=8-1'  // Enlace al libro
  },
  { 
    image: 'public/daily_laws.jpg', 
    title: 'The Daily Laws', 
    description: 'The Daily Laws is a page-a-day, calendar-style book covering the three big topics of mastery, power, and emotions, sharing Robert Greenes best lessons from 20 years of research of the dynamics within and between humans.', 
    year: "2021",
    link: 'https://www.amazon.es/Daily-Laws-Meditations-Seduction-Strategy/dp/1800816286/ref=sr_1_1?crid=3AHML2T54A8PM&dib=eyJ2IjoiMSJ9.YtLGKOuA-YvJP9NQhmr-Gsm_V5gK6gM36fspsO76nDZVIKbCgT2MctSTfmDaQmjW4W0m7sL9ER95r3Q6EWE66IjrNMgdZIjYMREAD53ZXeVsnpyNodXhJ_SDpMy-mD3pJy5HlcYy-O9v7Ps5Nz1RcNIkODKznWNmvgGZDcEbcr7uG-2KKQsiQP2ku85HqIpTPV5gFpJ6RQMdRgkT7w3ieA.xM8IAZ618Orr_W9XVW1OJd1s9HdlRy-2meXl8z08E0Q&dib_tag=se&keywords=the+daily+laws&qid=1725114990&sprefix=the+dail%2Caps%2C102&sr=8-1'  // Enlace al libro
  },
  // Añade más libros según sea necesario
];

const Books = () => {
  return (
    <div className="books">
      {books.map((book, index) => (
        <BookItem 
          key={index}
          image={book.image}
          title={book.title}
          description={book.description}
          year={book.year}
          link={book.link}  // Pasar la propiedad link
        />
      ))}
    </div>
  );
};

export default Books;
