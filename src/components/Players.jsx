import { useState } from "react";

export default function Players({symbol, name, onNameChange, ...props}){
    const
        [
        playerName,
        changePlayerName
        ] = useState(name);

    const 
        [
        isEditing, 
        setIsEditing
        ] = useState(false);
    

    function handleEditing(){
        // setIsEditing(!isEditing);
        setIsEditing((wasEditing) => !wasEditing);
        // 'wasEditing' automatically get the value of
        // current state
        if (isEditing){
            onNameChange(symbol, playerName);
        }
        
    }

    function handleName(object){
        // console.log(object)
        changePlayerName(object.target.value);
        //
        //
        
    }
    // the 'object' automatically gets the input in
    // which its called in the form of a JS Object
    // in that object, there are additional props
    // like target and inside that there is value,
    // hence, we access new value that is entered
    // by 'object.target.value'
    
    return (
        <li {...props}>
            <span className="player">

              {isEditing ? (
                <input 
                    type="text" 
                    required
                    value = {playerName}
                    onChange={handleName}
                    ></input>
              )
              :
              (
              <span className = "player-name">
                {playerName}
              </span>
              )
              }

    
              <span className="player-symbol">
                {symbol}
              </span>

              <button onClick={handleEditing}>
                {isEditing ? "Save" : "Edit"}
              </button>

            </span>
        </li>
    );
}