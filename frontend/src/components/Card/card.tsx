import "./styles.scss"
import React from "react";

export const Card = () => {
  return (
    <div className="card">
      <div className="title">Lorem ipsum dolor sit amet</div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          tristique et egestas quis. Urna et pharetra pharetra massa massa
          ultricies mi quis hendrerit. Sed nisi lacus sed viverra. Aliquet eget
          sit amet tellus cras adipiscing enim. Amet consectetur adipiscing elit
          duis tristique sollicitudin nibh sit. Sit amet commodo nulla facilisi
          nullam vehicula ipsum a arcu. Sodales ut eu sem integer vitae justo.
          Nisl rhoncus mattis rhoncus urna neque. Sapien faucibus et molestie
          ac.
        </p>
        <p>
          Velit dignissim sodales ut eu sem integer vitae justo eget. Malesuada
          fames ac turpis egestas sed tempus urna. Suspendisse in est ante in
          nibh mauris cursus. Platea dictumst vestibulum rhoncus est
          pellentesque elit ullamcorper. Turpis nunc eget lorem dolor sed
          viverra ipsum nunc. Molestie nunc non blandit massa enim nec dui nunc.
          Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.
          Nisl suscipit adipiscing bibendum est ultricies integer. Nibh
          venenatis cras sed felis eget velit. Pharetra magna ac placerat
          vestibulum lectus mauris ultrices. Dictum fusce ut placerat orci nulla
          pellentesque dignissim enim sit. Arcu non sodales neque sodales.
          Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Egestas
          pretium aenean pharetra magna ac placerat. Mattis vulputate enim nulla
          aliquet porttitor lacus. Urna cursus eget nunc scelerisque viverra
          mauris in aliquam. Ut consequat semper viverra nam libero justo
          laoreet. Semper auctor neque vitae tempus quam pellentesque.
        </p>
      </div>
      <div className="footer">
        <button className="button warn" type="button">
          <div className="top right"></div>
          <div className="top left"></div>
          <div className="bottom right"></div>
          <div className="bottom left"></div>
          ABORT
        </button>
        <button className="button primary" type="button">
          <div className="top right"></div>
          <div className="top left"></div>
          <div className="bottom right"></div>
          <div className="bottom left"></div>
          SUBMIT
        </button>
      </div>
    </div>
  );
};
