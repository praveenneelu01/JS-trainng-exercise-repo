import React from 'react';
import Layout from '../components/Layout';
import { GitHubIcon} from '../components/icons'

const About = () => {
    
    return ( 
        <Layout title="About" description="This is the About page" >
            <div className="text-center mt-5">
                <h1>About</h1>
                <p>My name is Jabastin. Working as SE in ameex</p>

            </div>
        </Layout>
     );
}
 
export default About;