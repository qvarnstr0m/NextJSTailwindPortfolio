import React from 'react'

const Me = () => {
  return (
    <div className="md:flex">
      <div className="lg:max-w-md pb-8">
      <p className="text-justify pr-6">
        A problem-loving coder at heart with a passion for clear communication and clean code. For the last couple of years I have 
        been working on learning developing different kind of applications, mainly using the .NET platform but also recently looking 
        at front end and JavaScript. <br /><br />I am currently studying at Campus Varberg, a two year program which focus on the .NET platform 
        and courses on agile work methods, front end-development and database creation and administration. <br /><br /> 💥 Currently looking for 
        a internship for the fall of 2023, feel free to contact me if this sounds interesting to you or anyone you may know! 💥
      </p>
      </div>
      <div className="sm:flex-col shrink-0 sm:ml-auto sm:order-1">
      <img src="me.jpg" alt="Profile image" className="profile-image w-full md:order-first"/>
      </div>
    </div>
  )
}

export default Me