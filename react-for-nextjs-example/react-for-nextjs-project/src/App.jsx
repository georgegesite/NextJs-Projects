import './App.css'
import Component from './Component'
import Props from './Props'
import Wrapper from './Wrapper'
import EventHandling from './EventHandling'
import RenderLists from './RenderLists'
import ConditionalRendering from './ConditionalRendering'
import States from './States'

function App() {


  return (
    <>
      <Component />
      <Props 
        name="John Doe" // string prop
        action = {add}  // function prop
      />
      <Wrapper>
        <p>This is wrapped content inside the Wrapper component.</p>
      </Wrapper>
      <EventHandling />
      <RenderLists />
      <ConditionalRendering isLoggedIn={true} />
      <States />
    </>
  )

  function add(a, b) {
    return a + b;
  }
}

export default App
