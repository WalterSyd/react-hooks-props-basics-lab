import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* {bio && bio.trim() !== "" && <p>{bio}</p>} Conditional rendering for bio */}
      {props.bio && props.bio.trim() !== "" && <p>{props.bio}</p>}  
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default About;

//conditional rendering for bio:
//{props.bio && props.bio.trim() !== "" && <p>{props.bio}</p>} 
//this conditional statement is a concise way to ensure that the bio prop is: Defined (not null or undefined). Not just whitespace. If both conditions are met, it safely renders the bio inside a paragraph. If not, it renders nothing



