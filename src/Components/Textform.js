import React, { useState } from 'react'
import toast from 'react-hot-toast';
function Textform(props) {
  const [text,setText]=useState("");
  
  const UpperCase = () => {
    if (text === "") {
      toast.error("No Text to Coverted In UpperCase")

    } else {
      console.log("UpperCase Clicked");
      let UpperCase = text.toUpperCase();
      setText(UpperCase);
      toast.success("Text Converted To UpperCase")

    }
  };
  const LowerCase = () => {
    if (text === "") {
      toast.error("No Text to Coverted In LowerCase")

    } else {
      console.log("LowerCase Clicked");
      let LowerCase = text.toLowerCase();
      setText(LowerCase);
      toast.success("Text Converted To LowerCase")

    }
  };
  const capitalizedText = () => {
    if (text === "") {
      toast.error("No Text to be Capitalized")
    } else {
      console.log("Text Capitalized");
      let capitalizedtext = text.split(" ");
      let text1 = "";
      for (let item = 0; item < capitalizedtext.length; item++) {
        if (item === capitalizedtext.length - 1) {
          text1 +=
            capitalizedtext[item].charAt(0).toUpperCase() +
            capitalizedtext[item].substring(1);
        } else {
          text1 +=
            capitalizedtext[item].charAt(0).toUpperCase() +
            capitalizedtext[item].substring(1) +
            " ";
        }
      }
      setText(text1);
      toast.success("Text Capitalized")

    }
  };
  const clearText = () => {
    console.log("Text Cleared");
    if (text === "") {
      toast.error("No Text to Clear")

    } else {
      let newtext = "";
      setText(newtext);
      toast.success("Text is Cleared")
 
    }
  };
  const copyText = () => {
    if (text === "") {
      toast.error("No Text To Copy")
    } else {
      console.log("Text Copied");
      const text = document.getElementById("text");
      // text.select();
      navigator.clipboard.writeText(text);
      toast.success("Text Copied to ClipBoard")

    }
  };
  const downloadTxtFile = () => {
    if (text === "") {
      // props.showalert("No Text to Download ", "warning");
      toast.error("No Text to Download")

    } else {
      const element = document.createElement("a");
      const file = new Blob([text], { type: "text/plain;charset=utf-8" });
      element.href = URL.createObjectURL(file);
      element.download = "yourFile.txt";
      document.body.appendChild(element);
      element.click();
      toast.success("Text  Downloaded")

    }
  };
  const removeextraSpaces = () => {
    if (text === "") {

      toast.error("No Text to Removed Extra Spaces")

    } else {
      let extraspaces = text.split(/[ ]+/);
      setText(extraspaces.join(" "));
      toast.success("Extra Space Removed From Text")

    }
  };
  const handleonchange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
  };
  return (
    <div className=" flex mt-[1px]  h-[800px]  justify-center">
      <div className=" justify-center  m-5 border w-[1500px] h-[700px]">
        <h1 className="text-blue-500 m-4 underline text-4xl">Enter Text to Analyze</h1>
        <textarea value={text} onChange={handleonchange}className=" m-8 textarea textarea-bordered w-[1400px] h-[300px] text-2xl" placeholder="write your text"></textarea>
        <div className="m-8 flex w-[1400px] border justify-around ">
          <button onClick={UpperCase} className="btn m-4 text-black text-2xl bg-blue-500 hover:bg-red-600 hover:text-white">Uppercase</button>
          <button onClick={LowerCase}  className="btn m-4 text-black text-2xl bg-blue-500 hover:bg-yellow-600 hover:text-white">Lowercase</button>
          <button onClick={capitalizedText} className="btn m-4 text-black text-2xl bg-blue-500 hover:bg-green-600 hover:text-white">Capitalized</button>
          <button onClick={removeextraSpaces}   className="btn m-4 text-black text-2xl bg-blue-500 hover:bg-blue-900 hover:text-white">Remove Space</button>
          <button onClick={copyText} className="btn m-4 text-black text-2xl bg-blue-500 hover:bg-red-600 hover:text-white">Copy Text</button>
          <button onClick={downloadTxtFile} className="btn m-4 text-black text-2xl bg-blue-500 hover:bg-orange-600 hover:text-white">Download</button>
          <button onClick={clearText} className="btn m-4 text-black text-2xl bg-blue-500 hover:bg-red-600 hover:text-white">Reset</button>
        </div>
      </div>
      </div>
  )
}

export default Textform;