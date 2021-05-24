/*Tweet component - returns JSX of tweet with data: {username, authorName, date, message} */ 
function Tweet(props) {
    const {username, authorName, date, message} = props
    return (
        <div>
            <h1>{username}</h1>
            <h2>{authorName}</h2>
            <p>{date}</p>
            <p>{message}</p>
        </div>
    )
}