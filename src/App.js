import './App.css';
import { Page } from '@shopify/polaris';
import InputArea from './components/InputArea';
import { useSelector } from 'react-redux';
import Post from './components/Post';

function App() {
	const images = useSelector((state) => state.images.images);

	return (
		<Page
			// fullWidth
			title="Spacestagram"
			subtitle="Brought to you by NASA's image API"
		>
			<InputArea />
			{images.map((image) => (
				<Post
					key={image.title}
					title={image.title}
					explanation={image.explanation}
					date={image.date}
					url={image.url}
				/>
			))}
		</Page>
	);
}

export default App;
