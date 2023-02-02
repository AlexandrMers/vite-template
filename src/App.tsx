import Component1 from './components/Component1'

function App() {
  const calculate = () => {
    console.log('hello')
  }
  calculate()

  const a = 0
  console.log('a', a)
  return (
    <div className="App">
      <Component1 />
    </div>
  )
}

export default App
