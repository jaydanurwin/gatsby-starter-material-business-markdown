import React from 'react';
import Button from '@material/react-button';

import './mdcReactButton.module.scss'
// add the appropriate line(s) in Step 3a if you are using compiled CSS instead.

const MDCReactButton = ({ children }) => {
        return (
            <>
            <div>
                <Button
                    raised                    
                    onClick={() => console.log('clicked!')}
                >
                    {children}
        </Button>
            </div>
            </>
        );
    }

export default MDCReactButton;