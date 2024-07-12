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
                <h1>Nuestras recomendaciones</h1>
              </div>
              
              <div className='recommendation_nav row'>
                <h3 id='alimentacion' className="active" onClick={() => recommendation_change(0)}>Alimentacion</h3>
                <h3 id='actividades' onClick={() => recommendation_change(1)}>Actividades</h3>
              </div>
          </div>


          <div className='container grid'>
            <div className='card column act nodisplay'>
              <img className='card__img' src="https://images.unsplash.com/photo-1639417443882-8d710bccf8b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <h1>{t('activities.act1__title')}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, numquam voluptatum. Magni est sapiente dolores vero quo, sequi natus placeat consequuntur ipsa minima minus nihil similique quidem modi dolorum incidunt!</p>
            </div>
            <div className='card column act nodisplay'>
              <img className='card__img' src="https://images.unsplash.com/photo-1580577102033-e2192a690876?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <h1>Volcan Arenal</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, numquam voluptatum. Magni est sapiente dolores vero quo, sequi natus placeat consequuntur ipsa minima minus nihil similique quidem modi dolorum incidunt!</p>
            </div>
            <div className='card column act nodisplay'>
              <img className='card__img' src="https://images.unsplash.com/photo-1639417443882-8d710bccf8b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <h1>Volcan Arenal</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, numquam voluptatum. Magni est sapiente dolores vero quo, sequi natus placeat consequuntur ipsa minima minus nihil similique quidem modi dolorum incidunt!</p>
            </div>



            <div className='card column food'>
              <img className='card__img' src="https://images.unsplash.com/photo-1639417443882-8d710bccf8b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <h1>Gallo Pinto</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, numquam voluptatum. Magni est sapiente dolores vero quo, sequi natus placeat consequuntur ipsa minima minus nihil similique quidem modi dolorum incidunt!</p>
            </div>
            <div className='card column food'>
              <img className='card__img' src="https://images.unsplash.com/photo-1580577102033-e2192a690876?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <h1>Volcan Arenal</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, numquam voluptatum. Magni est sapiente dolores vero quo, sequi natus placeat consequuntur ipsa minima minus nihil similique quidem modi dolorum incidunt!</p>
            </div>
            <div className='card column food'>
              <img className='card__img' src="https://images.unsplash.com/photo-1639417443882-8d710bccf8b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <h1>Volcan Arenal</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, numquam voluptatum. Magni est sapiente dolores vero quo, sequi natus placeat consequuntur ipsa minima minus nihil similique quidem modi dolorum incidunt!</p>
            </div>



          </div>
      </div>

        </>
    );
}

export default recommendations;