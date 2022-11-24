import ReactDOM from 'react-dom/client'

const array1 = ['Banana', 'Maçã', 'Pêra', 'Goiaba', 'Mamão', 'Tangerina']
const array2 = ['Primeiro', 'Segundo', 'Terceiro', 'Quarto', 'Quinto']

const element = (
  <>
    <ul>
      {array1.map((a, index) => (
        <li key={index}>{a}</li>
      ))}
    </ul>

    <ol>
      {array2.map((a, index) => (
        <li key={index}>{a}</li>
      ))}
    </ol>
  </>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(element)
