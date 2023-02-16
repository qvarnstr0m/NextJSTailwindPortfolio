import React from 'react'

const Me = () => {
  return (
    <div className="md:flex">
      <div className="lg:max-w-md">
      <p className="text-justify pr-6">
        A problem-loving coder at heart with a passion for good communication and clean code. For the last couple of years I have 
        been working on learning developing different kind of applications, mainly using the .NET platform but also recently looking 
        at front end and JavaScript. <br />I am currently studying at Campus Varberg, a two year program which focus on the .NET platform but also courses 
        on agile work methods, front end-development and database creation and administration. 
      </p>
      </div>
      <div className="sm:flex-col shrink-0 sm:ml-auto sm:order-1">
      <img src="me.jpg" alt="Profile image" className="profile-image w-full"/>
      </div>
    </div>
  )
}

export default Me