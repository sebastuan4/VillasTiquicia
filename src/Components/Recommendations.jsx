import React from 'react'
import { useTranslation } from 'react-i18next';
function recommendations(){
    const [t, i18n] = useTranslation("global");
    function recommendation_change(active){
        if (active == 0){
          document.getElementById("alimentacion").classList.add('active');
          document.getElementById("actividades").classList.remove('active');
          var cards = document.getElementsByClassName("act");
          for (var i = 0; i < cards.length; i++) {
            cards[i].style.display = "none";
          }
          var cardsf = document.getElementsByClassName("food");
          for (var i = 0; i < cardsf.length; i++) {
              cardsf[i].style.display = "flex";
          }
        }else{
          document.getElementById("alimentacion").classList.remove('active');
          document.getElementById('actividades').classList.add('active');
          var cards = document.getElementsByClassName("act");
          for (var i = 0; i < cards.length; i++) {
            cards[i].style.display = "flex";
          }
          var cardsf = document.getElementsByClassName("food");
          for (var i = 0; i < cardsf.length; i++) {
            cardsf[i].style.display = "none";
          }
        }
    }
    
    return(
        <>
            <div className='recomendaciones'>
          <div className='container column'>
              <div>
                <h1 className='title'>{t("activities.title")}</h1>
              </div>
              
              <div className='recommendation_nav row'>
                <h2 id='alimentacion' className="active" onClick={() => recommendation_change(0)}>{t("activities.restaurants")}</h2>
                <h2 id='actividades' onClick={() => recommendation_change(1)}>{t("activities.activities")}</h2>
              </div>
          </div>


          <div className='container grid'>
            <div className='card column act nodisplay'>
              <img className='card__img' src="https://images.unsplash.com/photo-1639417443882-8d710bccf8b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <h1>{t('activities.act1__title')}</h1>
              <p>{t('activities.act1__desc')}</p>
              <p>{t("activities.act1__distance")}<a href="https://maps.app.goo.gl/CRX2fRzDgZEhTZYWA">{t("activities.maps")}</a></p>
            </div>
            <div className='card column act nodisplay'>
              <img className='card__img' src="https://images.unsplash.com/photo-1580577102033-e2192a690876?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <h1>{t('activities.act2__title')}</h1>
              <p>{t('activities.act2__desc')}</p>
              <p>{t("activities.act2__distance")}<a href="https://maps.app.goo.gl/KX1MFnB1YYjviizU6">{t("activities.maps")}</a></p>
            </div>
            <div className='card column act nodisplay'>
              <img className='card__img' src="https://www.sancarlosdigital.com/wp-content/uploads/2021/01/mano-arenal.jpg" alt="" />
              <h1>{t("activities.act3__title")}</h1>
              <p>{t("activities.act3__desc")}</p>
              <p>{t("activities.act3__distance")}<a href="https://maps.app.goo.gl/KX1MFnB1YYjviizU6">{t("activities.maps")}</a></p>
            </div>
            <div className='card column act nodisplay'>
              <img className='card__img' src="https://baldihotsprings.cr/wp-content/uploads/2019/08/Gallery_18.jpg" alt="" />
              <h1>{t("activities.act4__title")}</h1>
              <p>{t("activities.act4__desc")}</p>
              <p>{t("activities.act4__distance")}<a href="https://maps.app.goo.gl/7r9crkPbEKiGp1U19">{t("activities.maps")}</a></p>
            </div>
            <div className='card column act nodisplay'>
              <img className='card__img' src="https://www.tabacon.com/wp-content/uploads/2020/11/1-Tabacon-Thermal-Resort-2.jpg" alt="" />
              <h1>{t("activities.act5__title")}</h1>
              <p>{t("activities.act5__desc")}</p>
              <p>{t("activities.act5__distance")}<a href="https://maps.app.goo.gl/GtDG6xYCkf4uDQdT8">{t("activities.maps")}</a></p>
            </div>
            <div className='card column act nodisplay'>
              <img className='card__img' src="https://cdn.getyourguide.com/img/tour/5b08826206298.jpeg/145.jpg" alt="" />
              <h1>{t("activities.act6__title")}</h1>
              <p>{t("activities.act6__desc")}</p>
              <p>{t("activities.act6__distance")}<a href="https://maps.app.goo.gl/GtDG6xYCkf4uDQdT8">{t("activities.maps")}</a></p>
            </div>

            <div className='card column food'>
                <img className='card__img' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/2a/bd/66/fajitas.jpg?w=1200&h=-1&s=1" alt="" />
                <h1>{t("activities.food1__title")}</h1>
                <p>{t("activities.food1__desc")} <a href='https://drive.google.com/file/d/1Q8Mc3s29fIIGfVVTPSLMakMotcqW8zHR/view'>{t("activities.menu")}</a></p>
                <p>{t("activities.food1__distance")}<a href="https://maps.app.goo.gl/34oaBzbka4qMsr6j7">{t("activities.maps")}</a></p>
            </div>

            <div className='card column food'>
              <img className='card__img' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/ce/02/9d/caption.jpg?w=1100&h=-1&s=1" alt="" />
              <h1>{t("activities.food3__title")}</h1>
              <p>{t("activities.food3__desc")} <a href='https://www.facebook.com/Reservationshostelarenalfortuna1'>Facebook</a></p>
              <p>{t("activities.food3__distance")}<a href="https://maps.app.goo.gl/bD6z9RBcB2i5uBye7">{t("activities.maps")}</a></p>
            </div>

            <div className='card column food'>
              <img className='card__img' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/c4/9c/0b/ceviche-tropical-sumergete.jpg?w=1200&h=-1&s=1" alt="" />
              <h1>{t("activities.food2__title")}</h1>
              <p>{t("activities.food2__desc")} <a href='https://herbariocr.com/'>{t("activities.menu")}</a></p>
              <p>{t("activities.food2__distance")}<a href="https://maps.app.goo.gl/HUxXdMvWT97B61a99">{t("activities.maps")}</a></p>
            </div>

            <div className='card column food'>
              <img className='card__img' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/99/e6/00/caption.jpg?w=1200&h=-1&s=1" alt="" />
              <h1>{t("activities.food4__title")}</h1>
              <p>{t("activities.food4__desc")} <a href='https://www.facebook.com/casafortunacr/?locale=es_LA'>Facebook</a></p>
              <p>{t("activities.food4__distance")}<a href="https://maps.app.goo.gl/NuSKdmdT7j5W3nk27">{t("activities.maps")}</a></p>
            </div>

            <div className='card column food'>
              <img className='card__img' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/83/76/bc/photo7jpg.jpg?w=1200&h=-1&s=1" alt="" />
              <h1>{t("activities.food5__title")}</h1>
              <p>{t("activities.food5__desc")} <a href='https://www.tierramiacr.com/'>{t("activities.menu")}</a></p>
              <p>{t("activities.food5__distance")}<a href="https://maps.app.goo.gl/gMchaWYGCxfb4Y6H9">{t("activities.maps")}</a></p>
            </div>

            <div className='card column food'>
              <img className='card__img' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4f/3f/da/photo2jpg.jpg?w=1200&h=-1&s=1" alt="" />
              <h1>{t("activities.food6__title")}</h1>
              <p>{t("activities.food6__desc")} <a href='https://www.facebook.com/chifalafamiliafelizcostarica/'>Facebook</a></p>
              <p>{t("activities.food6__distance")}<a href="https://maps.app.goo.gl/gMchaWYGCxfb4Y6H9">{t("activities.maps")}</a></p>
            </div>
          </div>
      </div>

        </>
    );
}

export default recommendations;