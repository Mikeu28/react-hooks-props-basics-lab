import React from "react";
import user from "../data/user";

function About(props) {
  console.log(props)
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links
        <a href={props.links.github}>{props.links.github}</a>
        <a href={props.links.linkedin}>{props.links.linkedin}</a>
      </h3>
    </div>
  );
}

export default About;
