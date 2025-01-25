import { getWebflowCMSData } from '../lib/webflow';

export async function getStaticProps() {
  const posts = await getWebflowCMSData('YOUR_COLLECTION_ID'); // Replace with your Webflow Collection ID
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>Webflow CMS Data</h1>
      {posts.map((post) => (
        <h2 key={post._id}>{post.name}</h2>
      ))}
    </div>
  );
}

export default function Home() {
    return <h1>Welcome to My Next.js Site</h1>;
  }
  
  export default function Home() {
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", textAlign: "center" }}>
        <h1>AARBAA</h1>
        <h2>Americans Against Road Bikers Association of America</h2>
        <p>
          Welcome to AARBAA, a community dedicated to advocating for safer roads and responsible road usage.
          We strive to educate, inform, and engage the public on the issues caused by reckless road biking.
        </p>
        
        <h3>Our Mission</h3>
        <p>
          At AARBAA, we believe in creating safer streets for pedestrians, motorists, and responsible cyclists.
          We work to promote awareness, support legislative action, and provide resources for better road management.
        </p>
  
        <h3>Get Involved</h3>
        <p>
          Join our movement, participate in discussions, and help make a difference. Follow us for updates,
          advocacy efforts, and ways to support our cause.
        </p>
  
        <footer style={{ marginTop: "30px", fontSize: "14px" }}>
          <p>Contact: info@aarbaa.org</p>
          <p>&copy; {new Date().getFullYear()} AARBAA. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
  