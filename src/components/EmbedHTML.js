import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<style>
::-webkit-input-placeholder {color:#959797;}
::-moz-placeholder          {color:#959797;}/* Firefox 19+ */
:-moz-placeholder           {color:#959797;}/* Firefox 18- */
:-ms-input-placeholder      {color:#959797;}
</style>

`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});