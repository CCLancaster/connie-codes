import React from 'react';

import Layout from '../components/Layout';

import resume from '../assets/Connie Lancaster Web Developer One Page.pdf'

const IndexPage = () => <Layout>
	<article id="main">
		<header>
			<h2>Resume</h2>
            <div>
            <iframe src={resume} width="75%" height="1000px"></iframe>
        </div>
		</header>
        <body>
        </body>
	</article>

</Layout>;

export default IndexPage;
