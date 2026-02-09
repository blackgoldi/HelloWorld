import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function RoadmapPage() {
	const [markdown, setMarkdown] = React.useState('');
	const [shown, setShown] = React.useState(false);

	React.useEffect(() => {
		fetch('../src/files/instructions.md')
			.then((res) => res.text())
			.then(setMarkdown);
	}, []);

	function handleShow(event: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>) {
		event.preventDefault();
		setShown((prev) => (prev == true ? false : true));
	}

	return (
		<>
			<a href="#" onClick={handleShow} onTouchStart={handleShow}>
				<strong>Роудмап {shown ? '(Скрыть)' : '(Показать)'}</strong>
			</a>
			<div style={{ display: shown ? 'block' : 'none' }}>
				<br />
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
			</div>
		</>
	);
}
