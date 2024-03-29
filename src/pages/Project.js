import './../css/App.css';

export default function About() {
    return (
        <div className="view App_project">
            <h1>Project</h1>
            <div className="content">
                <div className="content--inner">
                    Application created to showcase multiple transitions in React projects, based on the route is entering. If you want to know more about this approach check these links below.
                    <h2>Talks where this project is showcased</h2>
                    <ul>
                        <li>A sleek view transitions recipes for web apps at <a href="https://www.youtube.com/watch?v=BgeOAzXotbY&t=3s">Real World React</a> and <a href="https://www.youtube.com/watch?v=srQP3uqMo_M&t=54s">webcamp Zagreb 2018</a></li>
                        <li>Insights from building rich animated experiences in React at <a href="https://www.youtube.com/watch?v=S3u-ccn4PEM">Byteconf React</a> and <a href="https://www.youtube.com/watch?v=tKsaIU0YqLk&t=26608s">React Day Berlin 2018</a></li>
                    </ul>
                    <h2>Posts this project is mentioned</h2>
                    <ul>
                        <li><em>Coming soon...</em></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}