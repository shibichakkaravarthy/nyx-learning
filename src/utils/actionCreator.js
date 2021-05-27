export const asyncActionGenerator = (name) => {
	const actionNames = {
		request: name.toUpperCase() + '_REQUEST',
		success: name.toUpperCase() + '_SUCCESS',
		error: name.toUpperCase() + '_ERROR',
	}
	
	const requestAction = (requestPayload) => ({type: actionNames.request, payload: requestPayload})
	const successAction = (successPayload) => ({type: actionNames.success, payload: successPayload})
	const errorAction = (errorPayload) => ({type: actionNames.error, payload: errorPayload})

	return {request: requestAction, success: successAction, error: errorAction, actionNames}
}

export const plainActionGenerator = (name) => {
	const action = (payload) => ({type: name, payload})

	return {action, actionName: name}
}