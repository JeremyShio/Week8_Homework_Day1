import {useState} from 'react';
import Navbar from './components/Navbar';
// import Button from './components/Button';




function App(props) {

    // Set a state for count - inital state of 0 and setCound is function to change state value of count
    const [count, setCount] = useState(0)
    // Set a state for strings - initial state of [] and setNames is function to change state value of strings
    const [strings, setStrings] = useState([])


    // Function which executes when the main form is submitted
    function handleStringPress(i) {
        // Prevent the default page-refresh from occuring
        i.preventDefault();
        // Get the value from the user input form
        const string = i.target.stringName.value;
        // Set the state of strings to be the current state of strings + the new string
        let newStrings = [...strings, string];
        setStrings(newStrings);
    };


    // Function which executes when a string is added to list
    function handlePress(step) {
        console.log('Added to your To-Do-List!');
        // Add 1 to list total for each string added
        step = 1
        // Set the state of count to be the current state of count + step
        setCount(count + step);
    };


    return (
        // JSX expressions
        <>
            {/* Call Navbar component */}
            <Navbar brand = 'YOUR-LIST' />
            <div className = 'container'>
                <h1 className = 'text-center'>To-Do-List!</h1>
                <h3 className = 'text-center'>Total: {count}</h3>
                <form onSubmit = {handleStringPress} handlePress = {handlePress}>
                    <input type = 'text' className = 'form-control' name = 'stringName' />
                    <input type = 'submit' value = 'Submit' />
                </form>
                {strings.map((s, index) => <p key = {index}>{s}</p>)}
            </div>
        </>
    );

};




export default App;
