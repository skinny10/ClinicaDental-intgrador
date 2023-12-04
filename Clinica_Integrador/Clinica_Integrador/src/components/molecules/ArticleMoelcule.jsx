import React from "react";
import Title from "../atoms/Title";
import TextAtom from "../atoms/TextAtom";


function ArticleMoelcule({content, title}) {
  return (
    <article className=" text-center  space-y-6 md:text-left md:space-y-8">
      <Title msn={title}/>
      <TextAtom text={content} />
    
    </article>
  );
}

export default ArticleMoelcule;
