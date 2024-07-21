export const successResponse = <T>(data: T) => ({
	status: "success",
	data,
	timestamp: new Date().toISOString(),
});
