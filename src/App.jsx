import './App.css'
import Counter from './Components/Counter/Counter'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

export default function App() {
    return (
        <>
            <Header />

            <main>
                <Counter />
                <Form />
            </main>
        </>
    )
}