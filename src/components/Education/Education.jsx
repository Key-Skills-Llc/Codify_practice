import React, { useContext, useEffect } from "react";
import { StyledEducation } from "./styled";
import { useNavigate } from "react-router-dom";
import { VideoContext } from "../../context/store/VideoContext";

const Education = () => {
	const navigate = useNavigate();
	const { getVideos, videoList } = useContext(VideoContext);

	const navigateEducationVideo = (id) => {
		navigate({
			pathname: `/education/${id}`,
		});
	};

	useEffect(() => {
		getVideos();
	}, []);

	return (
		<StyledEducation.Wrapper>
			<StyledEducation.VideosWrapper>
				{videoList.map((educationItem, idx) => (
					<StyledEducation.VideoWrapper key={idx}>
						<StyledEducation.VideoGallery
							src={educationItem.href}
							onClick={() => navigateEducationVideo(educationItem.id)}
						/>
						<StyledEducation.VideoTitle>
							{educationItem.title}
						</StyledEducation.VideoTitle>
					</StyledEducation.VideoWrapper>
				))}
			</StyledEducation.VideosWrapper>
		</StyledEducation.Wrapper>
	);
};

export default Education;
