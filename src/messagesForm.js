import React from 'react';

const styles = {
    form: {
        borderTop: '2px solid #373B44',
        padding: '.5rem',
        display: 'flex',
      },
};

const MessageForm = ({addMessage}) => {
    const onSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        addMessage({
            content: data.get('content'),
            author: 'david',
            creation: Date.now(),
        })
        e.target.elements.content.value = ''
      } 
    return (
        <form css={styles.form}  onSubmit={onSubmit}>
          <input type="input" name="content" css={styles.content} />
          <input type="submit" value="Send" css={styles.send} />
        </form>
      )
}

export default MessageForm