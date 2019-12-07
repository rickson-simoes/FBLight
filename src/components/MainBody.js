import React from 'react';

function BodyHeader({author, date}){
  return (
    <>
      { author.map(img => (          
        <div key={img.avatar} className="mainBodyHeader">

          <div className="mainBodyIMG">   
          <img className="imgPostRound" width="40" height="auto" alt={img.avatar} src={img.avatar} />
          </div>

          <div className="mainBodyHeaderProps">
            <div className="mainBodyPropsName">{img.name}</div>
            <div className="mainBodyPropsHour">{date}</div>
          </div>

        </div>
        ))     
      } 
    </>
  )
}

function BodyComments({content, comments}) {
  return (   
    <> <br/>
    <div className="mainBodyQuestion">
      {content}
    </div>  

    { comments.map(comment => (
    <div key={comment.id} className="mainBodyHeader">
      
      <div className="mainBodyIMG">     
        <img className="imgPostRound" width="40" height="auto" alt={comment.author.avatar} src={comment.author.avatar} />
      </div>

      <div className="mainBodyHeaderProps">   
        <div className="mainBodyPropsAnswer">
          <div className="mainBodyPropsName"> {comment.author.name} </div>
          {comment.content}
        </div> 
      </div>

    </div>  
      ))                   
    }
    </>
  )
}

function MainBody({author, date, content, comments}) {
  return (    
    <>
      <BodyHeader author={author} date={date} />
      <BodyComments content={content} comments={comments} />
    </>    
  )
}

export default MainBody;
