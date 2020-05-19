function findText(content, node, text) {
	const perfect_match = content === text;
	if (perfect_match) return true;
	const hasText = (n) => n.textContent === text;
	const nodeHasText = hasText(node);
	const childrenDontHaveText = Array.from(node.children).every(
		(child) => !hasText(child),
	);
	return nodeHasText && childrenDontHaveText;
}

export default findText;
