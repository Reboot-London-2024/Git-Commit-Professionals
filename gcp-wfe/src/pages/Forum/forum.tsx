import React from 'react';
import './styles.css'; // Import the CSS file for styling
import Header from "../../components/Header/header";



interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  timestamp: string;
}

function ForumPost(props: Post) {
  return (
    <section className="forum-post">
      <div className="post-content">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
      <div className="post-details">
        <span className="author">Posted by: {props.author}</span>
        <span className="timestamp">Posted on: {props.timestamp}</span>
      </div>
    </section>
  );
}

function Forum() {
  // Sample forum posts data
  const forumPosts: Post[] = [
    {
      id: 1,
      title: "Question: How do I access the company intranet?",
      content: "Hi all, I'm a new joiner and I'm having trouble accessing the company intranet. Can someone please guide me through the process?",
      author: "John Doe",
      timestamp: "June 11, 2024"
    },
    {
      id: 2,
      title: "Idea: Organize a Welcome Lunch for New Joiners",
      content: "It would be great to have a monthly welcome lunch for new joiners to get to know each other and meet members of different teams. What do you all think?",
      author: "Jane Smith",
      timestamp: "June 10, 2024"
    },
    // Add more posts here...
    {
      id: 3,
      title: "Question: How do I request time off?",
      content: "I'm not sure how to go about requesting time off. Can someone provide some guidance on the process?",
      author: "Alice Johnson",
      timestamp: "June 9, 2024"
    },
    {
      id: 4,
      title: "Idea: Start a Book Club",
      content: "I think it would be fun to start a book club within the company. We could discuss books related to our industry or personal development. Who's interested?",
      author: "Bob Williams",
      timestamp: "June 8, 2024"
    },
    // Add more posts here...
    {
      id: 5,
      title: "Question: What's the dress code for Fridays?",
      content: "I've heard mixed things about the dress code on Fridays. Can someone clarify what's acceptable?",
      author: "Eva Martinez",
      timestamp: "June 7, 2024"
    },
    {
      id: 6,
      title: "Idea: Improve the Onboarding Process",
      content: "I believe we can improve the onboarding process for new employees. Let's brainstorm ideas to make it smoother and more welcoming.",
      author: "Michael Brown",
      timestamp: "June 6, 2024"
    },
    // Add more posts here...
    {
      id: 7,
      title: "Question: How do I set up my email signature?",
      content: "I'm not sure how to set up my email signature to include my contact information and job title. Can someone help?",
      author: "Sophia Lee",
      timestamp: "June 5, 2024"
    },
    {
      id: 8,
      title: "Idea: Volunteer Day",
      content: "Let's organize a company-wide volunteer day where we give back to the community. It would be a great team-building opportunity.",
      author: "William Davis",
      timestamp: "June 4, 2024"
    },
    // Add more posts here...
    {
      id: 9,
      title: "Question: How do I submit an expense report?",
      content: "I need to submit an expense report for a business trip, but I'm not sure how to do it. Can someone provide instructions?",
      author: "Olivia Garcia",
      timestamp: "June 3, 2024"
    },
    {
      id: 10,
      title: "Idea: Wellness Program",
      content: "We should implement a wellness program to promote healthy habits among employees. This could include fitness challenges, mindfulness sessions, and nutritional workshops.",
      author: "Daniel Rodriguez",
      timestamp: "June 2, 2024"
    },
  ];

  return (
    
    <div className="forum-container">
        <Header />
      <header className="forum-header">
        <h1>Welcome to the New Joiners Forum</h1>
      </header>

      <main className="forum-main">
        {forumPosts.map(post => (
          <ForumPost
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
            timestamp={post.timestamp}
          />
        ))}
      </main>

      <footer className="forum-footer">
        <a href="new_post.html">Create New Post</a>
      </footer>
    </div>
  );
}

export default Forum;