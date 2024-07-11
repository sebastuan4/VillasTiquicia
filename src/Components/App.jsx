
import '../App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div className='description'>
        <div className='container row'>
          <div className='description__text'>
            <h1>{t("header.message")}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam eum ut est, blanditiis facilis aliquid excepturi sed! Qui architecto asperiores nam, nisi illum voluptatum ea optio aliquid corrupti accusantium quis.</p>
          </div>
          <div className='description__img'>
            <img  src="https://images.unsplash.com/photo-1622737789946-06e1f407e417?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
