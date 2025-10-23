import React from 'react';

const RootLayer = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <div> 
          RootLayer
        </div>
        {children}
      </body>
    </html>
  );
}

export default RootLayer;