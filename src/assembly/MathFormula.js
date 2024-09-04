import React, { useEffect, useRef } from 'react';  
import katex from 'katex';  
import 'katex/dist/katex.min.css';  
const MathFormula = ({ formula, displayMode = false }) => {  
    const ref = useRef(null);  
    useEffect(() => {  
      if (ref.current) {  
        katex.render(formula, ref.current, {  
          displayMode: displayMode,  
          throwOnError: false  
        });  
      }  
    }, [formula, displayMode, ref.current]);  
    return <span ref={ref} />;  
  }; 

  export default MathFormula; 
