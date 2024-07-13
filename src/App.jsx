import { useState } from 'react'
import Button from './components/Button/Button'
import './App.css'
import Menu from './components/Menu'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className="box cluster">
          <Button size="xsm">Extra Small button</Button>
          <Button size="sm">Small button</Button>
          <Button>Normal button</Button>
          <Button size="lg">Large button</Button>
          <Button size="xl">Extra Large button</Button>
          <Button variant="success">Success button</Button>
          <Button variant="warning">Warning button</Button>
          <Button variant="danger">Danger button</Button>
        </div>
        <div className="box cluster">
          <Badge>Badge</Badge>
          <Badge color="yellow">Yellow badge</Badge>
          <Badge color="blue">Blue badge</Badge>
          <Badge color="purple">Purple badge</Badge>
          <Badge color="red">Red badge</Badge>
          <Badge color="orange">Orange badge</Badge>
          <Badge color="green">Green badge</Badge>

        </div>
        <div className="box">
        <Menu onOpen={() => console.log("Opened/closed")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <div className="box stack">
        <Banner status="success">
         <Banner.Text>Congratulations!</Banner.Text>
         <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Text>
        </Banner>
        <Banner status="success">
         <Banner.Text>Congratulations!</Banner.Text>
        </Banner>
        <Banner>
        <Banner.Text>Neutral</Banner.Text>
        <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Text>
        </Banner>
        <Banner>
         <Banner.Text>Neutral ft!</Banner.Text>
        </Banner>
        <Banner status="warning">
         <Banner.Text>Warning!</Banner.Text>
         <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Text>
        </Banner>
        <Banner status="warning">
         <Banner.Text>Warning!</Banner.Text>
        </Banner>
        <Banner status="error">
         <Banner.Text>Error!</Banner.Text>
         <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Text>
        </Banner>
        <Banner status="error">
         <Banner.Text>Error!</Banner.Text>
        </Banner>
      </div>
        </div>
      </div>
    </>
  )
}

export default App
