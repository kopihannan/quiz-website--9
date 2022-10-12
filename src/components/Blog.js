import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='m-8 text-justify shadow p-8 rounded'>
                <h1 className='mb-3 font-medium text-2xl'>1: What is the purpose of react router?</h1>
                <p className='font-medium'>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                    React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
            </div>
            <div className='m-8 text-justify shadow p-8 rounded'>
                <h1 className='mb-3 font-medium text-2xl'>2: how does context api work</h1>
                <p className='font-medium'>The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It’s aimed at solving the problem of prop drilling.

                    “Prop drilling (also called “threading”) refers to the process you have to go through to get data to parts of the React Component tree.” – Kent C. Dodds.

                    Before the Context API, we could use a module to solve this, which led to the increasing popularity of state management libraries like Redux. Libraries like Redux allows you to get data from the store easily, anywhere in the tree. However, let’s focus on the Context API.

                    Related: The what and why of Redux.

                    The Context API has actually always been there but was considered experimental. Moving forward the API was improved to stability, and as of the release of version 16.3, the feature was made available and subsequently considered a new addition to the clan of features that make React a wonderful framework.

                    Before now many of the tools we have been used to like react-redux, react-native-flux, MobX-react, and react-router all used context to function, so you were probably already using and loving it, even if not directly. So let’s learn how best to use it.</p>
            </div>
            <div className='m-8 text-justify shadow p-8 rounded'>
                <h1 className='mb-3 font-medium text-2xl'>3: React JS useRef Hook</h1>
                <p className='font-medium'>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
                    <br />
                    const refContainer = useRef(initialValue);<br />
                    The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
            </div>
        </div>
    );
};

export default Blog;