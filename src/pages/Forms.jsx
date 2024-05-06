import Nav from "./Nav"

function NameInput() {
  return (
    <>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' required placeholder='Enter your name' /><br />
    </>
  );
}

function EmailInput() {
  return (
    <>
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' required placeholder='Enter your email' /><br />
    </>
  );
}

function AgeInput() {
    return(
        <>
            <label htmlFor='number' id='number-label'>Age</label>
            <input type='number' id='number' min='18' max='100' placeholder='Age' /><br />
        </>
    )
}

function Dropdown() {
    const options = [
        { value: 'Very good', label: 'Very good' },
        { value: 'It was okay', label: 'It was okay' },
        { value: 'Bad', label: 'Bad' },
        { value: 'Very bad', label: 'Very bad' }
    ];

    return (
        <>
            <label htmlFor='dropdown' id='dropdown-label'>How was your experience with Steam?</label>
            <select id='dropdown'>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select><br /><br />
        </>
    );
}

function ChoicesInputs({ options, label, inputType }) {
    return (
        <>
            <label>{label}</label>
            <div class='choices'>
                {options.map(option => (
                    <>
                        <input
                            type={inputType}
                            id={option.id}
                            name={option.name}
                            value={option.value}
                            style={{
                                border: 'none', /* Sem borda */
                                cursor: 'pointer',
                                margin: '10px'
                            }}
                        />
                        <label htmlFor={option.id}>{option.value}</label><br />
                    </>
                ))}
            </div>
            <br/>
        </>
    );
}

function CommentTextArea() {
    return (
        <>
            <label htmlFor='textarea' id='textarea-label'>Any comments or suggestions?</label>
            <textarea name='textarea' rows='10' placeholder='Enter your comment here...'></textarea><br />
        </>
    );
}


export default function Forms(){
    const options1 = [
        { id:'choice1', name:'radiobutton', value:'Definetely' },
        { id:'choice2', name:'radiobutton', value: "I don't know..." },
        { id:'choice3', name:'radiobutton', value:'Never' },
    ]

    const options2 = [
        { id:'Game-category-1', name:'Game-category-1', value:'RPG' },
        { id:'Game-category-2', name:'Game-category-2', value:'Adventure' },
        { id:'Game-category-3', name:'Game-category-3', value:'Horror' },
        { id:'Game-category-4', name:'Game-category-4', value:'Simulator' },
        { id:'Game-category-5', name:'Game-category-5', value:'FPS' },
        { id:'Game-category-6', name:'Game-category-6', value:'Racing' }
    ]

    return(
        <div>
            <Nav />
            <form id='survey-form'>
                <NameInput />
                <EmailInput />
                <AgeInput />
                <Dropdown />
                <ChoicesInputs options={options1} label='Would you recommend Steam for a friend?' inputType='radio' />
                <ChoicesInputs options={options2} label='Would you recommend Steam for a friend?' inputType='checkbox' />
                <CommentTextArea />
                <div id='submit'>
                    <input type='submit' value='Submit' />
                </div>
            </form>
        </div>
    )
}