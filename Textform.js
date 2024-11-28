import { getByDisplayValue } from "@testing-library/react";
import  React ,{ useState } from "react";

export default function Textform(props) {
    const [Text, setText] = useState('');

    //This iS basically Then ON change EventListener
    const onchange=(event)=>{
       // console.log("Onchange");
        setText(event.target.value)
    }
    //This Function Convert To Upper Case 
    const Handelupclick=()=>{
        //console.log("Onclicked");
        let newText=Text.toUpperCase();
        setText(newText);
       // props.showalert("Converted To Upper-Case","success");
    }

    //This Function Convert To Upper Case 
    const Handellowcase=()=>{
       // console.log("Onclicked");
        let LowText=Text.toLowerCase();
        setText(LowText); 
       // props.showalert("Converted To Lower-Case","success");
    }

    //This Function for clear Text 
    const cleartxt=()=>{
        let words='';
        setText(words); 
       // props.showalert("Text Cleared!!","success");
    }

    function myFunction() {
      // Get the text field
      var copyText = document.getElementById("myInput");
    
      // Select the text field
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices
    
       // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value);
    
      // Alert the copied text
      alert("Copied the text: " + copyText.value);
    }



  return (
    <div  className="container" style={{color:props.mode==='light'?'black':'white'}}>
    <h1>{props.heading} </h1>
    <div className="mb-3" >   
    <textarea className="form-control" id="exampleFormControlTextarea1"  value={Text} onChange={onchange} style={{backgroundColor:props.mode==='dark'?'#011932':'white' ,color:props.mode==='dark'?'white':'black' ,borderColor:props.mode==='dark'?'white':'black' }} rows="8"></textarea>
    </div>
    <div className='conatiner'>
    <button className="btn btn-success mx-3" onClick={Handelupclick} >Convert To Upper Case</button>
    <button className="btn btn-success mx-3" onClick={Handellowcase} >Convert To Lower Case</button>
    <button className="btn btn-success mx-3" onClick={cleartxt} >Clear Text</button>
    
    </div>
    <div>
        <h3 >No Of Words {Text.split(" ").length-1}</h3>
        <h3>No Of Characters {Text.length}</h3>
    </div>
    </div>
  );
  }
