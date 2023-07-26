export function replaceToEmoji(content: number[]) {
	const emojis = ["🚀", "🇧🇷", "☘️", "🤘🏼", "🧑🏼‍🚀"];

	const arrayWithEmojis = content.map((number) =>
		number % 2 === 0 ? emojis[number % emojis.length] : number.toString()
	);

	const result = arrayWithEmojis;

	return result;
}
