import SimpleInput from './components/SimpleInput';
import BasicForm from './components/BasicForm';

function App() {
    return (
        <div className="app">
            <>  
                <h2>This is Basic Form</h2>
                <BasicForm />
                <h2>This is simple Input form</h2>
                <SimpleInput />
            </>
        </div>
    );
}

export default App;
