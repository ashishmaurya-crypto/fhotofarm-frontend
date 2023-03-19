import React, { Component } from 'react';
import { ColorRing } from 'react-loader-spinner';

export default class LoadingScreen extends Component {
    render() {
        return (
            <div className='globle_blur_container'>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#0f4674', '#1c84e6', '#0d8687', '#1ee6d9', '#0f4674']}
                />
            </div>
        )
    }
}
