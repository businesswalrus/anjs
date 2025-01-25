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
  
  }
  
  export default function Home() {
    return (
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px", textAlign: "center" }}>
        {/* Hero Section */}
        <header style={{ background: "#FF6B6B", color: "#fff", padding: "60px 0" }}>
          <div>
            <h1>Welcome to AARBAA</h1>
            <h2>Americans Against Road Bikers Association of America</h2>
            <p>Your voice against reckless road biking. Let's make our streets safer for everyone.</p>
            <a href="#join" style={{ backgroundColor: "#FF6B6B", color: "#fff", padding: "10px 20px", textDecoration: "none", borderRadius: "5px" }}>Join the Movement</a>
          </div>
        </header>
  
        {/* About Us Section */}
        <section id="about-us" style={{ padding: "50px 20px", background: "#f4f4f4" }}>
          <h2>About AARBAA</h2>
          <p>
            We are the Americans Against Road Bikers Association of America (AARBAA). Our mission is to reduce the risks and dangers caused by reckless road biking. We advocate for legislative action, educate the public, and work to make our streets safer for everyone.
          </p>
        </section>
  
        {/* Issues Section */}
        <section id="issues" style={{ padding: "50px 20px", background: "#fff" }}>
          <h2>The Problems We Face</h2>
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: "30px" }}>
            <div style={{ width: "30%" }}>
              <h3>Reckless Biking</h3>
              <p>Unsafe biking practices put both cyclists and drivers at risk. We aim to advocate for better road usage policies.</p>
            </div>
            <div style={{ width: "30%" }}>
              <h3>Lack of Awareness</h3>
              <p>Many drivers and cyclists are unaware of the rules, leading to accidents. We provide resources to educate the public.</p>
            </div>
            <div style={{ width: "30%" }}>
              <h3>Unregulated Roads</h3>
              <p>Inadequate infrastructure and lack of regulation make biking on roads dangerous. We call for better planning and regulation.</p>
            </div>
          </div>
        </section>
  
        {/* Call to Action Section */}
        <section id="join" style={{ padding: "50px 20px", background: "#333", color: "#fff" }}>
          <h2>Join the Movement</h2>
          <p>Help us advocate for safer roads. Become part of our community and fight for change!</p>
          <a href="mailto:info@aarbaa.com" style={{ backgroundColor: "#FF6B6B", color: "#fff", padding: "10px 20px", textDecoration: "none", borderRadius: "5px" }}>Get Involved</a>
        </section>
  
        {/* Footer Section */}
        <footer style={{ padding: "20px", textAlign: "center", background: "#222", color: "#fff" }}>
          <p>&copy; 2025 AARBAA. All Rights Reserved.</p>
          <p>Contact us: <a href="mailto:info@aarbaa.com" style={{ color: "#fff", textDecoration: "underline" }}>info@aarbaa.com</a></p>
        </footer>
      </div>
    );
  }
  

