import logo from './logo.svg';
import './App.css';

function App() {
  let string="join us in the Education for All mission . Help us reach these textbooks to children, teachers and schools.";

 return (
  <div className="App">
  <button onClick={()=>{
  console.log(string.length);
    
  }}>String Length</button>
  <button onClick={()=>{
     console.log(string.charAt(15));
    
  }}>CharAt</button>
  <button onClick={()=>{
     console.log(string.charCodeAt(17));
  }}>CharCodeAt</button>
  <button onClick={()=>{
      console.log(string.at(9));
  }}>At</button>
  <button onClick={()=>{
     console.log(string[8]);
  }}>Select</button>
  <button onClick={()=>{
      console.log(string.slice(7,15))
  }}>Slice</button>
  <button onClick={()=>{
      console.log(string.toUpperCase())
  }}>toUpperCase</button>
  <button onClick={()=>{
      console.log(string.toLowerCase())
  }}>toLowerCase</button>
  <button onClick={()=>{
       console.log(string.substr(7,15))
  }}>SubStr</button>
  <button onClick={()=>{
     console.log(string.substring(7,15))
  }}>SubString</button>
  <button onClick={()=>{
    let str="oh shut";
     console.log(str.padStart(60,"o"));
     console.log(str.padEnd(50,"t"));
  }}>PadStart/PadEnd</button>
  
  <button onClick={()=>{
      let string="             Kavitha           ";
      console.log(string.trim());
  }}>Trim</button>
  <button onClick={()=>{
      let string="             Kavitha           ";
      console.log(`----------->${string.trimStart()}--------->`)
  }}>TrimStart</button>
  <button onClick={()=>{
      let string="             Kavitha           ";
      console.log(`---------->${string.trimEnd()}----------->`);
  }}>TrimEnd</button>
  <button onClick={()=>{
       let str="Kavitha";
       console.log(str.repeat(40));
  }}>Repeat</button>
  <button onClick={()=>{
     let string="Kavitha is a good girl,Kavitha is from andhra";
     console.log(string.replace("Kavitha","Anitha"));
  }}>Replace</button>
  <button onClick={()=>{
      let string="Kavitha is a good girl,Kavitha is from andhra";
      console.log(string.replaceAll("Kavitha","Anitha"));
  }}>ReplaceAll</button>
  <button onClick={()=>{
       let str="Kavitha is a good girl,Kavitha is from andhra";
       console.log(str.concat(string));
  }}>concat</button>
  <button onClick={()=>{
    let name="Kavitha is from andhra";
     console.log(name.split(" "));
     
  }}>Split</button>
    </div>
  );
}

export default App;
