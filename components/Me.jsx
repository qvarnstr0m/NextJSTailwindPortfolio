import React from 'react'

const Me = () => {
  return (
    <div className="md:flex">
      <div className="sm:flex-col shrink-0 sm:ml-auto sm:order-1">
        <img src="me.jpg" alt="Profile image" className="profile-image md:max-w-xs lg:max-w-sm"/>
      </div>
      <div className="lg:max-w-md mt-12 sm:mt-0">
      <p className="text-justify">
        A problem-solving coder at heart with a passion for clear communication and learning new tech. For the last couple of years I have 
        been working on learning to develop different kinds of applications, mainly using the .NET platform but also recently looking 
        at front end and JavaScript. <br /><br />I am currently studying at <a href="https://campus.varberg.se/yrkeshogskola/systemutvecklare-net" 
        target="_blank" rel="noopener noreferer">Campus Varberg</a>, a two year program that focus on the .NET platform 
        with courses on agile work methods, front end-development and database creation and administration. <br /><br />
        💥 Currently looking for an internship for the fall of 2023, I love working with C#, JS, SQL, React and .NET to name a few, but I also love 
        learning new tech, front or back end. Feel free to contact me at <a href="mailto:mqvarnstrom80@gmail.com?subject=Hello!">mqvarnstrom80@gmail.com</a> if 
        this sounds interesting to you or anyone you may know! 💥
      </p>
      </div>
    </div>
  )
}

export default Me