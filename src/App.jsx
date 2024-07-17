import { useState } from 'react'
import Button from './components/Button/Button'
import './App.css'
import Menu from './components/Menu'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner'
import Card from './components/Card/Card'
import Testimonial from './components/Testimonial/Testimonial'
import image from './image.png'
import Tooltip from './components/Tooltip/Tooltip'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    
    <div className="with-sidebar">
      <Sidebar/>
      <div className="stack-xl background-color ">
        <div className="box cover">
          <h1>React Components Library <a href="#"> View on Github</a></h1>
          
        </div>
        <div className="box">
        <div className="box" id="button"><h2>Button Components</h2></div>
         <div className="cluster"> 
          <Button size="xsm">Extra Small button</Button>
          <Button size="sm">Small button</Button>
          <Button>Normal button</Button>
          <Button size="lg">Large button</Button>
          <Button size="xl">Extra Large button</Button>
          <Button variant="success">Success button</Button>
          <Button variant="warning">Warning button</Button>
          <Button variant="danger">Danger button</Button></div>
        </div>
        <div className="box">
        <div className="box" id="badge"><h2>Badge Components</h2></div>
        <div className="cluster">
          <Badge>Badge</Badge>
          <Badge color="yellow">Yellow badge</Badge>
          <Badge color="blue">Blue badge</Badge>
          <Badge color="purple">Purple badge</Badge>
          <Badge color="red">Red badge</Badge>
          <Badge color="orange">Orange badge</Badge>
          <Badge color="green">Green badge</Badge>
        </div>
        </div>
        <div className="box cluster">
        <div className="box" id="menu"><h2>Menu Component</h2></div>
        <Menu onOpen={() => console.log("Opened/closed")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Menu onOpen={() => console.log("Opened/closed")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>News</Menu.Item>
          <Menu.Item>Sports</Menu.Item>
          <Menu.Item>Opinion</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      </div>
     <div className="box">
      <div className="box" id="banner"><h2>Banner Components</h2></div>
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
      <div className="box">
        <div className="box" id="card"><h2>Card Components</h2></div>
      <div className="grid">
        <Card icon={<i className="fa-solid fa-bomb"></i>}/>
        <Card />
        <Card icon={<i className="fa-solid fa-bomb"></i>}>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
      </div>
      </div>
      <div className="stack">
        <div className="box" id="testimonial"><h2>Testimonial Components</h2></div>
        <Testimonial src={image} alt={"a picture"}/>
        <Testimonial>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a nisi a est auctor interdum. Donec sem est, mollis sit amet ligula eu, scelerisque tincidunt nisi. Quisque dignissim velit eu purus eleifend blandit.</Testimonial>
        <Testimonial 
          reviewText='Lorem ipsum dolor sit amet, consectetur adipscing elit. Duis a nisi a est auctor interdum mollis sit amet ligula eu, scelerisque tincidunt nisi. Quisque dignissim velit eu purus eleifend blandit.'
          reviewerTitle='Pass a value to "reviewerTitle" to update this.'
          reviewer='Pass a value to "reviewer" to update this.'/>
      </div>
      </div>
    </div>
  )
}

export default App
