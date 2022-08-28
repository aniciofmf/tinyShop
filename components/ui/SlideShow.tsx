import { FC } from "react";
import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import styles from "../../styles/SlideShow.module.css";

export const SlideShow: FC<{ images: string[] }> = ({ images }) => {
	return (
		<div className="slide-container">
			<Slide easing="ease" duration={2000} pauseOnHover={true} indicators={true}>
				{images.map((image) => {
					const url = `/products/${image}`;
					return (
						<div key={image} className={styles.perslide}>
							<div
								style={{
									backgroundImage: `url(${url})`,
									backgroundSize: "cover",
								}}
							></div>
						</div>
					);
				})}
			</Slide>
		</div>
	);
};
