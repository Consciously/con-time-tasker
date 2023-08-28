export const validateWorkWeekDates = (
	startOfWeek: Date,
	endOfWeek: Date,
): void => {
	const isMonday = (date: Date) => date.getDay() === 1; // 1 is Monday
	const isFriday = (date: Date) => date.getDay() === 5; // 5 is Friday

	if (!isMonday(startOfWeek) || !isFriday(endOfWeek)) {
		throw new Error(
			'Invalid date range. The week should start on a Monday and end on a Friday.',
		);
	}

	const dateDifference =
		endOfWeek.getTime() - startOfWeek.getTime() / (1000 * 3600 * 24);

	if (dateDifference !== 4) {
		// 4 days difference between Monday and Friday
		throw new Error('Invalid date range. The range should be exactly 5 days.');
	}
};
