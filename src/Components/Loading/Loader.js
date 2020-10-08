import React from 'react';
import { Icon } from '@mdi/react';
import { mdiLoading } from '@mdi/js';

const Loading = () => {
    return(
        <div className="container text-center py-5 mt-5">
            <Icon path= { mdiLoading } className="mdi-spin" spin size="55px" />
        </div>
    );
};

export default Loading;