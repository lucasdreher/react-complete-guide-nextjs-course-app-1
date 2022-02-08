import Link from 'next/link';
import { Fragment } from 'react';

const NewsPage = () => {
	return (
		<Fragment>
			<h1>The News Page</h1>
			<ul>
				<li>
					<Link href="/news/link-1-item">Link 1</Link>
				</li>
				<li>Link 2</li>
			</ul>
		</Fragment>
	);
};

export default NewsPage;
