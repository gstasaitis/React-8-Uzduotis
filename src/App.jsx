import './App.css'
import { BsStack } from "react-icons/bs";
import { BiSolidPalette } from "react-icons/bi";
import { FaMeta } from "react-icons/fa6";
import { FaFingerprint } from "react-icons/fa";
import { GlobalStyle } from './components/GlobalStyle';
import { Options, Option } from './components/Icons';
import Hero from './Hero';
import NavBars from './NavBars';



function App() {

  const iconsData = [
    {
      svg: <BsStack />, 
      h3: "Option 1", 
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed recusandae accusantium aperiam natus perferendis praesentium ipsum!",
      background: "red"
    },
    {
      svg: <BiSolidPalette />, 
      h3: "Option 2", 
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed recusandae accusantium aperiam natus perferendis praesentium ipsum!",
      background: "black"
    },
    {
      svg: <FaMeta />, 
      h3: "Option 3", 
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed recusandae accusantium aperiam natus perferendis praesentium ipsum!",
      background: "red"
    },
    {
      svg: <FaFingerprint />, 
      h3: "Option 4", 
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed recusandae accusantium aperiam natus perferendis praesentium ipsum!",
      background: "black"
    },
  ]

  return (
    <>
    <GlobalStyle/>
  <NavBars/>

  <section>
    <Hero/>
    <Options>
  {iconsData.map((icon, index) => (
    <Option key={index} background={icon.background}>
      {icon.svg}
      <h3>{icon.h3}</h3>
      <p>{icon.p}</p>
    </Option>
  ))}
</Options>;

  </section>
    </>
  )
}

export default App
