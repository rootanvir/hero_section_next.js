import React from 'react';

const RootLayer = ({children}) => {
  return (
    <html lang='en'>
      <body className='bg-white'>
        <div> 
          
        </div>
        {children}
      </body>
    </html>
  );
}

export default RootLayer;