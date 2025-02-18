import './App.css';
import './styles.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React, { useState, useEffect } from 'react';


function App() {

  const recipient = "haritonovbooks@gmail.com";
  const subject = "Поръчка на книга";
  const body = `Здравейте, искам да поръчам книгата. Ето данните:
  Име:
  Фамилия:
  Телефонен номер:
  Адрес на еконт/личен адрес:
  Пощенски код:`;

  //test
  const getOffset = () => {
    if (window.innerWidth < 800) return 0.2;
    if (window.innerWidth < 1000) return 0.1;
    return 0;
  };

  const [offset, setOffset] = useState(getOffset());

  useEffect(() => {
    const handleResize = () => {
      setOffset(getOffset());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  //test

  return (
      <div>
        <Parallax pages={2.5}>
          <ParallaxLayer
            offset={0}
            factor={6}
            speed={2}
            className="background"
          />

        <div>
          <ParallaxLayer
            sticky={0}
            offset={0.2}
            factor={1}
            speed={2.5}
            className="background-title"
          />
        </div>

        <div>
          <ParallaxLayer
            offset={offset}
            factor={2}
            speed={5}
            className='background-branch'
            >  
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.8}
            factor={0}
            speed={3}
            style={{marginTop: '90dvh'}}
            >
              <h2 className="text-center"> 
              Седемнайсетгодишният Александър живее в малкото село Жердарово, 
              отглеждан единствено от майка си – жена, която се труди неуморно,
              за да му осигури бъдеще. В търсене на място, където да принадлежи, 
              Александър попада в опасния свят на Стоян Пармаков – свят,
              където бързите пари надделяват над морала. Всяка крачка в тази посока 
              го тегли все по-надолу, докато накрая се стига до съдбовната вечер,
              в която е заловен и правосъдието го застига. 
              Александър ще трябва да се изправи срещу собствените си демони, за да намери смисъл. 
              През неговите очи читателите ще преживеят болезнената му трансформация – от момче, загубено в хаоса,
              до мъж, който открива сила в кауза, по-голяма от самия него. Това е история за порастването,
              за болката от грешките и за изкуплението, което намираме, когато позволим на светлината да
              ни води дори в най-мрачните часове.
              </h2>
          </ParallaxLayer>  
        </div>


            <ParallaxLayer offset={1.1} factor={1} speed={5} className="background-book">
                <img src={`${process.env.PUBLIC_URL}/final book.png`} alt="Book Cover" />
                <h2 className="background-book-text">19,99лв.</h2>
            </ParallaxLayer>

            <ParallaxLayer
            offset={1.95}
            factor={2}
            speed={2}
            //style={{ left: '46.5%', maxWidth: '90vw', transform: 'translateX(-50%)' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', /* 👈 Ensures children are centered */
              justifyContent: 'center', /* 👈 Centers inside the layer */
              textAlign: 'center',
              width: '100%',
            }}
            >
           
              <div
              className="order-text">
                <h2>
                За да поръчате книгата, можете да изберете един от двата начина за контакт: кликнете върху връзката
                към нашата Facebook страница, която ще намерите под този текст, или ни изпратете имейл на посочения
                адрес. В съобщението си, моля, посочете следната информация: вашите две имена (име и фамилия), 
                мобилен номер, както и адрес за доставка. Можете да изберете доставка до офис на Еконт, като уточните
                точния адрес на офиса, или до ваш личен адрес. Моля, имайте предвид, че разходите за доставка се
                покриват от поръчителя. След като получим вашите данни, ще се свържем с вас, за да потвърдим 
                поръчката и детайлите за доставката. Благодарим ви за интереса!

                </h2>
              </div>

             {/* facebook */} 
             <a href="https://facebook.com/share/18x9PqaTX7/" style={{ textDecoration: 'none' }}>
              <div
              style={{marginBottom: "7vh", marginTop: "0vh"}}
              className="contact-link"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/facebook-logo.png`} // Path to the image in the public folder
                  alt="Facebook Logo"
                />
                <h2>Небето ни беше свидетел</h2>
              </div>
              </a>

              {/* gmail */}
              <a
                href={`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                style={{ textDecoration: 'none'}}
              >
              <div
              className="contact-link"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/gmail-logo.png`}
                  alt="Gmail Logo"
                />
                <h2 style={{ color: 'white' }}>haritonovbooks@gmail.com</h2>
              </div>
              </a>

              {/* src for images https://www.cleanpng.com/png-gmail-email-google-logo-google-logo-gmail-logo-tra-5428612/download-png.html */}
            </ParallaxLayer>
        </Parallax>
      </div>
  );
}

export default App;
