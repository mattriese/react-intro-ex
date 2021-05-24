/** App component - Renders a div with three tweets with 
 * {username, authorName, date, message} */
function App() {
    let tweets = [
        {
            username: "user1", 
            authorName: "User", 
            date: "1/1/2025", 
            message: "Hi im from the future"
        },
        {
            username: "user2", 
            authorName: "UserTWO", 
            date: "1/1/1920", 
            message: "Hi im from past"
        },
        {
            username: "user3", 
            authorName: "UserTHREE", 
            date: "1/1/2025", 
            message: "Hi im also from the future"
        },
            
    ];

    let tweetJSXs = tweets.map(t => {
        return (
            <Tweet username={t.username} authorName={t.authorName} date={t.date} message={t.message}/>
        )
    });

    return (
        <div>
            {tweetJSXs}
        </div>

    )

}