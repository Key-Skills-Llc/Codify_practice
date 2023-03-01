import React, { useReducer } from "react";
import { VideoContext } from "./VideoContext";
import axios from "axios";

const mockData = [
	{
		title: "название обучающего видео название обучающего видео название обучающего видео",
		href: "https://mobimg.b-cdn.net/v3/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg",
		id: 1,
	},
	{
		title: "название обучающего видео название обучающего видео название обучающего видео",
		href: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
		id: 2,
	},
	{
		title: "название обучающего видео название обучающего видео название обучающего видео",
		href: "https://mobimg.b-cdn.net/v3/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg",
		id: 3,
	},
];

const currentVideo = {
	href: "https://video.asos-media.com/products/ASOS/_media_/aaa/aaa9c24a-b0ed-4cbf-a589-617da480683a.mp4",
};

const initialVideoState = {
	videoList: [],
	currentVideo: {},
};

const reducer = (state = initialVideoState, action) => {
	switch (action.type) {
		case "GET_VIDEO_LIST": {
			return {
				...state,
				videoList: action.payload,
			};
		}
		case "GET_CURRENT_VIDEO": {
			return {
				...state,
				currentVideo: action.payload,
			};
		}
		default:
			return state;
	}
};

const VideoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialVideoState);

	const getVideos = () => {
		// const { data } = await axios('URL')

		const setVideoListAction = {
			type: "GET_VIDEO_LIST",
			payload: mockData,
		};

		dispatch(setVideoListAction);
	};

	const getVideoById = (id) => {
		// const { data } = await axios('URL/ID')

		const setCurrentVideoAction = {
			type: "GET_CURRENT_VIDEO",
			payload: currentVideo,
		};

		dispatch(setCurrentVideoAction);
	};

	const defaultProps = {
		getVideos,
		getVideoById,
		videoList: state.videoList,
		currentVideo: state.currentVideo,
	};

	return <VideoContext.Provider value={defaultProps}>{children}</VideoContext.Provider>;
};

export default VideoProvider;
