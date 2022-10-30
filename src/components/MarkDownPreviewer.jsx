import React, { useState } from 'react';
import Badge from "react-bootstrap/Badge";
import { marked } from 'marked';

const MarkDownPreviewer = () => {

    // let marketd = marked()


    let markDownInit = {
        markdown: "",
    }

    const [stateMark, setStateMark] = useState(markDownInit)

    const updateMarkDown =(markdown)=>{

        setStateMark({
            ...stateMark,
            markdown: markdown
        })

        console.log(stateMark.markdown)
    }

    let htmlf = marked.parse(stateMark.markdown)

    // Styles
    const inputStyle = {
        width: "400px",
        height: "50vh",
        marginLeft: "auto",
        marginRight: "auto",
        padding:"10px"
    }

    const outputStyle = {
        width: "auto",
        height: "auto",
        backgroundColor: "#DCDCDC",
        marginLeft: "auto",
        marginRight: "auto",
        padding:"10px"
    }


  return (
    

    <div >
        <div className="container mt-4 pt-4">
          <div className="row mt-4 pt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Markdown Input
                  </Badge>
                </h4>

                <div className="mark-input">
                    <textarea className="input" 
                    style={inputStyle} 
                    value={stateMark.markdown}
                    onChange={(e)=>{updateMarkDown(e.target.value)}}
                    > </textarea>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
                <div style={outputStyle} dangerouslySetInnerHTML={{ __html: htmlf }}>
                
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MarkDownPreviewer;