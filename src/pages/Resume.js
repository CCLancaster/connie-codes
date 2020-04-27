import React from 'react';

import Layout from '../components/Layout';

import resume from '../assets/Connie-Lancaster-Resume.pdf'

const IndexPage = () => <Layout>
	<article id="main">
		<header>
			<h2>Resume</h2>
            <div>
            <embed src={resume} type="application/pdf" width="75%" height="1000px"></embed>
        </div>
		</header>
        <body>
        </body>
	</article>

</Layout>;

export default IndexPage;
