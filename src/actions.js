export const resetTimer = () => ({
	type : "RESET_COUNTER",
	newValue:100
});

export const decrement = () => ({
	type : "DECREMENT"
});

export const userDetails = ({data}) => ({
	type : "USER_DETAILS",
	details: data
});

export const changeRed = () => ({
	type : "RED",
	newValue:"red",
	newValue2:"green",
	imagePath :"https://ubisafe.org/images/transparent-logo-red.png"
});

export const changeBlue = () => ({
	type : "BLUE",
	newValue:"blue",
	newValue2:"red",
	imagePath :"https://images.indianexpress.com/2017/08/odisha-cricket-association-shiv-sundar-das-sports-news-cricket-indian-express.jpg"
});

export const changeGreen = () => ({
	type : "GREEN",
	newValue:"green",
	newValue2:"blue",
	imagePath :"https://thumbs.dreamstime.com/z/word-green-green-grass-white-29804471.jpg"
});

