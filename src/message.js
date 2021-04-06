import React from 'react';
import moment from 'moment';
/** @jsx jsx */
import { jsx } from '@emotion/core'

const styles = {
    message: {
            margin: '.2rem',
            padding: '.2rem',
            // backgroundColor: '#66728E',
            ':hover': {
                backgroundColor: 'rgba(255,255,255,.2)',
            },
        },
};



const Message = ({message}) => {
    return(
        <li key={message.id} css={styles.message}>
            <p>
                <span>{message.author}</span>
                    {' '}
                <span>{(moment(message.creation)).format('LLL')}</span>
            </p>
            <div>
                {
                    message.content
                    .split(/(\n +\n)/)
                    .filter( el => el.trim() )
                    .map( el => <p>{el}</p>)
                }
            </div>
        </li>
    )
}

export default Message